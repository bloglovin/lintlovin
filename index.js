/*jslint node: true */
'use strict';

var lib = {
  fs: require('fs'),
  path: require('path')
};
var _ = require('lodash');

exports.initConfig = function (grunt, config, options) {
  config = config || {};
  options = options || {};

  if (options.noMocha === undefined) {
    options.noMocha = !lib.fs.existsSync('test');
  }

  var defaults = {
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: _.union([
        '*.js',
        'lib/**/*.js',
        'test/**/*.js',
        'bin/**/*.js',
        'cli/**/*.js'
      ], options.jsFiles || []),
      options: { jshintrc: '.jshintrc' }
    },
    lintspaces: {
      files: ['<%= jshint.files %>'],
      options: { editorconfig: '.editorconfig' }
    },
    watch: {
      basic : {
        files: [
          '<%= lintspaces.files %>',
          'test/**/*'
        ],
        tasks: [!options.noMocha && options.integrationWatch ? 'test-all' : 'test']
      }
    }
  };

  if (!options.noMocha) {
    defaults.mocha_istanbul = {
      options: {
        ui: 'tdd'
      },
      basic: {
        src: ['test/**/*.js', '!test/integration/**/*.js']
      },
      integration: {
        src: ['test/integration/**/*.js']
      }
    };
  }

  _.defaults(config, defaults);
  grunt.initConfig(config);

  var plugins = [
    'grunt-notify',
    'grunt-lintspaces',
    'grunt-contrib-jshint',
    'grunt-contrib-watch'
  ];

  var testTasks = ['lintspaces', 'jshint'];
  if (!options.noMocha) {
    plugins.push('grunt-mocha-istanbul');
    testTasks.push('mocha_istanbul:basic');
  }

  // Uhm, HACK! But WTF Grunt!
  var cwd = process.cwd();
  process.chdir(__dirname);
  // Manually load the plugins so that we don't pollute the parent module
  // with loads of peer dependencies.
  plugins.forEach(function loadTasks(name) {
    grunt.loadNpmTasks(name);
  });
  process.chdir(cwd);

  grunt.registerTask('test', testTasks);
  grunt.registerTask('test-all', options.noMocha ? 'test' : ['test', 'mocha_istanbul:integration']);
  grunt.registerTask('default', 'test');
};
