import { computeDirection } from '../../src/utils/computeDirection';

describe('computeDirection', () => {
  it('returns NONE if X and Y stay the same', () => {
    const args = {
      isRef: false,
      currentY: 10,
      currentX: 10,
      lastY: 10,
      lastX: 10,
    };

    expect(computeDirection(args)).toBe('NONE');
  });

  describe('window case', () => {
    it('returns UP', () => {
      const args = {
        isRef: false,
        currentY: -20,
        currentX: 0,
        lastY: 0,
        lastX: 0,
      };

      expect(computeDirection(args)).toBe('UP');
    });
    it('returns DOWN', () => {
      const args = {
        isRef: false,
        currentY: 0,
        currentX: 0,
        lastY: -20,
        lastX: 0,
      };

      expect(computeDirection(args)).toBe('DOWN');
    });
    it('returns LEFT', () => {
      const args = {
        isRef: false,
        currentY: 0,
        currentX: -20,
        lastY: 0,
        lastX: 0,
      };

      expect(computeDirection(args)).toBe('LEFT');
    });
    it('returns RIGHT', () => {
      const args = {
        isRef: false,
        currentY: 0,
        currentX: 0,
        lastY: 0,
        lastX: -20,
      };

      expect(computeDirection(args)).toBe('RIGHT');
    });
  });

  describe('ref case', () => {
    it('returns UP', () => {
      const args = {
        isRef: true,
        currentY: 20,
        currentX: 0,
        lastY: 0,
        lastX: 0,
      };

      expect(computeDirection(args)).toBe('UP');
    });
    it('returns DOWN', () => {
      const args = {
        isRef: true,
        currentY: 0,
        currentX: 0,
        lastY: 20,
        lastX: 0,
      };

      expect(computeDirection(args)).toBe('DOWN');
    });
    it('returns LEFT', () => {
      const args = {
        isRef: true,
        currentY: 0,
        currentX: 20,
        lastY: 0,
        lastX: 0,
      };

      expect(computeDirection(args)).toBe('LEFT');
    });
    it('returns RIGHT', () => {
      const args = {
        isRef: true,
        currentY: 0,
        currentX: 0,
        lastY: 0,
        lastX: 20,
      };

      expect(computeDirection(args)).toBe('RIGHT');
    });
  });
});
