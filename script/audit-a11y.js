import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import postcss from "postcss";
import parser from "postcss-selector-parser";
import fs from "node:fs";
import path from "node:path";

const getPlaywrightContext = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  return { browser, context, page };
};

const isTextFriendly = (tag) => {
  return (
    (tag.length === 2 && tag.startsWith("h") && !isNaN(tag[1])) ||
    [
      "nav",
      "li",
      "a",
      "td",
      "div",
      "th",
      "dt",
      "dd",
      "label",
      "button",
      "caption",
      "figcaption",
      "summary",
      "legend",
    ].includes(tag)
  );
};

const isSelfClosing = (tag) => {
  return [
    "img",
    "input",
    "br",
    "hr",
    "meta",
    "link",
    "area",
    "base",
    "col",
    "embed",
    "source",
    "track",
    "wbr",
  ].includes(tag);
};

const getRequiredAttributes = (tag, existingAttrs) => {
  const required = {};

  if (tag === "img" && !existingAttrs.alt) {
    required.alt = "Sample image";
    required.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23ddd'/%3E%3C/svg%3E";
  }
  if (tag === "input" && !existingAttrs.type) {
    required.type = "text";
  }
  if (tag === "a" && !existingAttrs.href) {
    required.href = "#";
  }

  return required;
};

const needsWrapper = (childTag) => {
  return {
    li: { wrapperTag: "ul", siblingTags: ["li"] },
    dt: { wrapperTag: "dl", siblingTags: ["dt", "dd"] },
    dd: { wrapperTag: "dl", siblingTags: ["dt", "dd"] },
    tr: { wrapperTag: "tbody", siblingTags: ["tr"] },
    td: { wrapperTag: "tr", siblingTags: ["td", "th"] },
    th: { wrapperTag: "tr", siblingTags: ["td", "th"] },
    option: { wrapperTag: "select", siblingTags: ["option"] },
    tbody: { wrapperTag: "table", siblingTags: ["tbody", "thead", "tfoot"] },
    thead: { wrapperTag: "table", siblingTags: ["tbody", "thead", "tfoot"] },
    tfoot: { wrapperTag: "table", siblingTags: ["tbody", "thead", "tfoot"] },
  }[childTag];
};

const renderObjToHtml = (obj, parentTag = null) => {
  if (!obj) return "";

  // Add required attributes for accessibility
  const requiredAttrs = getRequiredAttributes(obj.tag, obj.attrs);
  const allAttrs = { ...requiredAttrs, ...obj.attrs };

  const classStr = obj.classes.length
    ? ` class="${obj.classes.join(" ")}"`
    : "";
  const idStr = obj.id ? ` id="${obj.id}"` : "";
  const attrStr = Object.entries(allAttrs)
    .map(([k, v]) => (v ? `${k}="${v}"` : k))
    .join(" ");
  const attrStrWithSpace = attrStr ? ` ${attrStr}` : "";

  // Handle self-closing tags
  if (isSelfClosing(obj.tag)) {
    return `<${obj.tag}${idStr}${classStr}${attrStrWithSpace} />`;
  }

  // Auto-fill some content for a11y tools to have something to look at
  let content = "";
  if (obj.children.length > 0) {
    // Check if any children need wrappers
    const childrenNeedingWrappers = obj.children.filter((child) =>
      needsWrapper(child.tag),
    );

    if (childrenNeedingWrappers.length > 0) {
      // Group children by wrapper needs
      const groups = [];
      let currentGroup = [];
      let currentWrapperInfo = null;

      for (const child of obj.children) {
        const wrapperInfo = needsWrapper(child.tag);

        if (
          currentWrapperInfo &&
          wrapperInfo &&
          currentWrapperInfo.wrapperTag === wrapperInfo.wrapperTag
        ) {
          currentGroup.push(child);
        } else {
          if (currentGroup.length > 0) {
            groups.push({
              wrapperInfo: currentWrapperInfo,
              children: currentGroup,
            });
          }
          currentGroup = [child];
          currentWrapperInfo = wrapperInfo;
        }
      }
      if (currentGroup.length > 0) {
        groups.push({
          wrapperInfo: currentWrapperInfo,
          children: currentGroup,
        });
      }

      // Render groups, wrapping where needed
      content = groups
        .map((group) => {
          if (group.wrapperInfo) {
            const { wrapperTag } = group.wrapperInfo;
            const childContent = group.children
              .map((child) => renderObjToHtml(child, wrapperTag))
              .join("");

            // Check if we need a second level wrapper (e.g., tr needs tbody which needs table)
            const secondLevelWrapper = needsWrapper(wrapperTag);
            if (
              secondLevelWrapper &&
              parentTag !== secondLevelWrapper.wrapperTag
            ) {
              return `<${secondLevelWrapper.wrapperTag}><${wrapperTag}>${childContent}</${wrapperTag}></${secondLevelWrapper.wrapperTag}>`;
            }
            return `<${wrapperTag}>${childContent}</${wrapperTag}>`;
          } else {
            return group.children
              .map((child) => renderObjToHtml(child, obj.tag))
              .join("");
          }
        })
        .join("");
    } else {
      content = obj.children
        .map((child) => renderObjToHtml(child, obj.tag))
        .join("");
    }
  } else if (isTextFriendly(obj.tag)) {
    content = `Sample ${obj.tag}`;
  }

  return `<${obj.tag}${idStr}${classStr}${attrStrWithSpace}>${content}</${obj.tag}>`;
};

const transformSelectorToHtml = (selector) => {
  let warning = null;
  let rootContainer = null;
  let currentParent = null;

  const processor = parser((selectors) => {
    // We only process the first version of a comma-separated selector for the bench
    const firstSelector = selectors.at(0);

    firstSelector.walk((node) => {
      // Warn about things we can't easily simulate in a static bench
      if (["pseudo-class", "pseudo-element"].includes(node.type)) {
        if (node.value.includes("hover") || node.value.includes("active")) {
          warning = `Interaction state (${node.value}) detected. Bench shows static default.`;
        }
        return; // Don't create elements for ::before or :not
      }

      if (node.type === "combinator") return;

      // Create element if it's a tag, class, id, or attribute
      if (["tag", "class", "id", "attribute"].includes(node.type)) {
        // If this is part of the same element (e.g. nav#toc), update currentParent
        // If it follows a combinator or space, create a NEW child

        if (
          !currentParent ||
          (node.prev() && node.prev().type === "combinator") ||
          (node.prev() && node.prev().type === "spacer")
        ) {
          const newEl = {
            tag: "div",
            classes: [],
            id: "",
            attrs: {},
            children: [],
          };

          if (!rootContainer) {
            rootContainer = newEl;
          } else {
            currentParent.children.push(newEl);
          }
          currentParent = newEl;
        }

        if (node.type === "tag") currentParent.tag = node.value;
        if (node.type === "class") currentParent.classes.push(node.value);
        if (node.type === "id") currentParent.id = node.value;
        if (node.type === "attribute") {
          currentParent.attrs[node.attribute] = node.value
            ? node.value.replace(/['"]/g, "")
            : "";
        }
      }
    });
  });

  processor.processSync(selector);

  return {
    html: renderObjToHtml(rootContainer),
    warning: warning,
  };
};

const buildHtmlGallery = (root, cssPath) => {
  let htmlGallery = `<!DOCTYPE html><html><head><link rel="stylesheet" href="${cssPath}">
  <style>
    section { border-bottom: 2px solid #eee; padding: 200px 20px; margin-bottom: 20px; }
    .warning { color: orange; font-weight: bold; font-family: sans-serif; }
  </style></head><body>`;

  // Process each rule
  root.walkRules((rule) => {
    // Skip keyframes or utility classes if necessary
    if (rule.selector.startsWith("@")) return;

    try {
      const domResult = transformSelectorToHtml(rule.selector);
      htmlGallery += `
          <section>
              <code>${rule.selector}</code>
              ${domResult.warning ? `<p class="warning">⚠️ ${domResult.warning}</p>` : ""}
              <div class="test-container">
                  ${domResult.html}
              </div>
          </section>`;
    } catch (e) {
      console.error(`Failed to parse: ${rule.selector}`, e);
    }
  });

  htmlGallery += `</body></html>`;

  return htmlGallery;
};

const buildTestBench = (cssFile, outputDir) => {
  const css = fs.readFileSync(cssFile, "utf8");
  const root = postcss.parse(css);

  const styleName = path.basename(cssFile);
  const htmlGallery = buildHtmlGallery(root, styleName);
  const outputIndex = path.resolve(outputDir, "index.html");
  const outputStyle = path.resolve(outputDir, styleName);
  fs.writeFileSync(outputIndex, htmlGallery);
  fs.writeFileSync(outputStyle, css);

  return { outputIndex, outputStyle };
};

const generateSummary = (results, styleName) => {
  let markdown = `\n# ♿ ${styleName}\n\n`;

  if (results.violations.length === 0) {
    markdown += `### ✅ All Style Permutations Passed!\nNo contrast or structural issues found in the SCSS-generated map.`;
  } else {
    markdown += `### ❌ Found ${results.violations.length} Violation Types\n\n`;
    markdown += `| Impact | Description | Elements Affected |\n| :--- | :--- | :--- |\n`;

    results.violations.forEach((v) => {
      v.nodes.forEach((node) => {
        markdown += `| **${v.impact.toUpperCase()}** | ${v.help} | `;
        markdown += node.target;
        markdown += " |\n";
      });
    });

    markdown += `\n\n> **Note:** Check the "Test for: [selector]" headings in your local \`test-bench.html\` to debug these specific cases.`;
  }

  return markdown.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

const run = async ({ page }, outputDir, cssFiles) => {
  let status = 0;
  const summaryPath =
    process.env.GITHUB_STEP_SUMMARY ?? path.resolve(outputDir, "summary.md");
  fs.rmSync(summaryPath, { force: true });
  for (const cssFile of cssFiles) {
    // 1. Create and load test bench
    const { outputIndex, outputStyle } = buildTestBench(cssFile, outputDir);
    const filePath = `file://${outputIndex}`;
    const styleName = path.basename(cssFile);

    await page.goto(filePath);

    // 2. Run the audit
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2aa", "wcag21aa"])
      .analyze();

    // 3. Process results for the GitHub Summary
    const summary = generateSummary(results, styleName);

    if (summaryPath) {
      fs.appendFileSync(summaryPath, summary);
    } else {
      console.error(summary);
    }

    // 4. Exit with error code if critical/serious issues exist
    const failureCount = results.violations.length;
    if (failureCount > 0) {
      console.error(
        `❌ ${styleName} - Found ${failureCount} accessibility violations.`,
      );
      status = 1;
    } else {
      console.log(`✅ ${styleName} - No accessibility violations found.`);
    }

    fs.rmSync(outputStyle);
  }
  return status;
};

const main = async () => {
  const ctx = await getPlaywrightContext();

  try {
    const args = process.argv.slice(2);
    const outputDir = path.resolve(args.shift());
    const downloadedFontsDir = path.resolve(args.shift());
    const cssFiles = args;
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.cpSync(
      downloadedFontsDir,
      `${outputDir}/${path.basename(downloadedFontsDir)}`,
      { recursive: true },
    );
    process.exitCode = await run(ctx, outputDir, cssFiles);
    console.log(
      "Finished! Check the summary tab in GitHub actions for more details.",
    );
  } finally {
    await ctx.browser.close();
  }
};

(async () => {
  await main();
})();
