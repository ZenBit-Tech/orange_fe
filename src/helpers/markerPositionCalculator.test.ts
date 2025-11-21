import { calculateMarkerPosition } from './markerPositionCalculator';

describe('calculateMarkerPosition', () => {
  const referenceRange = { referenceMin: 10, referenceMax: 20 };

  describe('Extreme low values', () => {
    test('should return 0 for value of 0', () => {
      expect(calculateMarkerPosition(0, referenceRange)).toBe(0);
    });
  });

  describe('Red low zone (0% - 20%)', () => {
    test('should position values between 0 and redLowEnd in 0-20 range', () => {
      expect(calculateMarkerPosition(2.5, referenceRange)).toBeCloseTo(10, 1);
      expect(calculateMarkerPosition(5, referenceRange)).toBeCloseTo(20, 1);
    });
  });

  describe('Yellow low zone (20% - 30%)', () => {
    test('should position values between redLowEnd and referenceMin in 20-30 range', () => {
      expect(calculateMarkerPosition(5, referenceRange)).toBeCloseTo(20, 1);
      expect(calculateMarkerPosition(7.5, referenceRange)).toBeCloseTo(25, 1);
      expect(calculateMarkerPosition(9.99, referenceRange)).toBeCloseTo(29.98, 1);
    });
  });

  describe('Green zone (30% - 70%)', () => {
    test('should position values in normal range in 30-70 range', () => {
      expect(calculateMarkerPosition(10, referenceRange)).toBe(30);
      expect(calculateMarkerPosition(15, referenceRange)).toBe(50);
      expect(calculateMarkerPosition(20, referenceRange)).toBe(70);
    });
  });

  describe('Yellow high zone (70% - 80%)', () => {
    test('should position values between referenceMax and yellowHighEnd in 70-80 range', () => {
      expect(calculateMarkerPosition(21, referenceRange)).toBeCloseTo(72, 1);
      expect(calculateMarkerPosition(25, referenceRange)).toBeCloseTo(80, 1);
      expect(calculateMarkerPosition(30, referenceRange)).toBeCloseTo(80, 1);
    });
  });

  describe('Red high zone (80% - 100%)', () => {
    test('should position values between yellowHighEnd and redHighEnd in 80-100 range', () => {
      expect(calculateMarkerPosition(30, referenceRange)).toBeCloseTo(80, 1);
      expect(calculateMarkerPosition(45, referenceRange)).toBeCloseTo(90, 1);
      expect(calculateMarkerPosition(60, referenceRange)).toBe(100);
    });
  });

  describe('Extreme high values', () => {
    test('should return 100 for values at or above redHighEnd', () => {
      expect(calculateMarkerPosition(60, referenceRange)).toBe(100);
      expect(calculateMarkerPosition(100, referenceRange)).toBe(100);
    });
  });

  describe('Real medical test examples', () => {
    test('should handle Eosinophils Absolute (0.09, range 0.5-5.0)', () => {
      const result = calculateMarkerPosition(0.09, { referenceMin: 0.5, referenceMax: 5.0 });
      expect(result).toBeLessThan(20);
    });

    test('should handle Neutrophils Absolute (235, range 1.78-5.38)', () => {
      const result = calculateMarkerPosition(235, { referenceMin: 1.78, referenceMax: 5.38 });
      expect(result).toBe(100);
    });

    test('should handle normal Hematocrit (48.9, range 35.54-54)', () => {
      const result = calculateMarkerPosition(48.9, { referenceMin: 35.54, referenceMax: 54 });
      expect(result).toBeGreaterThanOrEqual(30);
      expect(result).toBeLessThanOrEqual(70);
    });
  });
});
