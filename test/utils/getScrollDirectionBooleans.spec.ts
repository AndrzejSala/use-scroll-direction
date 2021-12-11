import { getScrollDirectionBooleans } from '../../src/utils/getScrollDirectionBooleans';

describe('useScrollDirection', () => {
  describe('getScrollDirectionBooleans', () => {
    it('returns correct object for NONE', () => {
      const result = getScrollDirectionBooleans('NONE');
      const expected = {
        isScrolling: false,
        isScrollingUp: false,
        isScrollingDown: false,
        isScrollingLeft: false,
        isScrollingRight: false,
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
        isScrollingLeft: false,
        isScrollingRight: false,
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
        isScrollingLeft: false,
        isScrollingRight: false,
        scrollDirection: 'DOWN',
      };

      expect(result).toEqual(expected);
    });

    it('returns correct object for LEFT', () => {
      const result = getScrollDirectionBooleans('LEFT');
      const expected = {
        isScrolling: true,
        isScrollingUp: false,
        isScrollingDown: false,
        isScrollingLeft: true,
        isScrollingRight: false,
        scrollDirection: 'LEFT',
      };

      expect(result).toEqual(expected);
    });

    it('returns correct object for RIGHT', () => {
      const result = getScrollDirectionBooleans('RIGHT');
      const expected = {
        isScrolling: true,
        isScrollingUp: false,
        isScrollingDown: false,
        isScrollingLeft: false,
        isScrollingRight: true,
        scrollDirection: 'RIGHT',
      };

      expect(result).toEqual(expected);
    });
  });
});
