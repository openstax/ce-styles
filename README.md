# Install

1. run `./scripts/setup` to install the dependencies. You only have to run this once!

**Note:** To update the dependencies, run `./scripts/update`

# Cook a New Book

1. Find the UUID of the book you want
  - point your browser to `cte-cnx-dev.cnx.org` and find a book you want.
  - click "More Information" and copy the **ID**
1. run `./scripts/fetch-book statistics ${ID}`
  - **Example:** `./scripts/fetch-book statistics 69619d2b-68f0-44b0-b074-a9b2bf90b2c6@11.330`
  - **Note:** This will require you to log in via ssh. Also, make sure the **ID** contains the version.
1. run `./scripts/bake-book statistics`

There are 2 major parts to cooking a book (_listed above_). You will first need to get the single-file HTML from the server (`fetch-book`) and then convert the single-file HTML locally into the "baked" book via `bake-book`. Once you have done the first part, you can run `./scripts/bake-book statistics` to your :heart:'s content!

# Documentation

1. run `./scripts/generate-docs`
2. open the generated file in your browser
