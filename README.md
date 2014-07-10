# static-grunt-template

Just a starter template

## Dependencies

- Grunt for build
- Bower for managing packages
- Scut for CSS utilities, so you don't have to write all the mixins yourself
- Libsass for super fast build time (something like from 100 to 300ms)
- Autoprefixer for prefixes
- Bourbon for... not for so much actually
- Neat for grids and structure, uses Bourbon
- ImageOptim for optimizing images
- Svgmin for SVG minifying
- And other stuff, check the `package.json`

## Install

```
$ git clone https://github.com/hilja/static-grunt-template.git
```

Even better, if you use Sublime Text, install [Fetch][2] package and slap the clone URL there and you're up an running literally in seconds!

Then run:

```
$ npm install
$ bower install
$ grunt
```

And then watch it:

```
$ grunt watch
```

And spin up server using [http-server][1] (install it globally first):

```
$ http-server
```

[1]: https://www.npmjs.org/package/http-server 
[2]: https://sublime.wbond.net/packages/Nettuts%2B%20Fetch