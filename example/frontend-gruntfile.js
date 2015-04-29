/*jslint node: true */
'use strict';

var lintlovin = require('lintlovin');

// A live-reloaded node-sass compiling live-reloading development server on top of Lintlovin

// Folders:
//   js/       – the frontend js
//   css/      – the compiled frontend css
//   example/  – the example HTML to use with the built in development server
//   src/scss/ – the sass source files
//   + any other top level folder will also be reachable by the built in server

// Start the built in server with automated watching, linting and compiling by running: "grunt server"

// Be sure to install these modules as dev dependencies in addition to Lintlovin:
//   grunt-contrib-connect
//   grunt-sass

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
    extraDefaultTasks: ['sass'],
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

  grunt.registerTask('server', ['default', 'connect', 'watch']);
