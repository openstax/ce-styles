[![Coverage][codecov-image]][codecov-url]

# Install

1. Run `./script/install-docker` to install docker and docker-compose.

**For Windows Users:** If your username contains whitespace, the setup and installation will not work. Create a new user without whitespace in the username in order to succesfully complete installation.

# Create a baked pdf for a new book

1. Run `docker-compose run --rm -e HOST=katalyst01.cnx.org fetch-html --with-resources intro-business` to download the cnxml from the server to create the single-file HTML for the book.
   - **Note:** To see the list of books available see `./books.txt`
1. Run `docker-compose run --rm bake-book intro-business` to convert the single-file HTML locally into the "baked" book.
1. Run `docker-compose run --rm build-pdf intro-business` to create the pdf.


## Add a New Book to the config

The steps to add a new book (like `dark-matter-for-dummies`) are:

1. Find the UUID of the book you want
   - point your browser to the server containing the book (ie `cnx.org`) and find a book you want.
   - click "More Information" and copy the **ID**
1. add an entry to `./books.txt`


# Test

1. run `./script/test`

This will run the linter, generate sassdocs, and generate the guides to verify they work.

# Documentation

Recipe documentation can be found at [./recipes/](./recipes/) and an [example config file](./recipes/books/_example/).

1. run `./script/build-docs` to generate the SASS Docs
1. run `./script/build-guide statistics` to generate the HTML Guide for a book
1. open the generated file in your browser

## CSS Coverage

1. run `./script/fetch-html ${book_name}` to fetch the Raw HTML for a book
1. run `./script/bake-book ${book_name}`
1. The HTML Report should now be available at `./coverage/`

You can pass 3 arguments to `report-book-coverage` to change how it reports coverage:

- `--verbose` : outputs verbose/debugging output
- `--ignore-source-map` : covers the CSS even if a sourceMappingURL exists.
- `--cover-declarations` : generates coverage based on the declarations, as well as the selector
- **Note:** You can run `./script/report-book-coverage --all` to generate coverage using all the books

For more details on the commandline options see the [css-coverage](https://www.npmjs.com/package/css-coverage#commandline-options) documentation.


### Why CSS Coverage?

Code coverage is a great way to see if your tests exercises all the features of the codebase.

In the case of this repositoriy, the "codebase" contains all the CSS recipe files and the "tests" are the HTML snippets used to create a style guide.

By checking the code coverage, whenever a new feature in a book is added, a corresponding example in the HTML guide should be added as well (code coverage will complain otherwise).


## Bake Remotely

To rebake a book on a development instance.
To do that, you will need to upload a CSS recipe file, trigger a rebake, and then clear the cache.

1. run `./script/build-recipes` to generate the recipes CSS file
1. run `./script/bake-book-remote ${BOOK_NAME} ${VERSION}` to upload, trigger, and clear the cache

   - `${BOOK_NAME]` is the book’s name in the book list of `/books.txt`
   - `${VERSION]` is the `@#.##` in the target collection URL

### Example

For example, you want to rebake the "cooking" book:

1. you can run `./script/bake-book-remote cooking` and it will tell you to go to `http://foo.cnx.org/contents/${UUID}`
1. find the version (ie `7.16`) by looking at the URL or by clicking “More Information” at the bottom of the page
1. run `./script/bake-book-remote cooking 7.16` (using that version you found)


## Regression Testing

To check that there were no regressions in a book you will need to do the following:

1. bake the book with the old code
1. bake the book with the new code
1. compare the 2 baked HTML files to see if there were any differences

Here are the steps to run it:

```sh
# Prep work (run once)
./script/setup
./script/fetch-html statistics # Or any book in ./books.txt

# Check out the old version from git (ie `master` branch)
# Then run:
./script/diff-book-prepare statistics

# Check out the new code from git (ie `shiny-unincorns` branch)
# Then run:
./script/diff-book statistics

# Any differences would pop up at this point

# Optional: Create a diff and give it to a GUI
diff ./data/statistics-prepared.xhtml ./data/statistics/collection.baked.xhtml > foo.diff
```

**Note:** You can specify `--all` instead of `statistics` to diff all the books (after fetching them earlier)

### Finding differences in the styleguide

Instead of diffing the whole book, you can find differences in the styleguide for a recipe (faster and easier to find errors because the HTML files are much smaller than an entire book).

To do this, just replace every occurrence of `./script/diff-book ${BOOK_NAME}` (and `./script/diff-book-prepare`) with `diff-guide ${RECIPE_NAME}` in the instructions above.


## JavaScript Package

This package provides a few methods for use by other packages:

- `getBookStyles(): Map<string, string>`: returns a `Map` of the CSS contents for each book style

## Experimental

To update the Documentation in the gh-pages branch:

1. `git checkout master`
1. `./script/build-and-update-gh-pages`

**Note:** This will push changes if successful


[codecov-image]: https://img.shields.io/codecov/c/github/connexions/cnx-recipes.svg
[codecov-url]: https://codecov.io/gh/Connexions/cnx-recipes
