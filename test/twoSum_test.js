var assert = require('assert');
var twoSum = require('../twoSum.js');

describe('twoSum', function () {
    it('should return [3, 4]', function () {
        assert.deepEqual(twoSum([1, 2, 3, 4, 5, 6, 7, 9, 31, 21], 9), [3, 4]);
    });
});