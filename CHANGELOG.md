## 1.14.0 (2015-02-23)


#### Bug Fixes

* **main:** updated outdated dependencies ([8d122f29](https://github.com/bloglovin/lintlovin/commit/8d122f29a66c63e1b508aa911fa41303339b0812))


#### Features

* **main:**
  * added option for extra default tasks ([1df37fd6](https://github.com/bloglovin/lintlovin/commit/1df37fd6e172d446103bb46aa4e3b0d14ba21852))
  * added ”extraWatchTasks” option ([9939850e](https://github.com/bloglovin/lintlovin/commit/9939850e126bfcc54f51ed9ea83bdda0e0a7194e))


## 1.13.0 (2015-02-19)


#### Features

* **style:** allow one statement inline blocks ([02c99c14](https://github.com/bloglovin/lintlovin/commit/02c99c14c157dd571b412e94744a541130d4686e))


## 1.12.0 (2015-02-05)


#### Features

* **main:** add option for disabling dep. check ([56396768](https://github.com/bloglovin/lintlovin/commit/563967680db82529d503554972ac8d5445cbef94))


## 1.11.0 (2015-01-27)


#### Features

* **style:** new styleguide rules ([e27581e4](https://github.com/bloglovin/lintlovin/commit/e27581e4b533cb6281cec5dafced30130595765a))


## 1.10.0 (2015-01-24)


#### Features

* **jscs:** added jscs grunt task ([625bc315](https://github.com/bloglovin/lintlovin/commit/625bc315f480014d4b7bda5176573545b68d93cc))
* **main:**
  * package.json now whitespace linted ([eb1b199a](https://github.com/bloglovin/lintlovin/commit/eb1b199a57104a102634ea7aefb0b4fb9db54527))
  * added time-grunt to track performance ([4c11d007](https://github.com/bloglovin/lintlovin/commit/4c11d007849e381dfd67977a3e4ea0ba2654af39))


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
