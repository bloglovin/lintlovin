/*jslint node: true */
'use strict';

var lintlovin = require('lintlovin');

// A live-reloaded node-sass compiling live-reloading development server on top of Lintlovin
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
