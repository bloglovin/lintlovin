/*jslint node: true */
'use strict';

module.exports = function (grunt) {
  var check = require('dependency-check');

  grunt.registerMultiTask('dependency-check', 'Matches used modules to listed dependencies', function () {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      missing: true,
      unused: true,
      package: '.',
    });

    check({ path: options.package, entries: this.filesSrc }, function(err, data) {
      if (err) {
        return grunt.fail.fatal(err);
      }

      var pkg = data.package;
      var deps = data.used;
      var results;

      if (options.unused) {
        results = check.extra(pkg, deps);
        if (results.length !== 0) {
          grunt.log.error('Modules in package.json not used in code: ' + grunt.log.wordlist(results, { color: 'red' }));
        }
      }

      if (options.missing) {
        results = check.missing(pkg, deps);
        if (results.length !== 0) {
          grunt.fail.fatal('Dependencies not listed in package.json: ' + grunt.log.wordlist(results, { color: 'red' }));
        }
      }

      done();
    });
  });
};
