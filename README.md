# tv-shows

This template should help get you started developing with Vue 3 in Vite.

## Stack:

-   🚀 The webapp uses Vite + Vue 3 + Typescript
-   🛠️ App is online on: [https://javieralbadan.github.io/tv-shows/](https://javieralbadan.github.io/tv-shows/)
-   🛠️ Git hooks are implemented to ensure the product quality, including lint-staged and some node scripts
-   🔦 Format is being applied with prettier, eslint and stylelint
-   🧪 Unit testing were done with vitest
-   ⛑️ Automation tests were done with playwright. See below for more details
-   🎨 Styles are applied with SCSS having as a reference RSCSS methodology. See below for more details
-   🎨 Responsiveness was implemented following MobileFirst methodology
-   🌐 A module for internationalization (i18n) was implemented

## Architectural / Implementation details:

About the implementation it would be nice to summarize some patterns and good practices that were implemented:

-   Separation of responsibilities: services with mapper, components, views, locales for i18n.
-   The structure with the Composition API could allow to scale up easily without fall into issues like props drilling or event bowling
-   The mapper allow us to have a standar contract between backend and client sides.
-   Error handling using try/catch
-   Early returns whenever is possible
-   Don't falling into overabstractions at starting point
-   Don't falling into micro optimizations
-   Basic responsiveness was guaranteed
-   Loading and empty states components were created to support the UX. Also 404 error page was included

Since it was not a complex logic, other technical decisions were:

-   Don't create a back for front end layer, to process logic before and after fetch data
-   Env var were created inside the folder config, as json file, looking to have later other envs configuration

## Possible improvements / Next steps:

-   Handle sorter / filter features in the home page
-   Toggle feature to change layout of cards
-   Toggle feature to alternate between dark and light mode

## RSCSS (Reasonable System for CSS) as a CSS Design System

As an alternative to avoid BEM, this project is implementing RSCSS, that in the basics has the follow rules:

1. Components: Components will be named with <b>at least two words</b>, with a dash between each word.

```
.search-form
.article-card
```

2. Elements: Components contains Elements. These should have <b>classes that are only one word</b>. Use classnames whenever possible, avoid tag selector

```
.field
.action
.firstname
.lastname
```

3. Variants: Classnames for variants will be <b>prefixed by a dash (-)</b>

```
.like-button {
  &.-wide { /* ... */ }
  &.-short { /* ... */ }
  &.-disabled { /* ... */ }
}
```

## Testing

Due to the abscence of smaller requirements, was not possible to procede with a TDD approach. However, Unit Testing was made with Vitest and End to end with Playwright.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
