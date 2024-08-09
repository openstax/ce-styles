import * as fs from 'fs';

// const input = `
// .os-table.os-top-titled-container > table > tbody > tr:not(.gray-shading):not(.yellow-shading):not(.purple-shading).header-row > td:last-child:not(:only-child) {
//   border-left-color: #757474;
//   border-left-style: solid;
//   border-left-width: 0.08rem;
//   border-right-color: transparent;
//   border-right-style: none;
//   border-right-width: 0;
// }

// .os-table.os-top-titled-container > table > tbody > .gray-shading {
//   background-color: #f2f2f2;
// }

// .os-table.os-top-titled-container > table > tbody > .gray-shading > td {
//   border-bottom-color: #757474;
//   border-bottom-style: solid;
//   border-bottom-width: 0.08rem;
//   border-left-color: #757474;
//   border-left-style: solid;
//   border-left-width: 0.08rem;
//   border-right-color: #757474;
//   border-right-style: solid;
//   border-right-width: 0.08rem;
//   border-top-color: #757474;
//   border-top-style: solid;
//   border-top-width: 0.08rem;
//   color: #000;
//   font-family: "Noto Sans", StixGeneral;
//   font-size: 1rem;
//   padding-bottom: 0.7rem;
//   padding-left: 0.7rem;
//   padding-right: 0.7rem;
//   padding-top: 0.7rem;
// }

// .os-table.os-top-titled-container > table > tbody > .gray-shading > td > ul:not([data-labeled-item=true]) {
//   margin-left: 24px;
// }

// .os-table.os-top-titled-container > table > tbody > .gray-shading > td > ol {
//   margin-left: 24px;
// }

// .os-table.os-top-titled-container > table > tbody > .gray-shading[data-valign=top] {
//   vertical-align: top;
// }

// .os-table.os-top-titled-container > table > tbody > .gray-shading > td[data-align=left] {
//   text-align: left;
// }

// .os-table.os-top-titled-container > table > tbody > .gray-shading > td[data-align=right] {
//   text-align: right;
// }

// .os-table.os-top-titled-container > table > tbody > .gray-shading > td[data-align=center] {
//   text-align: center;
// }

// .os-table.os-top-titled-container > table > tbody > .purple-shading {
//   background-color: #f4eaf6;
// }

// .os-table.os-top-titled-container > table > tbody > .purple-shading > td {
//   border-bottom-color: #757474;
//   border-bottom-style: solid;
//   border-bottom-width: 0.08rem;
//   border-left-color: #757474;
//   border-left-style: solid;
//   border-left-width: 0.08rem;
//   border-right-color: #757474;
//   border-right-style: solid;
//   border-right-width: 0.08rem;
//   border-top-color: #757474;
//   border-top-style: solid;
//   border-top-width: 0.08rem;
//   color: #000;
//   font-family: "Noto Sans", StixGeneral;
//   font-size: 1rem;
//   padding-bottom: 0.7rem;
//   padding-left: 0.7rem;
//   padding-right: 0.7rem;
//   padding-top: 0.7rem;
// }
// `

const arrangeSelectorsAlphabetically = (input) => {
  // Parse input string to separate into selectors & props
  let input_array = input.split('}').map((rule) => {
    const selector_props = {
      selector: rule.split('{')[0].trim(),
      props: rule.split('{')[1]
    }
    return selector_props
  });
  // Sort alphabetically by selector
  input_array.sort((a, b) => a.selector.localeCompare(b.selector));
  // Clean up some junk
  input_array = input_array.filter((item) => item.props !== undefined);
  // Put back into CSS form
  let css_string = '';
  for (let i in input_array) {
    const object_css = `${input_array[i].selector} { ${input_array[i].props} }\n\n`;
    // console.log(input_array[i], object_css);
    css_string = css_string + object_css;
  }
  return css_string;
}

const blackToHex = (input) => {
  return input.split('black').join('#000000');
}

const singleToDoubleQuotes = (input) => {
  return input.replaceAll("\'", "\"");
}

const main = (args) => {
  for (let i in args) {
    const input_file_string = fs.readFileSync(args[i], 'utf8');
    const output_file_path = args[i].split('.').join('.normalized.');
    let css = arrangeSelectorsAlphabetically(input_file_string);
    css = blackToHex(css);
    css = singleToDoubleQuotes(css);
    fs.writeFileSync(output_file_path, css, (err) => { if (err) throw err; });
  }
}

main(process.argv.slice(2));
