'use strict';

var expect = require('chai').expect;
var pm = require('../chapter4/parenMatching.js');
var elim = require('../chapter4/pez.js');
var pal = require('../chapter5/palindrome.js');
var ll = require('../chapter6/LinkedList.js');
var pf = require('../chapter4/postfix.js');

describe('Paren Matching', function() {
  it('gets returns false in balanced expression', function() {
    expect(pm("3+(4-3)/(7-5)+1")).to.eql(false);
  });
  it('gets returns index for extra right paren', function() {
    expect(pm("3+(4-3)/7-5)+1")).to.eql(11);
  });
  it('gets returns index for extra right paren', function() {
    expect(pm("3+((4-3)/7-5+1")).to.eql(2);
  });
})

describe('convert to postfix', function() {
  it('evaluates long expression correctly', function() {
    expect(pf("3+2-4+3+3+4-8")).to.eql(3);
  });
  it('evaluates trivial case correctly', function() {
    expect(pf("1")).to.eql(1);
  });
  it('evaluates short expression correctly', function() {
    expect(pf("3-2")).to.eql(1);
  });

});


describe('remove entries from stack', function() {
  it('removes indicated value from stack', function() {
    expect(elim([2,4,3,1,2,3,4,5,2,3,2], 2)).to.eql([4,3,1,3,4,5,3]);
  });
  it('returns empty stack correctly', function() {
    expect(elim([1,1,1,1], 1 )).to.eql([]);
  });
  it('evaluates trivial case', function() {
    expect(elim([1,1,1,1], 2)).to.eql([1,1,1,1]);
  });
})

describe('tests palindromes', function() {
  it('returns true for a palindrome', function() {
    expect(pal("cannac")).to.eql(true);
  });
  it('returns true for a palindrome', function() {
    expect(pal('c')).to.eql(true);
  });
  it('returns false for no palindrom', function() {
    expect(pal("amacable")).to.eql(false);
  });
});
