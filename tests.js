import assert from 'assert'
import {reverseString} from './reverse_string.js';

// const reverseString = require('./reverse_string.js')

describe('Tests', function () {
  it('reverseString() should return a string.', function () {
    assert(typeof reverseString() === 'string')
  })
  it('reverseString() should return olleh.', function () {
    assert(reverseString() === 'olleh')
  })  
})
