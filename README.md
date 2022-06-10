# React Library Boilerplate

This react library boilerplate uses the following:

- [Typescript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [StyleLint](https://stylelint.io/)
- [Storybook](https://storybook.js.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Semantic Release](https://semantic-release.gitbook.io/)
- [Github Actions](https://github.com/features/actions)
- [Hygen](https://www.hygen.io/)

## Setup

1. Run `yarn` to add all the project's dependencies.
2. Run `yarn storybook`
3. Create a new branch form `main` and after completing the work make sure to run `yarn build` to make sure that there are no errors are thrown
4. Create the PR to be merged into `main`, after merging it, the package will be published automatically.

## Basic Folder Structure

```
├── .storybook
├── src
│   ├── components
|   |   ├── Button
|   |   |   ├── __tests__
|   |   |   |   ├── Button.test.tsx
|   |   |   ├── Button.stories.tsx
|   |   |   ├── Button.tsx
|   |   |   ├── index.ts
|   |   ├── index.ts
|   ├── index.ts
├── LICENSE
├── package.json
├── README.md
```

## Add a new component

1. Add new folder (i.e. Button) inside components directory with those files inside `index.ts, Button.tsx, Button stories.tsx`.
2. Inside `components/index.ts` add this line `export * from ./Button`

## Github Actions

- This project contains a github action workflow called `release.yaml`. This workflow runs a job that will test, lint, and build the code. If the code passes and you are on the `main` branch it will also run the publish job to send the new version off to npm.

- If you have changed any of stories files `src/components/**/*.stories.tsx`, `chromatic.yml` will run to deploy the storybook to [chromatic](https://www.chromatic.com/)

## Publishing your Library

- Run `yarn build` before merging your PR into main to make sure there are no errors thrown
- Once your PR is merged into `main` branch, you can check the new version in [workmotion design system github package ](https://github.com/workmotion/design-system/packages/1463755)

## Troubleshooting

- Default export of the module has or is using private name 'CheckboxProps'.ts

  **SoL** : prefix 'CheckboxProps' with export keyword

## Tests

```

$ yarn test

```

With coverage

```

$ yarn test:coverage

```

Watch

```

$ yarn test:watch

```

## Prettier

```

$ yarn format

```

Validate project formatting

```

$ yarn format:check

```

## Lint

```

$ yarn lint

```

## Storybook

```

$ yarn storybook

```

## Building your library

```

$ yarn build

```

The build output will go into the `dist` directory

## Committing Code Changes

The commit messages are critical for allowing the [Semantic Releases](https://semantic-release.gitbook.io/) to work correctly. We use the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) commit message format.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

#### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (this correlates with `PATCH` in semantic versioning)
- **ci**: Changes to our CI configuration files and scripts (no version changes)
- **docs**: Documentation only changes (no version changes)
- **feat**: A new feature (this correlates with `MINOR` in semantic versioning).
- **fix**: A bug fix (this correlates with `PATCH` in semantic versioning).
- **perf**: A code change that improves performance (this correlates with `PATCH` in semantic versioning).
- **refactor**: A code change that neither fixes a bug nor adds a feature (no version changes)
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) (no version changes)
- **test**: Adding missing tests or correcting existing tests (no version changes)
- **revert**: Reverts a previous commit (this correlates with `PATCH` in semantic versioning).

#### Description

The Description contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Body (optional)

Use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer (optional)

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

### Breaking Changes

A commit that has the text `BREAKING CHANGE:` at the beginning of its optional body or footer section introduces a breaking API change (correlating with `MAJOR` in semantic versioning). A BREAKING CHANGE can be part of commits of any type.

should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Examples

[see examples](https://www.conventionalcommits.org/en/v1.0.0/#examples)

---

## Changelog

The changelog.md is automatically generated from the following types of commits:

- `feat`
- `fix`
- `perf`
- `revert`

In addition to these types, any `breaking change` will also be added to the changelog.
