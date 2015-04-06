/* jshint node: true */
/*global suite, test */
'use strict';

var lib = {
  fs: require('fs'),
  assert: require('assert'),
  jsYaml: require('js-yaml'),
  chai: require('chai')
};

var expect = lib.chai.expect;

suite('README', function testClient() {

  test('Documented JSHint rules matches .jshintrc', function checkJSHintDocs(done) {
    var yaml = /`{3}yaml([^`]+)`{3}/m;
    var readme = lib.fs.readFileSync('README.md', {encoding: 'utf8'});
    var jshintrc = lib.fs.readFileSync('.jshintrc', {encoding: 'utf8'});
    var jshintOptions = JSON.parse(jshintrc);

    var yamlBlock = yaml.exec(readme);
    if (!yamlBlock) {
      throw new Error('No yaml code block in the readme');
    }
    var documentedOptions = lib.jsYaml.safeLoad(yamlBlock[1]);

    expect(documentedOptions).to.deep.equal(jshintOptions);
    done();
  });
});
