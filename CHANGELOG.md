## 1.8.0 (2014-12-05)


#### Bug Fixes

* **main:** avoid Mocha peer-dependency problem ([f061bcb5](https://github.com/bloglovin/lintlovin/commit/f061bcb568b5e609fa7d46e25e880c4482eb4720))


#### Features

* **main:**
  * two options for extra alias tasks ([b0491e03](https://github.com/bloglovin/lintlovin/commit/b0491e033b2ce7f30fe4236e1efde7ff4878e740))
  * More granular ways to add paths in ([a52144be](https://github.com/bloglovin/lintlovin/commit/a52144be0a354bc0e0895bad0396ea573d0cef89))

## 1.7.0

* Made the whitespace linting ignore indention within JSDoc-style comments

## 1.6.0

* Changed the NODE_ENV environment variable to be set to "test" when running tests

## 1.5.1

* Updated `grunt-mocha-istanbul` dependency to once again use a published NPM package

## 1.5.0

* Change: The ordinary `test` task now excludes tests in an `integration` subfolder of `test/`
* New: Added an option, `integrationWatch`, to run integration tests on file changes
* New: Added a new task, `test-all`, that runs all linting and tests, including the integration tests

## 1.4.0

* New: Added an option, `jsFiles`, to add additional files to watch and lint
* Change: Made it so all top level js-files are watched and linted by default
