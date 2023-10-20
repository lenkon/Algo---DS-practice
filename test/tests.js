const assert = require('assert');
const reverseString = require('../algos/reverse_string.js');

describe('Tests', function () {
  it('reverseString() should return a string.', function () {
    assert(typeof reverseString() === 'string');
  });

  it('reverseString() should return olleh.', function () {
    assert(reverseString() === 'olleh');
  });
});
