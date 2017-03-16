# Grassy | [Docs](https://lazarljubenovic.github.io/grassy/) | [Playground](http://codepen.io/dbox/pen/aJLGxE)

> What you ASCII is what you get.

Build layout through ASCII art in Sass (and more).

## Installation and Usage

```
yarn add grassy -D
```

```scss
@import "node_modules/grassy/grassy";
```

## Quick overview

### ASCII art

HTML:
```html
<section>
  <article>Hello</article>
  <article>Grassy</article>
  <article>World!</article>
</section>
```

Sass:
```scss
section {
  @include grid((
    'x-x',
    'x x',
  ));
}
```

Result:

![A grid with two columns. The first column has one cell; the second column has two cells.](http://i.imgur.com/PUcHQDP.png)

### As complex as you like!

HTML _never_ requires any additional classes, wrappers, etc.

```scss
@include grid(
  'x-x-x x   x'
  'x   x-x-x-x'
  '    x-x   x'
  '  x   x-x  '
);
```

![](http://i.imgur.com/a34WVe3.png)


### `distribute` syntax

Don't lose count of your `x`s! Freely combine `distribute` with your ASCII art.

```scss
section {
  @include grid((
    'x-x x x',
     distribute 7,
  ));
}
```

![](http://i.imgur.com/i2Gv9bg.png)

### Quick `n`-column layouts

As basic as it gets.

```scss
section {
  @include fixed-grid(3);
}
```

![](http://i.imgur.com/7H4ZkhR.png)

### Don't like dangling elements?

Just tell Grassy to distribute dangling elements.

```scss
section {
  @include fixed-grid(
    3,
    $distribute-dangling: true
  );
}
```

![](http://i.imgur.com/Smfu3M0.png)

Or distribute them at the top if you prefer it that way.

```scss
section {
  @include fixed-grid(
    3,
    $distribute-dangling: true,
    $dangling-at-beginning: true,
  );
}
```

![](http://i.imgur.com/ChX2HVE.png)

Also take a look at [full documentation](https://lazarljubenovic.github.io/grassy/). (Includes both the public API and explanation of some internal functions to help you if you want to contribute but have no idea where to start from.)

## Playground

Try it out now in the [Codepen playground](http://codepen.io/dbox/pen/aJLGxE).

## Why Grassy?

- No additional markup.
- CSS is generated based on your needs: you won't have styles you don't use.
- The syntax makes it almost like you're drawing boxes instead of doing CSS.
- Great for generated content.
- Zero runtime dependencies.

More coming [soon™©®](https://github.com/lazarljubenovic/grassy/issues?q=is%3Aissue+is%3Aopen+label%3A%22future+plans%22).

---

**NOTE** This is still in rapid development phase. There might be breaking changes along the way. For this reason, I advise you not to use this in serious projects. However, to find (and fix) bugs, people have to use it _somewhere_. So if you have a suitable non-critical project, it would be awesome if you could try out Grassy.

Please report bugs and suggest ideas by [opening an issue](https://github.com/lazarljubenovic/grassy/issues).

---

Grassy is heavily inspired by [Effortless Style](https://vimeo.com/101718785), a talk by [Heydon Pickering](https://twitter.com/heydonworks).
