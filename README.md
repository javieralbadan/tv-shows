# tv-shows

This template should help get you started developing with Vue 3 in Vite.

## Using RSCSS as a CSS Design System

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
