/*jslint node: true */

'use strict';

var lintlovin = require('./');

module.exports = function (grunt) {
  lintlovin.initConfig(grunt, {}, {
    dependencyFiles: ['!bin/Gruntfile.default.js'],
    ignoreUnusedDependencies: [
      'dependency-check',
      'grunt-contrib-jshint',
      'grunt-contrib-watch',
      'grunt-jscs',
      'grunt-lintspaces',
      'grunt-mocha-istanbul',
      'grunt-notify',
    ],
  });
};
