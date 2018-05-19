const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
      var str = 123;
      expect(isRealString(str)).toBe(false);
    });

    it('should reject strings with only spaces', () => {
      var str = '   ';
      expect(isRealString(str)).toBe(false);
    });

    it('should allow spaces with non-space chars', () => {
      var str = '  d   ';
      expect(isRealString(str)).toBe(true);
    });
});
