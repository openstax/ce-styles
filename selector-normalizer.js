import * as fs from 'fs';

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
