const assert = require('assert');
const reverseString = require('../algos/reverse_string.js');
const squareRoot = require('../algos/square_root.js')
const nth_square_root = require('../algos/nth_square_root.js')

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
    assert(typeof squareRoot() === 'number')
  });

  it('squareRoot() should return 2.828', function () {
    assert(squareRoot() === 2.828);
  });
});

describe('nth_square_root test', function () {
  it('nth_square_root() should return a number.', function () {
    assert(typeof nth_square_root() === 'number')
  });

  it('nth_square_root() should return 2.000', function () {
    assert(nth_square_root() === 2.000);
  });
});