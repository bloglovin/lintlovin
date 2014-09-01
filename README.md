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
