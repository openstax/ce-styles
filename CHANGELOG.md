# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

* Create new shape `ReferencesWithAsideShape` in `cardboard`
* Change webview link & link-hover colors

## [v1.138.0] - 2023-10-20

* Style `pre.inline-code` with `display: inline` in common styles and webview
* Style `left-border in BasicTableShape` in `nursing-external`
* Style `pl-marketing`
* Add style for `boxed-feature` note for `nursing-external`
* Create files for `columns` to set proportional width

## [v1.137.0] - 2023-10-06

* Update `node` version
* Style `inline media` in `webview`
* Fix translation in folio `cosmos`
* Style `code` with `data-display="block"`
* Style `review questions` in `nursing-external`

## [v1.136.0] - 2023-09-22

* Style `horizontal rule for vertically-tight tables` in `nursing-external`
* Style `multipart questions` in `bca`
* Style `safetey-alert title color` in `nursing-internal`
* Style `shaded table` on `webview`
* Style webview exercises with approach from PDF
* add liquidprompt to docker

## [v1.135.0] - 2023-09-08

* Change `Review Questions` to one column in `anatomy`
* Changed team name in README to CE Design Systems
* Update README to remove Zenhub board and add Github project
* Fix page break for `lab` note from `statistics`
* Support `Blue Text` in `Nutrition` in `webview`
* Style `H2LinkTitle` in `EobTitlesShape` from `carnival`

## [v1.134.0] - 2023-08-24

* Bold os-numbers in webview
* Fix `PagesWithBands` in `nutrition`
* Allow breaking page within exercises
* Style `mechanism-figure` caption on `webview`
* Fix `smallcaps in captions` in `webview`
* Fix alignment in `multipart-questions` from `webview`
* Temporarily revert the local fonts because the web is not able to load them

## [v1.133.0] - 2023-08-10

* Style Answer Key with prefixes on webview
* Update `carnival` captions to `line-height: 1.2`
* Style images from exercises on webview
* Fix regression for exercises on webview
* Regenerate CSS files so the fonts work, especially `ap-physics`
* Style smallcaps elements on webview

## [v1.132.0] - 2023-07-27

* Download fonts locally by adding to [./script/download-fonts](./script/download-fonts) and then running it
* Move `cardboard` splash images left by .1in
* Add column header tables in `nursing-internal`
* Remove duplicate line items in `nursing-internal`
* Style headers in `preview-carbonylchemistry` section from `organic-chemistry`
* Remove two-column styling from `nursing-internal`
* Change `unfolding casestudy to boxed note` in `nursing-internal`
* Feature Design Changes to `iconned notes` in `nursing-internal`
* Change `nursing-internal` Learning Objectives from numbers to bullets

## [v1.131.0] - 2023-07-13

* Style EOC Composite Chapter in `nursing-internal`
* Style `preview-carbonylchemistry` section in `organic-chemistry`
* Restyle `smallcaps`
* Style `smallcaps` elements
* Remove components from devcontainer
* Fix regression of alignment of bolded lettering and images
* Fix Injected Exercises bolded lettering to align with the top of the paragraph
* Remove margin in `AppendixGlossary` from `carnival`
* Fix page breaking on injected exercises
* Undo injected exercise removing page breaking in between, limit it to just
* Fix table overflow

## [v1.130.0] - 2023-06-15

* Fix font in tables with caption on top
* Style additional EOC sections in `hs-college-success`
* Fix formatting discrepancies vs Rex
* Add more Colored Text to `webview`
* Switch biology to `ChapterOutlineShape`
* Delete `ChapterOutlineMarginShape` and depreciated variables associated with it
* Style `ExercisesMultipartQuestion` and `ExercisesQuestionWithProblemPrefix` on `webview`
* Reduce paddings in notes from `carnival`
* Fix typos in README.md

## [v1.129.0] - 2023-06-02

* Fix caption in `mechanism-figures`
* Decrease paddings in unstyled tables from `carnival`
* Hide folio paragraphs on `webview`
* Fix index alignment in `organic-chemistry`
* Create new notes shape for `nursing-external`
* Fix tables from notes in `nursing-external`
* Set EOC sections to two columns in `nursing-external`
* Fix bug with margins in `TOC` from `carnival`

## [v1.128.0] - 2023-05-17

* Move table caption to the bottom in `nursing-external`
* Style `Student Story Note` in `hs-college-success`
* Fix table border in `BasicTableWithCaptionOnTopShape`
* Decrease margins for eob links in `TOC` from `carnival`
* Style `The Real Deal note` in `hs-college-success`
* Create new approach for styling `folio`
* Style `initial styless` for  `hs-college-success`
* Rebuild `all styles`  for `table update` in `nursing-internal`
* Fix tables in `nursing-internal`
* Display `Answer Key` solutions inline in `organic-chemistry`

## [v1.127.0] - 2023-05-08

* Style `centered-text` paragraphs in `nursing-internal`
* Add more selectors to set text align in `organic-chemistry`
* Fix text align in `organic-chemistry`

## [v1.126.0] - 2023-04-21

* Restyle `no-cellborder` caption, bugfix for `vertically-tight` tables
* Style `vertically-tight` Tables for `nursing-external`
* Fix `no-cellborder` Tables up
* Fix exercises alignment in `organic-chemistry`
* Restyle `Learning Objectives` in `bca`
* Style `regular iconned notes` in `nursing-external`
* Style `answer key exercises` in `nursing-external`
* Fix base font for `nursing-internal`
* Style `indented-text` in `nursing-internal`
* Style `Answer Key` on `webview`
* Fix styles for `organic-chemistry` TOC
* Style `no-cellborder` tables in `carnival` for `nursing-external`
* Style injected exercises on `webview`
* Decrease table caption line height in `carnival`
* Style `key terms header color` in `nursing-external`
* Style `casestudy notes exercises` in `nursing-external`
* Style `blue text` in `nursing-external`
* Update icons for carnival-lifestageculture.svg and carnival-rnstories.svg
* Fix alignment in carnival `UnnumberedUnstyledTable` shape

## [v1.125.0] - 2023-04-07

* Style eob modules from `nursing-internal`
* Style eoc modules from `nursing-internal`
* Style notes from `nursing-internal`
* Create basic styles for `nursing-internal`
* fix icon size for `clinical-tip` note in `nursing-external`
* Hide unit in `nursing`

## [v1.124.0] - 2023-03-24

* Enable scrolling for wide equations on `webview`
* Enable scrolling for wide tables on `webview`
* Add top margin to `tables` in `cosmos`
* Style `client teaching boxed note` in `nursing`
* Revert `summary` to one column in `organic-chemistry`
* Revert changes for `exercise-block` class
* Nursing Style Review Updates
* Nursing Styles Updates
* Added fearure styles for Nursing Series
* Add additional styling to  `carnival` `ModuleWithIndentation` Styling
* Style `ProblemPrefix` from exercises in `organic-chemistry`
* Change `Checkpoint` into `Mac Tip` in `bca`
* Change `WrittenExercises` into `WrittenQuestions` in `bca`

## [v1.123.0] - 2023-03-13

* Style `full-width` tables in `college-success`
* Bake exercise context in `cardboard`
* Increase titles font size in `cardboard`
* Display `organic-chemistry` Answer Key in two columns
* Fix unit folio from `marketing`
* Bake `CenteredText` in `organic-chemistry`
* Add styles for Nursing Series
* Fix scaled down non-figures in `webview`

## [v1.122.0] - 2023-02-24

* Add Link styling to `organic-chemistry`
* Change cells border color in tables from `cardboard`
* Style exercise distractors `organic chemistry`
* Style lists from Introduction in `cardboard`
* Style third level lists from pages in `cardboard`
* Decrease font size of `h5` from `webview`
* Style Appendix Glossary in `organic-chemistry`
* Remove empty space from splash image `corn`

## [v1.121.0] - 2023-02-10

* Hide screenreader spans in more books
* Change superscipt and subscript size to 83%
* Create `BasicTableWithCaptionOnTop` shape
* Style new exercises in `organic-chemistry`
* Create `EocCompositePageTitlesWithIcon` shape
* Add bold to `problem-letter`
* Added works cited and further reading styles to `webview`
* Update dockerfile

## [v1.120.0] - 2023-01-27

* Added `img.scaled-down` styling to `FigureImage` shapes & components in `webview`
* Add Yellow and Purple text to `organic-chemistry`
* Fix folio in `corn`
* Style `equations` in `contemporary-math`
* Clean up `common` files
* Fix newline after question number for inline exercise
* Create files for `customPara`
* Style `equations` in `organic-chemistry`
* Standardize `objectives` and `outline` shapes
* Move lists from `objectiveoutline-components` to lists file

## [v1.119.0] - 2023-01-13

* Style `dedication-page` from `organic-chemistry`
* Style `example` in `python`
* Style `NoClass` note in `python`
* Standardize `ObjectivesNoteShape`
* Move titles from `objectiveoutline-components` to titles file
* Remove flex from Stepwise list items
* Add inline media style

## [v1.118.0] - 2022-12-16

* Group lists shapes
* Refactor lists with classes
* Revert changes for additional `div` in equations
* Add missing components to `NotesListsShape`
* Add missing components to `ExercisesListsShape`
* Add missing components to `CompositePageListsShape`
* Add missing components to `PageListsShape`

# [v1.117.0] - 2022-12-2

* Fix `cosmos` `ChapterObjectives` list font
* Split lists shapes in `corn`
* Fix column breaking in `AppendixGlossary` from `cosmos`
* Move `UnitOpener` files to `common` directory
* Create shapes for titles from `UnitOpener`
* Move `SplashFigure` to `figureimage` files

## [v1.116.0] - 2022-11-18

* Style `critical-thinking` list in `PDF` and on `webview`
* Move `ChapterOutlineShape` to `objectives` files
* Create shapes for titles from `ChapterIntro`
* Standardize `AnswerKey` shapes
* Add bullets to lists from `Preface` on `webview`

## [v1.115.0] - 2022-11-09

* Add Text-Align to `TableFromAnswerKey` in `corn`
* Create separate shape for `TableFromAnswerKey` in `corn`
* Create `IconIncreasedNoteShape` in `carnival`

## [v1.114.0] - 2022-10-21

* Align media from para
* Style `Colored Text` on webview
* Wrap pre tags
* Remove underline from links in references on `webview`
* Style `Colored Text` in `python`
* Add webview styles for cite
* Add missing styles for EOC titles and lists in `corn`
* Style `Index` in `python`
* Style `AnswerKey` in `python`
* Style notes and exercises in `python`
* Style tables in `python`
* Style `Learning Objectives` in `python`
* Style Introduction in `python`
* Style headers in `python`
* Change cells border color in tables from `corn`

## [v1.113.0] - 2022-10-07

* Create styles for `python` book
* Remove spaces between tables in Key Equations subsections in `corn`
* Style `Index` on `webview`
* Fix long equations on `webview`
* Fix selector for scaled-down figures in `FigureImage` for webview
* Style `NumberedEquations` in `statistics`
* Style `H4` in Chapter Intro from `corn`

## [v1.112.1] - 2022-09-23

* add `dummy` style to match `dummy` recipe

## [v1.112.0] - 2022-09-23

* Style additional `div` in eqautions
* Change way of displaying `mechanism-figures` in `organic-chemistry`
* Update `ColoredText` selectors in Accounting and Marketing


## [v1.111.0] - 2022-09-09

* Change `Learning Objectives` to a bulleted list in only `world-history`
* Change `Chapter Outline` font size & boldness in only `organic-chemistry`
* Create `Mechanism Figure` shape to cover figures with class `mechanism-figure` in `organic-chemistry`
* Style `MultipartQuestionExercises` to be displayed in line
* Style `Eoc Composite Page Titles` in `world-history`
* Style `Key Terms` in `organic-chemistry`
* Style target labels

## [v1.110.0] - 2022-08-25

* Style lists from stimulus in `corn`
* Replace `Something Extra` note with `Chemistry Matters` in `organic-chemistry`
* Refactor `lists` in `carnival`
* Hide screenreader & non-screen switch elements version in Webview
* Add H3 to `ChapterIntroWithBlockIntroHeaderShape` in `cosmos`
* Change table color in `organic-chemistry`
* Remove `font-weight: normal` from `ColoredText`
* Change titles colors in `organic-chemistry`

## [v1.109.0] - 2022-08-11

* Add more lists selectors to `ExampleShape` in Carnival
* Add more lists selectors to `CompositePageListsShape` in Carnival
* Style `Learning Objectives` note in `pl-economics`
* Fix settings for `ChapterObjectives` from `pl-economics`
* Style exercises and Answer Key in `organic-chemistry`
* Justify root text in `organic-chemistry`
