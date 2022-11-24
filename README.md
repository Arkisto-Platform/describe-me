# DescribeMe

Its pronounced `duh · skre · buh · muh` in spanish! 

Only for Google Chrome latest version, not compatible with Firefox or Safari.

Play with it in https://arkisto-platform.github.io/describe-me/ 

### Installation

```sh
npm install
```

### Start Dev Server

```sh
npm start
```

And go to http://localhost:8081/

### Build Prod Version

```sh
npm run build
```

### Features:

- ES6 Support via [babel](https://babeljs.io/) (v7)
- JavaScript Linting via [eslint](https://eslint.org/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- Style Linting via [stylelint](https://stylelint.io/)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.


### Notes:

- This is a fork from https://github.com/wbkd/webpack-starter.git to get started
- Every push will be live on https://arkisto-platform.github.io/describe-me/