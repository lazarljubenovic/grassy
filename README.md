# Grassy

Build layout through ASCII art in Sass (and more).

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

### A handy `distribute $x` syntax

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

```scss
section {
  @include fixed-grid(3);
}
```

![](http://i.imgur.com/7H4ZkhR.png)

```scss
section {
  @include fixed-grid(
    3,
    $distribute-dangling: true
  );
}
```

![](http://i.imgur.com/Smfu3M0.png)

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

## Why Grassy?

- No additional markup.
- CSS is generated based on your needs: you won't have styles you don't use.
- The syntax makes it almost like you're drawing boxes instead of doing CSS.
- Great for generated content.
- Zero runtime dependencies.

---

This is still in rapid development phase. There might be breaking changes along the way. For this reason, I advise you not to use this in serious projects. However, to find (and fix) bugs, people have to use it _somewhere_. So if you have a suitable non-critical project, it would be awesome if you could try out Grassy.

Please report bugs and suggest ideas by [opening an issue](https://github.com/lazarljubenovic/grassy/issues).

---

Grassy is heavily inspired by [Effortless Style](https://vimeo.com/101718785), a talk by [Heydon Pickering](https://twitter.com/heydonworks).
