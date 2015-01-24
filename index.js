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

  if (!options.noTiming) {
    require('time-grunt')(grunt);
  }
  if (options.noMocha === undefined) {
    options.noMocha = !lib.fs.existsSync('test');
  }

  if (options.noMocha) {
    options.noIntegration = true;
  } else if (options.noIntegration === undefined) {
    options.noIntegration = !lib.fs.existsSync('test/integration');
  }

  // Default task options
  var defaults = {
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: _.union([
        '*.js',
        'lib/**/*.js',
        'test/**/*.js',
        'bin/**/*.js',
        'cli/**/*.js',
        'tasks/**/*.js',
      ], options.jsFiles || []),
      options: { jshintrc: '.jshintrc' }
    },
    lintspaces: {
      files: _.union(['<%= jshint.files %>'], options.spaceFiles || []),
      options: {
        editorconfig: '.editorconfig',
        ignores: ['js-comments'],
      }
    },
    watch: {
      basic : {
        files: _.union([
          '<%= lintspaces.files %>',
          'test/**/*'
        ], options.watchFiles || []),
        tasks: [!options.noMocha && options.integrationWatch ? 'test-all' : 'test']
      }
    },
  };

  defaults['dependency-check'] = {
    files: _.union(['<%= jshint.files %>'], options.dependencyFiles || []),
    options: {
      excludeMissingDev: true,
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

  if (!options.noJSCS) {
    defaults.jscs = {
      src: '<%= jshint.files %>',
    };
  }

  _.defaults(config, defaults);
  grunt.initConfig(config);

  var plugins = [
    'grunt-notify',
    'grunt-lintspaces',
    'grunt-contrib-jshint',
    'grunt-contrib-watch',
    'dependency-check',
  ];

  var testTasks = ['lintspaces', 'jshint', 'dependency-check', 'setTestEnv'];
  var integrationTestTasks = options.noIntegration ? ['test'] : ['test', 'mocha_istanbul:integration'];

  if (!options.noMocha) {
    plugins.push('grunt-mocha-istanbul');
    testTasks.push('mocha_istanbul:basic');
  }

  if (!options.noJSCS) {
    plugins.push('grunt-jscs');
    testTasks.push('jscs');
  }

  testTasks = testTasks.concat(options.extraTestTasks || []);
  integrationTestTasks = integrationTestTasks.concat(options.extraTestAllTasks || []);

  // Uhm, HACK! But WTF Grunt!
  var cwd = process.cwd();
  process.chdir(__dirname);
  // Manually load the plugins so that we don't pollute the parent module
  // with loads of peer dependencies.
  plugins.forEach(function loadTasks(name) {
    grunt.loadNpmTasks(name);
  });
  process.chdir(cwd);

  // Whenever we have some special built tasks, add them into the /tasks folder and uncomment the line below
  // grunt.loadTasks(lib.path.join(__dirname, 'tasks'));

  grunt.registerTask('setTestEnv', 'Ensure that environment (database etc) is set up for testing', function () {
    process.env.NODE_ENV = 'test';
  });

  grunt.registerTask('test', testTasks);
  grunt.registerTask('test-all', integrationTestTasks);
  grunt.registerTask('default', 'test');
};
