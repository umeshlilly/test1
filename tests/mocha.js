const assert = require('assert');

// This is an exmaple Mocha test. Please write your own unit testing with Mocha.
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
