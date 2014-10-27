# Lintlovin

Lintlovin sets up your project for automatic linting, whitespace checking, and runs mocha tests (if you have any).

On install (`npm install lintlovin --save-dev`) it will set up a Grunt file, `.editorconfig`, `.jshintrc`, and a git hook that runs test before you push. The gotcha here is that it will run tests on what is in you working directory, and not on the actual contents of the branch.

To run tests continually while editing run `grunt watch` in your project. To run tests manually just run `npm test`.

## JSHint options

```yaml
  asi: false # Don't allow missing semicolons.
  bitwise: true # Bitwise ops are forbidden.
  camelcase: false # Do not force use of camelCase.
  curly: true # Force code blocks after flow control statement.
  eqeqeq: true # Force === for equality checking.
  freeze: true # Don't allow fiddling with prototypes of native objects
  immed: true # Prohibit the use of immediate function invocations without wrapping them in parentheses
  indent: 2 # Two spaces indent
  latedef: nofunc # Only allow late definition of functions.
  newcap: true # Force capitalisation of constructor functions
  noarg: true # Prohibit the use of arguments.caller and arguments.callee.
  noempty: true # Warn when you have an empty block in your code.
  nonbsp: true # Catch non-breaking whitespace.
  nonew: true # Prohibit the use of constructor functions for side-effects.
  quotmark: single # Single quotes for strings.
  strict: true # Strict mode!
  undef: true # Prohibit the use of explicitly undeclared variables.
  unused: true # Warns when you define and never use your variables.
```

Rationale for not forcing camelCase: It's quite common to get data from modules and APIs that doesn't use camel case, that would then generate errors when you try to access non-camel properties.

## Available Grunt tasks

The `npm`-based commands *don't* need [grunt-cli](https://github.com/gruntjs/grunt-cli), but the `grunt` commands do.

* **test** – lints all files to the defined JSHint and EditorConfig coding style guidelines and, unless `noMocha` has been set to `true`, runs all tests in a `test/`-folder if such a one exist, with the exclusion of any tests in a `test/integration/` folder. Can be invoked through either `grunt test` or `npm test`.
* **test-all** – like `test`, but also runs the tests in the `test/integration/` folder. Can be invoked through either `grunt test-all` or `npm run test-all`.
* **watch** – watches for file changes and runs `test` on any relevant change. Can be invoked through `grunt watch`.

## lintlovin.initConfig(grunt[, config] [, options])

To be run from the parent project's Gruntfile.js to initialize Grunt with a basic config by sending the `grunt` object into it and extra configurations apart from the ones Lintlovin defines. One can also optionally specify some options:

* **integrationWatch** – makes the `watch` task also run tests in `test/integration/`, which can be unfeasable in big projects, but nice in smaller ones. Defaults to `false`.
* **jsFiles** – an array of additional files to watch and lint. By default `.js`-files in top folder or below the `bin/`, `cli/`, `lib/` or `test/` folders will be watched and linted. (Also any non-js file in `test/` will be watched and will thus retrigger a test when changed)
* **spaceFiles** – an array of additional files to just watch and whitespace lint.
* **watchFiles** – an array of additional files to just watch.
* **noMocha** – disables the [Mocha](http://visionmedia.github.io/mocha/) tests. Mocha tests are otherwise run if a `test/`-folder is found in the parent project.

## Changelog

### 1.7.0

* Made the whitespace linting ignore indention within JSDoc-style comments

### 1.6.0

* Changed the NODE_ENV environment variable to be set to "test" when running tests

### 1.5.1

* Updated `grunt-mocha-istanbul` dependency to once again use a published NPM package

### 1.5.0

* Change: The ordinary `test` task now excludes tests in an `integration` subfolder of `test/`
* New: Added an option, `integrationWatch`, to run integration tests on file changes
* New: Added a new task, `test-all`, that runs all linting and tests, including the integration tests

### 1.4.0

* New: Added an option, `jsFiles`, to add additional files to watch and lint
* Change: Made it so all top level js-files are watched and linted by default
