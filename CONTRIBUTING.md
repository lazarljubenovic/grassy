# Contributing to Grassy

First of all, thanks for helping!

Grassy aims not just to be used as a tool, but as a learning resource and an opportunity for everyone to contribute. To keep it that way, we should stick to the following guidelines.

Remember that **no contribution is too small**. A missing whitespace in code? A typo in docs? An additional example you think would help others? Go ahead!

## Questions, bug reports, feature requests

All of the above are always welcome in the [issues](https://github.com/lazarljubenovic/grassy/issues) section.

## Submitting a PR

Generally, all non-trivial changes/fixes should already have an open issue before you submit a PR. New features absolutely must require an open issue.

This way we can discuss the issue properly before jumping in the code. This is especially important for new features where we need to be sure that we're on the same page. Everyone is welcome to join the discussion!

When there is a PR, we should already know exactly what are our goals. In the PR we discuss the concrete implementation, in the issues we discuss the concepts.

## Commit messages

A commit message should be in the following format,

```
type: message
```

where `type` is one of

- `docs`, if the commit changes documentation;
- `feat`, if the commit introduces a new feature;
- `fix`, if the commit fixes an existing bug;
- `test`, if the commit adds new tests;
- `refactor`, if the commit doesn't change functionality in any way but makes code more readable;
- `chore`, if the commit doesn't change source code (build system, etc);

and `message` is a description of the changes your commit introduces (without the capital letter).

Commit messages are used to generate changelogs, so it's important that they are more or less uniform. However, GitHub offers a button to change the commit message before merging, so don't sweat it.

## Coding guidelines

This is kind of a tricky thing. Most existing Sass guidelines are oriented towards writing styles, but Grassy is more code than styles. In general, take a look around and try to follow the style. Some general guidelines to keep in mind:

 - Always comment your code! [[example](https://github.com/lazarljubenovic/grassy/blob/master/src/_fixed-grid.scss#L121-L123)]
 - All functions and mixins have to be documented. [[example](https://github.com/lazarljubenovic/grassy/blob/master/src/_parser.scss#L3-L42)]
 - All non-trivial functions and mixins have to be tested. [[example](https://github.com/lazarljubenovic/grassy/blob/master/test/_grid.spec.scss#L8)]

We don't just document public API, but also thoroughly document all non-trivial internal API. We're using [SassDoc](http://sassdoc.com/) syntax for documenting code.

## Scripts

```
yarn watch        # watch files for changes and run sass
yarn test         # run tests (once)
yarn docs         # generate docs locally
yarn bundle       # create a bundle for using on codepen, etc
```
