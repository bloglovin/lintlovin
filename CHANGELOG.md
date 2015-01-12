### 1.9.1 (2015-01-12)


#### Bug Fixes

* **main:** pass an absolute path to loadTasks so that grunt finds bundled tasks ([a2a8243d](https://github.com/bloglovin/lintlovin/commit/a2a8243dec8cbbfc410a59953d724b27944f9210))


## 1.9.0 (2015-01-12)


#### Bug Fixes

* **main:** exclude devDependencies in check ([70533019](https://github.com/bloglovin/lintlovin/commit/70533019fe3350a86c79b7e097c915723025f0b6))


#### Features

* **main:** added dependency checks ([bd824c19](https://github.com/bloglovin/lintlovin/commit/bd824c19bd6d03675be24782307c99b43040f838))


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
