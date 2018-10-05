---
path: "/blog/2018/why-you-need-prettier"
date: "2018-10-05"
title: "Prettier - Opinionated Code Formatter"
---

## What is prettier?

Prettier is an opinionated code formatter. That's all.

### ✅ Language support

<ol class="disc">
  <li><b>JavaScript, including ES2017</b></li>
  <li><b>JSX</b></li>
  <li><b>Flow</b></li>
  <li><b>TypeScript</b></li>
  <li><b>CSS, Less, and SCSS</b></li>
  <li><b>JSON</b></li>
  <li><b>GraphQL</b></li>
  <li><b>Markdown, including GFM</b></li>
  <li><b>YAML</b></li>
</ol>

### 👉🏻 Life without Prettier

<b>Dev (A)</b>: Hey, can you review my code?, Here is the [PR link]().

<b>Dev (B)</b>: Sure. Hmm 🤔, this doesn't seem right. Hey, can you do following changes in [your PR]()?

  - <b>Add spaces in between brackets.</b>
  - <b>Code is lenghty</b>. Let's keep the <b>line width as 140?</b>
  - <b>Also follow 2 tab/space indent</b>.

<b>Dev (A):</b> Sounds right. I will make the changes. Regarding <b>#3</b> in above, <b>let's keep 2 space</b>. Not tabs?

<b>Dev (B):</b> Sure, why not. Dev's are still fighting for [tab vs space](https://softwareengineering.stackexchange.com/questions/57/tabs-versus-spaces-what-is-the-proper-indentation-character-for-everything-in-e). Let's stick to space indent (<b>Inner voice, [Shannaro](https://www.reddit.com/r/Naruto/comments/2lmkye/what_does_that_shannnaro_mean_when_it_went_to/)</b> 👿).

<b>Dev (B)</b>: Yoo, got some time to review [my PR]().

<b>Dev (A)</b>: After reviewing, I thought we decided to keep <b>2 space as indent</b>.

<b>Dev (B)</b>: Oh yeah, I forgot 😱.

<b>Dev (A)</b>: Commenting in Dev (B) PR...

  1. Add bracket in <b>Arrow Funtions Parentheses</b>.
  2. Can we not keep <b>Trailing Commas</b>?
  3. <b>Quotes</b> should be <b>single not double</b>.

<b>Dev (B)</b>: Changes done. PR got merged. uff 🤯.

<b>Dev (A)</b>: Wish there is some <b>magical wand</b> which will <b>format the code</b> for us instead of us <b>wasting time while writing</b> 😭.

### 👉🏻 Life with Prettier

<b>Dev (A)</b>: Adding prettier to the project.

  <b>Step 1:</b> Add prettier to <b>package.json</b> file.

  ```javascript
  yarn add prettier --dev --exact
  ```

  <b>Step 2:</b> Add the <b>.prettierrc.js</b> config.

  ```js
  module.exports = {
    trailingComma: "never",
    tabWidth: 2,
    singleQuote: true,
    printWidth: 140
  };
  ```

  <b>Step 3:</b> Add prettier to <b>pre-commit git hook</b>.

  ```javascript
  yarn add husky lint-staged --dev
  ```

  <b>Step 4:</b> Add the precommit hook in package.json file

  ```json
  "scripts": {
    "pretty": "prettier --write \"src/**/*.js\"",
    "precommit": "lint-staged && npm test"
    },
    "lint-staged": {
      "*.js": [
        "npm run pretty",
        "git add"
      ]
    }
  ```

<b>Dev (B)</b>: Committing the code.

  ```bash
  ga .
  gc -m "Added header style fixes"
  ```

<b>Dev (B)</b>: Ohhh, wow this is awesome. <b>No more manual formatting</b> and <b>No need to discuss style in code review anymore</b> 😋.

<b>Dev (A)</b>: Yep, it took me just 10 mins. Also prettier is suppourted in <b>most of the IDE's</b>.

#### 🎁 Popular open sources using prettier

- <b>Facebook</b>
- <b>Webpack</b>
- <b>React</b>
- <b>Babel</b>
- <b>Yarn</b>

And [many more](https://prettier.io/en/users/).

#### 📝 References:

- [A Prettier JavaScript Formatter](https://jlongster.com/A-Prettier-Formatter).
- [Add prettier to git pre-commit hook](https://medium.com/@bartwijnants/using-prettier-and-husky-to-make-your-commits-save-2960f55cd351).

I personally used and using the prettier in most of my projects/pet projects.

<b>Thanks for reading my post. If you like it. Share it 😬.</b>
