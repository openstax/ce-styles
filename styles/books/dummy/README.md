These are copy/pasted from [rex-web/generic-styles](https://github.com/openstax/rex-web/tree/5f5fb6901efdda3de9bb0e95af4b8817ece5f550/generic-styles) with a few additions:

- Added labels for Note, Example, Exercise, Problem, Solution
- Added custom labels on those elements when the content has a `data-label` attribute set on it



# How to build the CSS file

Just run the following (node needs to be installed):

```sh
npx less@4.1.3 ./index.less ../../output/dummy-pdf.css           # --source-map --source-map-inline
```