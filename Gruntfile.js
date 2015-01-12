/*jslint node: true */

'use strict';

var lintlovin = require('./');

module.exports = function (grunt) {
  lintlovin.initConfig(grunt, {}, {
    dependencyFiles: ['!bin/Gruntfile.default.js'],
  });
};
