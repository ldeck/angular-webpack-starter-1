# An Angular Webpack Starter kit

[![Dependency Status](https://david-dm.org/ldeck/angular-webpack-starter-kit/status.svg)](https://david-dm.org/ldeck/angular-webpack-starter-kit#info=dependencies) [![devDependency Status](https://david-dm.org/ldeck/angular-webpack-starter-kit/dev-status.svg)](https://david-dm.org/ldeck/angular-webpack-starter-kit#info=devDependencies)

A complete, yet simple, bdd ready starter kit for Angular using Webpack.

This workflow serves as a starting point for building Angular 1.x applications using Webpack. It should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* PostCSS and jade support by default.
* BDD testing using cucumber, protractor and chai/chai-as-promised.
* Testing environment using
  * karma to run unit tests using jasmine as the framework;
  * protractor/jasmine for End to End tests;
  * protractor/cucumber/chai for BDD End to End tests
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts (with some supporting bash/perl scripts).
* `NVM` and `direnv` to manage the environment.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo then edit `Application.js` inside [`/src/Application.js`](/src/Application.js)

```bash
# clone our repo
$ git clone https://github.com/ldeck/angular-webpack-starter-kit.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
    * [Other](#other)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* The Node Version Manager (See [NVM](https://github.com/creationix/nvm))
* `direnv` to auto configure your path (See [direnv](http://direnv.net))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

Either
* `fork` this repo
* `clone` your fork

Or just
* `npm install angular-webpack-starter-kit` for completely installation

And then
* `npm install` to install all dependencies

For End to End live testing:
* `npm install selenium-standalone@latest -g`
* `selenium-standalone install`

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

#### 2. BDD Tests (protractor/cucumber/chai)

* single run: `npm run bdd`
* single run (@wip): `npm run bdd-wip`
* live mode (BDD style): `npm run bdd-wip-watch`

#### 3. End to End Tests (protractor/jasmine)

* single run: `npm run e2e`
* live mode (TDD style): `npm run e2e-watch`

## Other

* `npm stats` for code analysing ([webpack.github.io/analyse](https://webpack.github.io/analyse/))
* Store your content (images, etc.) that loads from html/jade in [public folder](./src/public/) folder

# License

[MIT](/LICENSE)
