const assert = require('assert');
const reverseString = require('../algos/reverse_string.js');
const squareRoot = require('../algos/square_root.js')

describe('reverseString test', function () {
  it('reverseString() should return a string.', function () {
    assert(typeof reverseString() === 'string');
  });

  it('reverseString() should return olleh.', function () {
    assert(reverseString() === 'olleh');
  });
});

describe('squareRoot test', function () {
  it('squareRoot() should return a number.', function () {
    assert(typeof squareRoot() === 'number');
  });

  it('squareRoot() should return olleh.', function () {
    assert(squareRoot() === '2.828');
  });
});