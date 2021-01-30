# Contributing

Do you think there's something missing in this lib? (There's definitely a lot of that 😬)

Have you spotted a bug 🐞 and don't want to wait around for someone to pick up the issue you created for it?

Are you feeling really good about an idea 💡 you had for the future of this repository?

Did you find a cheeky typo in the docs? 📰

Then clone/fork the repo, do the changes you see fit and submit them in a Pull Request! Our dedicated team of 1 lonely dev will try to address it and give you feedback as soon as possible!

## General Guidelines

The repo enforces pretty much everything by itself with the tools it has embedded into it.
Some other basic things are:

-   This is a [Typescript](https://www.typescriptlang.org/) repository.
-   This lib exists as a tool to easily build and execute requests to the [Instagram Graph API](https://developers.facebook.com/docs/instagram-api/) and parse the responses into friendly data structures with some helper methods to quickly extract information from them. Probably best to stay within these molds.
-   [Camel case 🐫](https://techterms.com/definition/camelcase) for fields and methods, [Pascal case](https://techterms.com/definition/pascalcase) for classes and files, please (it's not a request 🔫).
-   The naming style and organization of this repository follow a very OOP mindset. The dev comes from Java and apologizes in advance, but kindly follow the existing patterns/structure and you should be fine 😄.

## Code Style

### Formatting

This repo is formatted using [Prettier](https://prettier.io/) to minimize differences between files and bloated commit diffs from style changes.
A `.prettier` file is provided in the repo and you should integrate Prettier in your editor.
In case your editor does not support Prettier, execute `npm run format` when you want to format your code.

### Linting

This repo is linted using [ESLint](https://eslint.org/) to standardize code style and enforce best practices.
A `.eslintrc.json` file is provided in the repo and you should integrate Eslint in your editor.
In case your editor does not support ESLint, execute `npm run lint` when you want to check for problems in your code.

---

Both the format checker and the linter run on all Pull Request workflows, along with a coverage check of the tests and a transpilling of the Typescript. To minimize feedback time and the number of failing pipelines, these same checks run as a pre-push hook using [Husky 🐶](https://www.npmjs.com/package/husky).

## Test Coverage

This repo uses [Jest](https://jestjs.io/) for testing. You can run all tests with coverage by executing `npm run test`. The idea is that Test Coverage remains at 100%.

Test coverage checks have been preemptively reduced to 95% to take into account some unforeseen functionality that might be hard to test.
The lib itself will likely never have any complex logic that warrants reducing the test coverage, so expect full coverage to be requested before Pull Request approvals.

Creating new tests should be pretty self-explanatory: just follow the already existing structure on the test repo.

## Documentation

This repo uses [Typedoc](https://typedoc.org/) to generate the documentation.
You need not concern yourself with this. On the release workflow the documentation will be generated based on what's on the `src/main` directory.
The only thing that you need to worry about is documenting your code. You can follow the already documented files to easily understand the format.

If you wish to check the documentation yourself, execute `npm run docs` and open the output folder on your browser.
You can commit these docs but it will only pollute the Pull Request, so it's best not to since it will be generated anyway before the release.

If you add a new class/interface, please add the `@since` tag. Don't hardcode any version: instead simply write it as `` @since `next.release` `` and it will be replaced on the release pipeline.
