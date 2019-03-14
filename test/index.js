'use strict';

var should = require('chai').should();
var rtmcore = require('../');

describe('#versionGuard', function() {
  it('global._rtmcore should be defined', function() {
    should.equal(global._rtmcore, rtmcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      rtmcore.versionGuard('version');
    }).should.throw('More than one instance of rtmcore');
  });
});
