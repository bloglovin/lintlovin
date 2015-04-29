/*jslint node: true */
'use strict';

var fs = require('fs');

var lintlovin = require('lintlovin');
var Handlebars = require('handlebars');

// A live-reloaded node-sass compiling live-reloading development server on top of Lintlovin

// This one also renders Handlebar templates with dummy data

// Folders:
//   js/       – the frontend js
//   css/      – the compiled frontend css
//   html/     – the Handlebar templates to render
//   example/  – the example HTML to use with the built in development server
//   src/scss/ – the sass source files
//   + any other top level folder will also be reachable by the built in server

// Start the built in server with automated watching, linting and compiling by running: "grunt server"

// Be sure to install these modules as dev dependencies in addition to Lintlovin:
//   grunt-contrib-connect
//   grunt-sass
//   handlebars

var dummyTemplateData = {
  foo: 'bar',
};

module.exports = function (grunt) {
  lintlovin.initConfig(grunt, {
    connect: {
      server: {
        options: {
          port: 9001,
          useAvailablePort: true,
          // Folders in reverse order of precedence
          base: ['.', './example'],
          livereload: true,
          middleware: function (connect, options, middlewares) {

            // Render Handlebar files
            middlewares.unshift(function (req, res, next) {
              if (req.url.indexOf('/html/') !== 0 || req.url.indexOf('.html') === -1) { return next(); }

              fs.readFile(
                req.url.slice(1, req.url.indexOf('.html') + '.html'.length),
                { encoding: 'utf8' },
                function (err, content) {
                  if (err) { return next(err); }
                  res.end(Handlebars.compile(content)(dummyTemplateData));
                }
              );
            });

            return middlewares;
          },
        }
      }
    },
    sass: {
      options: { includePaths: ['src/scss'] },
      dev: {
        files: {'css/styles.css': 'src/scss/styles.scss'}
      },
      dist: {
        options: { outputStyle: 'compressed' },
        files: {'css/styles.min.css': 'src/scss/styles.scss'}
      }
    },
  }, {
    jsFiles: [
      'js/**/*.js',
    ],
    spaceFiles: [
      '*.json',
    ],
    integrationWatch : true,
    extraWatchTasks: {
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass'],
      },
      livereload: {
        options: { livereload: true },
        files: ['css/**/*'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('server', ['connect', 'watch']);
};
