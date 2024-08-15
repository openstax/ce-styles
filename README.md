# About
The ce-styles repo contains the styles framework. If you're looking to manipulate the content during the baking stage, the recipes framework is contained in the [cookbook repo](https://github.com/openstax/cookbook).

[Baked PDF framework guide](./styles/styling-bakedpdf.md)

[Styling framework tutorial](./styles/README.md)

## Installation

The ce-styles repo uses a docker container to simplify installation requirements. It's recommended that you either run the container in vs code, or prepend the `./script/run` script before the desired command to run that command in a docker container.

[To install docker, follow the instructions here.](https://docs.docker.com/get-docker/)

[To install enki, clone the repo from github and follow the instructions here.](https://github.com/openstax/enki)

## Compile styles

If you're in the repo's docker container (either using VScode or something else), you can compile styles with:

```sh
yarn run compile # compiles all styles
yarn run compile <style1> <style2> <...>
yarn run compile <theme> # carnival | cardboard | corn | cosmos
```

Outside the container, just prepend with ./script/run:

`./script/run yarn run compile`

This creates a temporary environment to run commands in and may be slightly slower.

## Create a baked pdf for a new book

Currently, [the enki platform](https://github.com/openstax/enki) is the recommended way to build a pdf of any given book.

To take a book completely from git repo to pdf, you'll need to run a variation of the command:

`./enki --data-dir ./data/${book_name} --command all-git-pdf --repo ${book_github_repo} --book-slug ${book_slug} --ref main`

For additional enki usage, consult [enki's readme](https://github.com/openstax/enki).

# Important Links
 - [CE  Team Confluence Documentation](https://openstax.atlassian.net/wiki/spaces/CE/overview)
 - [How to Release CE Styles](https://openstax.atlassian.net/l/c/TjrhH68R)
 - [CE Design Systems Project Board](https://github.com/orgs/openstax/projects/40/)
 - [Cookbook Repo](https://github.com/openstax/cookbook)

