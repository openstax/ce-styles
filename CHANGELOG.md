# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Add `UnitToc` to `corn`
- Use `UnitToc` in `algebra-1`
- Add `folio_new` to `corn`
- Use `folio_new` in `algebra-1`

## [v2.11.0] - 2025-05-20

- Add `borderless` table class to `webview`
- Add `unindented` list class (os-raise-noindent) to `webview`
- Remove set `width` from `EquationNumberContainer` on `webview`

## [v2.10.0] - 2025-02-25

- Add margin for first level lists inside tables in `corn`
- Add second level list styling to the div wrapper at the first section level in `corn`
- Style `ListTitles` in `additive-manufacturing`

## [v2.9.0] - 2025-02-10

- Style more third level lists in `cardboard`
- Fix typo in third level list name in `cardboard`
- Add `lists from stimulus` to `cardboard`
- Style `lists from stimulus` in `information-systems`
- Align `ProblemSolutionLetter` right in `carnival`
- Set `max-width` of `FigureFromExercises` to 95% in `carnival`

## [v2.8.0] - 2025-01-16

- Style `practice` containers (aka case questions) in `additive-manufacturing`
- Style `composite chapters` in `additive-manufacturing`
- Style `chapter intro titles` in `additive-manufacturing`
- Style `splash image` in `additive-manufacturing`
- Add multi-choice answer components to `cardboard`
- Add multi-choice answer components to `webview`
- Style multi-choice answers more like multi-part questions in `cardboard`
- Style multi-choice answers more like multi-part questions in `webview`

## [v2.7.0] - 2024-10-24

- Add third level list styling to the section wrapper at the third level in `cardboard`
- Make `FirstLevelOrderedList` margins adjustable in `cardboard`
- Make `FirstLevelUnorderedList` margins adjustable in `cardboard`
- Set `FirstLevelOrderedList` left to `h-spacing(5)` in `computer-science`

## [v2.6.0] - 2024-10-01

- Style `brown-code` in `data-science` and on `webview`

## [v2.5.0] - 2024-09-09

- Add columns to `nursing-internal` 
- Reenable local fonts for PDF/EPUB
- Style lists at third section level in `cardboard`
- `Data Science`: Table Vertical alignment
- Add `ProblemSolutionAnswerLetters` component for `answer-letters` to `cardboard`
- Style `answer-letters` in bold in `data-science`
- Style `answer-letters` in bold in `webview`

## [v2.4.0] - 2024-08-23

- Style `header row` in middle of table and refactor `table shapes` in `nursing-internal`
- Added `column-width` proportions to `nursing-internal`

## [v2.3.0] - 2024-08-12

- Fix text overflowing with adding `max-width` on figure captions on EPUB display output.
- Add `right-padding` to EPUB figure captions

## [v2.2.0] - 2024-07-26

- Refactor `equations` for `carnival`
- Add `unnumbered equations` to `nursing-internal`
- Refactor `module-with-indentation` for `cosmos`
- Style references in `lifespan-development`
- Unnumbered `Learning Objectives` in `computer-science`
- Style `answer-key` in `neuroscience`
- Add check for whether output compiled to CI
- Rewrite `build.dart` to `build.js` and remove dart
- Refactor and remove `EocCompositePageTitlesShape` in `cardboard`

## [v2.1.0] - 2024-07-16

- Change TOC to no units for `information-systems`
- Refactor `numbered learning objectives` in cardboard
- Refactor `page titles` in cardboard
- Fix selector conflict between learning objectives and page titles for `computer-science`
- Fix typo in `labs-assessments` selector for `computer-science`
- Remove extra `composite-page` styles from `computer-science`
- Refactor `composite-page` and `composite-chapter` titles
- Style icons for `composite-page` titles that are children of a `composite-chapter` for cs

## [v2.0.0] - 2024-06-28

- Fix `table` border in `carnival`
- Style `exercises` from `notes` in `nursing-internal`
- Refactor `exercises` in `carnival`
- Fix answer key number alignment in `webview`
- Refactor `answer key` in `webview`
- Style `eoc references` in `lifespan-development`
- Fix `tables` from `exercises` on `webview`
- Style `eoc solutions` on `webview`
- Fix alignment of `inline code` elements
- Refactor code colors in `cardboard` and `webview`
- Style `no bullet lists` on `webview`

## [v1.154.0] - 2024-06-17

- Add to carnival lists shape to style nested lists in `exercise questions`
- Change `caption` color in `cardboard`
- Style `LO references` on `webview`
- Add new colwidth proportional values to `nursing-internal`
- Add styles for problem title to cardboard `example` elements
- Add margins to `iframes` on `webview`

## [v1.153.0] - 2024-06-03

- Add colwidth proportional values in `nursing-internal`
- Change styles for `eob references` from `webview`
- Remove margins from nested lists in `carnival` and on `webview`
- Fix `equations` on `webview`
- Fix font for code colored text in `data-science`

## [v1.152.0] - 2024-05-17

- Fix styles for unnumbered exercises on `webview`
- Remove redundant `webview` exercise styling/styles that point to nowhere
- Add border to tables headers in `cardboard`
- Fix footnote styling on `webview`
- Add styles for table columns to `cardboard`
- Style `circled list` on `webview`
- Change styles for `python-feature` in `data-science`
- Change styles for python `code` in `data-science`

## [v1.151.0] - 2024-05-03

- Bake `multipart-question` in `data-science`
- Fix exercise number alignment in `data-science`
- Fix wrapping of `code` element
- Move `additive manufacturing` out of archived styles

## [v1.150.0] - 2024-04-19

- Style `table columns` in `nursing-internal`
- Increase header row padding in `nursing-internal` pdf and webview
- Style exercises in `unfolding-casestudy` note in `nursing-internal`
- Change `future-tech` note color in `information-systems`
- Change styles for `eoc` in `information-systems`
- Style `green-code` in `data-science` and on `webview`
- Style `vertically-tight` tables in `information-systems`
- Fix `number spacing in exercises` in `neuroscience`

## [v1.149.0] - 2024-04-05

- Fix `number spacing in exercises` in `biology` and `ap-biology`

## [v1.148.0] - 2024-03-22

- Style lists from `question-solution` in `carnival`
- Style more third level lists in `carnival`
- Standardize notes titles in `carnival` and `cosmos`
- Fix `number spacing in exercises` in `microbiology`
- Fix `alignment in exercises` in `nursing-internal`
- Change note title color in `ap-biology`
- Style exercise with problem title on `webview`

## [v1.147.0] - 2024-03-08

- Add icon to Python Code notes in `data-science`
- Increase margin for lists from `carnival`
- Change styles for references from `data-science`
- Remove `three column in answer key` in `calculus`
- Style `solution-title` from `example` in `cardboard`
- Style `full-width` tables in `data-science`
- Style `data-science` LOs to have bullets
- Style `answer-key` from `data-science`
- Style `eoc` sections from `data-science`
- Add `vertically-tight` tables to `cardboard`
- Remove top margin for lists from tables on `webview`

## [v1.146.0] - 2024-02-23

- Fix `hljs-ln` table border
- Style modules with indentation on `webview`
- Add figure styles for `python` pdf
- Style centered text in `lifespan-development`
- Set page breaks for `TOC`
- Change color of `it-depends` note from `lifespan-development`
- Remove margin for `pre` tags in webview multiple choice exercises
- Create files for `columns` to set proportional width on `webview`
- Style `vertically-tight` tables in `nursing-internal`
- Change margin for lists from tables in `carnival`
- Redo inline `pre` tags in titles for web a better way
- Add icons to `webview` for `writing-guide`
- Fix `line break` in `python webview`
- Change a way of styling terms on `webview`
- Remove styles for `what-heard` note from `lifespan-development`
- Remove margin from `lo` header in `lifespan-development`
- Change styles for `eoc` sections from `lifespan-development`

## [v1.145.0] - 2024-02-09

- Display `Preface` from `biology` and `ap-biology` in one column
- Fix `examples spacing` in `statistics webview`
- Fix `chapter intro` caption in `cardboard`
- Fix `learning objectives` in `astronomy`
- Fix long chapter titles in `cardboard`
- Style third level lists in `carnival`
- Style `suggested-reading` section from `nursing-external`

## [v1.144.0] - 2024-01-30

- Style `highlight.js line numbers` in `python webview and pdf`
- Change `pre > span` to `display: inline` from `inline-block` for common pdf styles
- Remove margin around `pre` elements in mc distractors (for `python`)
- Fix `splash image` in `corn`
- Enable `highlight.js styles` in `webview`
- Increase `carnival` `AnswerKeys` number spacing
- Fix problem with table border in `carnival`
- Style `eob` in `information-systems`

## [v1.143.0] - 2024-01-12

- Style `eoc` in `information-systems`
- Style `notes` in `information-systems`
- Style `lists` in `information-systems`
- Style `footnotes` and `centered text` in `information-systems`
- Style `tables` in `information-systems`
- Style `lo` in `information-systems`
- Style `chapter intro` and `figures` in `information-systems`
- Style `titles` in `information-systems`
- Style `TOC` in `information-systems`
- Create `ItalicTextShape` in `common` files
- Initialize `information-systems`
- Fix css issue with `img` inside `figure`

## [v1.142.0] - 2023-12-15

- Removed vestigal version.txt file
- Wrap up styles for `data-science`
- Style `eoc` in `data-science`
- Style `lists from stimulus` in `nursing-external`
- Style `code` in `data-science`
- Style `notes` in `data-science`
- Style `index` in `data-science`
- Style `tables` in `neuroscience`
- Style `appendix` and `index` in `neuroscience`
- Fix `./script/run`
- Style tables in `data-science`
- Style lo and lists in `data-science`
- Style headers, intro and figures in `data-science`
- Style `developmental-perspective` note in `neuroscience`
- Move `dart pub get` to `onCreateCommand` in devcontainer
- Restore `pubspec.lock` & change order of `dart pub get` in Dockerfile
- Fix problem with tables from `nursing-external`
- Create basic files and style `TOC` in `data-science`
- Style `chapter outline` in `neuroscience`
- Add `overflow: auto` to webview `figure`s

## [v1.141.0] - 2023-12-01

- Style `appendix references` in `lifespan-development`
- Style third level lists in `carnival`
- Fix GitPod support
- Style `answer key` in `lifespan-development`
- Style `notes` in `lifespan-development`
- Style `appendix glossary` in `lifespan-development`
- Style `index` in `lifespan-development`
- Style `eoc` sections in `lifespan-development`
- Style `tables` in `lifespan-development`
- Style `lo` in `lifespan-development`
- Style `chapter-outline` in `lifespan-development`
- Style figures in `lifespan-development`
- Style headers in `lifespan-development`
- Create basic files and style TOC in `lifespan-development`

## [v1.140.0] - 2023-11-17

- Fix EOC bands in `nursing-internal`
- Style `boxed-feature` note in `neuroscience`
- Change `suggested-reading` to one column in `nursing-external`
- Style EOC sections in `neuroscience`
- Apply `FullWidthTable` to `nursing-external`
- Style `in the lab` note in `neuroscience`
- Style `across species` note in `neuroscience`
- Style `lists` and `terms` in `neuroscience`
- Style headers in `neuroscience`
- Style `lo` in `neuroscience`
- Adds `meet-author` note in `neuroscience`
- Add component for four propotional columns in `columns-shapes`
- Style `splash image` in `neuroscience`

## [v1.139.1] - 2023-11-08

- Add `height: auto` to webview `img`s
- Increase width of exercises numbers in `webview` & right-align
- Add folio to Answer Key in `carnival`
- Align exercise context divider in `carnival`
- Style `table` and `figure` caption in `Neuroscience`

## [v1.139.0] - 2023-11-03

- Remove folio from introduction page in `cardboard`
- Style `TOC` in `neuroscience`
- Add `display: table` to equations in `webview`
- Initial styles setup for `neuroscience`
- Add support for developing in GitPod
- Add margin to index in `pl-marketing`
- Fix alignment of references number
- Apply `NumberedLearningObjectives` to `pl-marketing`
- Create new `TOC` shape for `pl-marketing`
- Create new shape `ReferencesWithAsideShape` in `cardboard`
- Change webview link & link-hover colors

## [v1.138.0] - 2023-10-20

- Style `pre.inline-code` with `display: inline` in common styles and webview
- Style `left-border in BasicTableShape` in `nursing-external`
- Style `pl-marketing`
- Add style for `boxed-feature` note for `nursing-external`
- Create files for `columns` to set proportional width

## [v1.137.0] - 2023-10-06

- Update `node` version
- Style `inline media` in `webview`
- Fix translation in folio `cosmos`
- Style `code` with `data-display="block"`
- Style `review questions` in `nursing-external`

## [v1.136.0] - 2023-09-22

- Style `horizontal rule for vertically-tight tables` in `nursing-external`
- Style `multipart questions` in `bca`
- Style `safetey-alert title color` in `nursing-internal`
- Style `shaded table` on `webview`
- Style webview exercises with approach from PDF
- add liquidprompt to docker

## [v1.135.0] - 2023-09-08

- Change `Review Questions` to one column in `anatomy`
- Changed team name in README to CE Design Systems
- Update README to remove Zenhub board and add Github project
- Fix page break for `lab` note from `statistics`
- Support `Blue Text` in `Nutrition` in `webview`
- Style `H2LinkTitle` in `EobTitlesShape` from `carnival`

## [v1.134.0] - 2023-08-24

- Bold os-numbers in webview
- Fix `PagesWithBands` in `nutrition`
- Allow breaking page within exercises
- Style `mechanism-figure` caption on `webview`
- Fix `smallcaps in captions` in `webview`
- Fix alignment in `multipart-questions` from `webview`
- Temporarily revert the local fonts because the web is not able to load them

## [v1.133.0] - 2023-08-10

- Style Answer Key with prefixes on webview
- Update `carnival` captions to `line-height: 1.2`
- Style images from exercises on webview
- Fix regression for exercises on webview
- Regenerate CSS files so the fonts work, especially `ap-physics`
- Style smallcaps elements on webview

## [v1.132.0] - 2023-07-27

- Download fonts locally by adding to [./script/download-fonts](./script/download-fonts) and then running it
- Move `cardboard` splash images left by .1in
- Add column header tables in `nursing-internal`
- Remove duplicate line items in `nursing-internal`
- Style headers in `preview-carbonylchemistry` section from `organic-chemistry`
- Remove two-column styling from `nursing-internal`
- Change `unfolding casestudy to boxed note` in `nursing-internal`
- Feature Design Changes to `iconned notes` in `nursing-internal`
- Change `nursing-internal` Learning Objectives from numbers to bullets

## [v1.131.0] - 2023-07-13

- Style EOC Composite Chapter in `nursing-internal`
- Style `preview-carbonylchemistry` section in `organic-chemistry`
- Restyle `smallcaps`
- Style `smallcaps` elements
- Remove components from devcontainer
- Fix regression of alignment of bolded lettering and images
- Fix Injected Exercises bolded lettering to align with the top of the paragraph
- Remove margin in `AppendixGlossary` from `carnival`
- Fix page breaking on injected exercises
- Undo injected exercise removing page breaking in between, limit it to just
- Fix table overflow

## [v1.130.0] - 2023-06-15

- Fix font in tables with caption on top
- Style additional EOC sections in `hs-college-success`
- Fix formatting discrepancies vs Rex
- Add more Colored Text to `webview`
- Switch biology to `ChapterOutlineShape`
- Delete `ChapterOutlineMarginShape` and depreciated variables associated with it
- Style `ExercisesMultipartQuestion` and `ExercisesQuestionWithProblemPrefix` on `webview`
- Reduce paddings in notes from `carnival`
- Fix typos in README.md

## [v1.129.0] - 2023-06-02

- Fix caption in `mechanism-figures`
- Decrease paddings in unstyled tables from `carnival`
- Hide folio paragraphs on `webview`
- Fix index alignment in `organic-chemistry`
- Create new notes shape for `nursing-external`
- Fix tables from notes in `nursing-external`
- Set EOC sections to two columns in `nursing-external`
- Fix bug with margins in `TOC` from `carnival`

## [v1.128.0] - 2023-05-17

- Move table caption to the bottom in `nursing-external`
- Style `Student Story Note` in `hs-college-success`
- Fix table border in `BasicTableWithCaptionOnTopShape`
- Decrease margins for eob links in `TOC` from `carnival`
- Style `The Real Deal note` in `hs-college-success`
- Create new approach for styling `folio`
- Style `initial styless` for `hs-college-success`
- Rebuild `all styles` for `table update` in `nursing-internal`
- Fix tables in `nursing-internal`
- Display `Answer Key` solutions inline in `organic-chemistry`

## [v1.127.0] - 2023-05-08

- Style `centered-text` paragraphs in `nursing-internal`
- Add more selectors to set text align in `organic-chemistry`
- Fix text align in `organic-chemistry`

## [v1.126.0] - 2023-04-21

- Restyle `no-cellborder` caption, bugfix for `vertically-tight` tables
- Style `vertically-tight` Tables for `nursing-external`
- Fix `no-cellborder` Tables up
- Fix exercises alignment in `organic-chemistry`
- Restyle `Learning Objectives` in `bca`
- Style `regular iconned notes` in `nursing-external`
- Style `answer key exercises` in `nursing-external`
- Fix base font for `nursing-internal`
- Style `indented-text` in `nursing-internal`
- Style `Answer Key` on `webview`
- Fix styles for `organic-chemistry` TOC
- Style `no-cellborder` tables in `carnival` for `nursing-external`
- Style injected exercises on `webview`
- Decrease table caption line height in `carnival`
- Style `key terms header color` in `nursing-external`
- Style `casestudy notes exercises` in `nursing-external`
- Style `blue text` in `nursing-external`
- Update icons for carnival-lifestageculture.svg and carnival-rnstories.svg
- Fix alignment in carnival `UnnumberedUnstyledTable` shape

## [v1.125.0] - 2023-04-07

- Style eob modules from `nursing-internal`
- Style eoc modules from `nursing-internal`
- Style notes from `nursing-internal`
- Create basic styles for `nursing-internal`
- fix icon size for `clinical-tip` note in `nursing-external`
- Hide unit in `nursing`

## [v1.124.0] - 2023-03-24

- Enable scrolling for wide equations on `webview`
- Enable scrolling for wide tables on `webview`
- Add top margin to `tables` in `cosmos`
- Style `client teaching boxed note` in `nursing`
- Revert `summary` to one column in `organic-chemistry`
- Revert changes for `exercise-block` class
- Nursing Style Review Updates
- Nursing Styles Updates
- Added fearure styles for Nursing Series
- Add additional styling to `carnival` `ModuleWithIndentation` Styling
- Style `ProblemPrefix` from exercises in `organic-chemistry`
- Change `Checkpoint` into `Mac Tip` in `bca`
- Change `WrittenExercises` into `WrittenQuestions` in `bca`

## [v1.123.0] - 2023-03-13

- Style `full-width` tables in `college-success`
- Bake exercise context in `cardboard`
- Increase titles font size in `cardboard`
- Display `organic-chemistry` Answer Key in two columns
- Fix unit folio from `marketing`
- Bake `CenteredText` in `organic-chemistry`
- Add styles for Nursing Series
- Fix scaled down non-figures in `webview`

## [v1.122.0] - 2023-02-24

- Add Link styling to `organic-chemistry`
- Change cells border color in tables from `cardboard`
- Style exercise distractors `organic chemistry`
- Style lists from Introduction in `cardboard`
- Style third level lists from pages in `cardboard`
- Decrease font size of `h5` from `webview`
- Style Appendix Glossary in `organic-chemistry`
- Remove empty space from splash image `corn`

## [v1.121.0] - 2023-02-10

- Hide screenreader spans in more books
- Change superscipt and subscript size to 83%
- Create `BasicTableWithCaptionOnTop` shape
- Style new exercises in `organic-chemistry`
- Create `EocCompositePageTitlesWithIcon` shape
- Add bold to `problem-letter`
- Added works cited and further reading styles to `webview`
- Update dockerfile

## [v1.120.0] - 2023-01-27

- Added `img.scaled-down` styling to `FigureImage` shapes & components in `webview`
- Add Yellow and Purple text to `organic-chemistry`
- Fix folio in `corn`
- Style `equations` in `contemporary-math`
- Clean up `common` files
- Fix newline after question number for inline exercise
- Create files for `customPara`
- Style `equations` in `organic-chemistry`
- Standardize `objectives` and `outline` shapes
- Move lists from `objectiveoutline-components` to lists file

## [v1.119.0] - 2023-01-13

- Style `dedication-page` from `organic-chemistry`
- Style `example` in `python`
- Style `NoClass` note in `python`
- Standardize `ObjectivesNoteShape`
- Move titles from `objectiveoutline-components` to titles file
- Remove flex from Stepwise list items
- Add inline media style

## [v1.118.0] - 2022-12-16

- Group lists shapes
- Refactor lists with classes
- Revert changes for additional `div` in equations
- Add missing components to `NotesListsShape`
- Add missing components to `ExercisesListsShape`
- Add missing components to `CompositePageListsShape`
- Add missing components to `PageListsShape`

# [v1.117.0] - 2022-12-2

- Fix `cosmos` `ChapterObjectives` list font
- Split lists shapes in `corn`
- Fix column breaking in `AppendixGlossary` from `cosmos`
- Move `UnitOpener` files to `common` directory
- Create shapes for titles from `UnitOpener`
- Move `SplashFigure` to `figureimage` files

## [v1.116.0] - 2022-11-18

- Style `critical-thinking` list in `PDF` and on `webview`
- Move `ChapterOutlineShape` to `objectives` files
- Create shapes for titles from `ChapterIntro`
- Standardize `AnswerKey` shapes
- Add bullets to lists from `Preface` on `webview`

## [v1.115.0] - 2022-11-09

- Add Text-Align to `TableFromAnswerKey` in `corn`
- Create separate shape for `TableFromAnswerKey` in `corn`
- Create `IconIncreasedNoteShape` in `carnival`

## [v1.114.0] - 2022-10-21

- Align media from para
- Style `Colored Text` on webview
- Wrap pre tags
- Remove underline from links in references on `webview`
- Style `Colored Text` in `python`
- Add webview styles for cite
- Add missing styles for EOC titles and lists in `corn`
- Style `Index` in `python`
- Style `AnswerKey` in `python`
- Style notes and exercises in `python`
- Style tables in `python`
- Style `Learning Objectives` in `python`
- Style Introduction in `python`
- Style headers in `python`
- Change cells border color in tables from `corn`

## [v1.113.0] - 2022-10-07

- Create styles for `python` book
- Remove spaces between tables in Key Equations subsections in `corn`
- Style `Index` on `webview`
- Fix long equations on `webview`
- Fix selector for scaled-down figures in `FigureImage` for webview
- Style `NumberedEquations` in `statistics`
- Style `H4` in Chapter Intro from `corn`

## [v1.112.1] - 2022-09-23

- add `dummy` style to match `dummy` recipe

## [v1.112.0] - 2022-09-23

- Style additional `div` in eqautions
- Change way of displaying `mechanism-figures` in `organic-chemistry`
- Update `ColoredText` selectors in Accounting and Marketing

## [v1.111.0] - 2022-09-09

- Change `Learning Objectives` to a bulleted list in only `world-history`
- Change `Chapter Outline` font size & boldness in only `organic-chemistry`
- Create `Mechanism Figure` shape to cover figures with class `mechanism-figure` in `organic-chemistry`
- Style `MultipartQuestionExercises` to be displayed in line
- Style `Eoc Composite Page Titles` in `world-history`
- Style `Key Terms` in `organic-chemistry`
- Style target labels

## [v1.110.0] - 2022-08-25

- Style lists from stimulus in `corn`
- Replace `Something Extra` note with `Chemistry Matters` in `organic-chemistry`
- Refactor `lists` in `carnival`
- Hide screenreader & non-screen switch elements version in Webview
- Add H3 to `ChapterIntroWithBlockIntroHeaderShape` in `cosmos`
- Change table color in `organic-chemistry`
- Remove `font-weight: normal` from `ColoredText`
- Change titles colors in `organic-chemistry`

## [v1.109.0] - 2022-08-11

- Add more lists selectors to `ExampleShape` in Carnival
- Add more lists selectors to `CompositePageListsShape` in Carnival
- Style `Learning Objectives` note in `pl-economics`
- Fix settings for `ChapterObjectives` from `pl-economics`
- Style exercises and Answer Key in `organic-chemistry`
- Justify root text in `organic-chemistry`
