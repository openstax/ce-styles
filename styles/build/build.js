import * as sass from 'sass-embedded';
import * as fs from 'fs';
import { toDataUri } from './functions.js';

// compiles a single style with given input & output paths
const compileAStyle = (path, outputPath) => {
  // compile with metrics
  let start = performance.now();
  const result = sass.compile(
    path,
    {
      loadPaths: [ '', 'styles/'],
      sourceMap: true,
      functions: {
        'toDataUri($type, $path)': function(args) {
          return new sass.SassString(
            toDataUri(args[0].textInternal, args[1].textInternal)
          );
        }
      }
    }
  );
  let finish = performance.now();
  console.log(`compile time is ${ Math.round(finish - start) / 1000} seconds`);

  // write
  fs.writeFileSync(outputPath, result.css, (err) => { if (err) throw err; });
}

// given a book keyword, gets input & output paths
const getPaths = (book) => {
  let bookPathBase = "styles/books/";
  let outPathBase = "styles/output/";
  let bookPath = '';
  let outPath = '';
  if (['generic', 'web', 'webview', 'webview-generic'].includes(book)) {
    bookPath = `${bookPathBase}generic/webview.scss`;
    outPath = `${outPathBase}webview-generic.css`;
  }
  else {
    bookPath = `${bookPathBase}${book}/book.scss`;
    outPath = `${outPathBase}${book}-pdf.css`;
  }
  return { bookPath, outPath };
}

// searches book files for instances of theme keyword.
// if at least one example is found, book is added to array & returned.
const booksByTheme = (theme) => {
  let booksInTheme = []
  fs.readdirSync("styles/books/").forEach((book) => {
    let { bookPath, _ } = getPaths(book);
    let themePos = fs.readFileSync(bookPath, 'utf8').search(`${theme}:::`);
    if (themePos !== -1) {
      booksInTheme.push(book);
    }
  });
  // special case - ap-physics just imports college physics, but needs to be compiled.
  if (theme === 'carnival') { booksInTheme.push ('ap-physics'); }
  return booksInTheme;
}

const main = (args) => {
  if (args.length === 0) {
    // if no books given, compile all books
    args = fs.readdirSync("styles/books/");
  } else if (['cardboard', 'carnival', 'corn', 'cosmos'].includes(args[0])) {
    // if theme keyword given, find all books with instances of theme
    args = booksByTheme(args[0]);
  }
  // compile styles for all books
  let total = args.length;
  console.log(`Compiling styles for ${total} books...`);
  args.forEach((book, index) => {
    let { bookPath, outPath } = getPaths(book);
    console.log(`${index+1}/${total} ${bookPath} -> ${outPath}`);
    compileAStyle(bookPath, outPath);
  })
}

main(process.argv.slice(2));
