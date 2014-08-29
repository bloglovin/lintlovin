# Lintlovin

Lintlovin sets up your project for automatic linting and whitespace checking. On install it will set up a Grunt file, `.editorconfig`, `.jshintrc`, and a git hook that runs test before you push. The gotcha here is that it will run tests on what is in you wortking director, and not on the actual contents of the branch.

To run tests continually while editing run `grunt watch` in your project. To run tests manually just run `npm test`.
