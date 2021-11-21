import { getScrollDirectionBooleans } from '../../src/utils/getScrollDirectionBooleans';

describe('useScrollDirection', () => {
  describe('getScrollDirectionBooleans', () => {
    it('returns correct object for NONE', () => {
      const result = getScrollDirectionBooleans('NONE');
      const expected = {
        isScrolling: false,
        isScrollingUp: false,
        isScrollingDown: false,
        scrollDirection: 'NONE',
      };

      expect(result).toEqual(expected);
    });
    it('returns correct object for UP', () => {
      const result = getScrollDirectionBooleans('UP');
      const expected = {
        isScrolling: true,
        isScrollingUp: true,
        isScrollingDown: false,
        scrollDirection: 'UP',
      };

      expect(result).toEqual(expected);
    });
    it('returns correct object for DOWN', () => {
      const result = getScrollDirectionBooleans('DOWN');
      const expected = {
        isScrolling: true,
        isScrollingUp: false,
        isScrollingDown: true,
        scrollDirection: 'DOWN',
      };

      expect(result).toEqual(expected);
    });
  });
});
