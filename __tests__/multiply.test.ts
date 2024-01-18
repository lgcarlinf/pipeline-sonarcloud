import { expect, test } from 'vitest';
import { multiply } from '../src/utils/multiply';

    test('should return zero when both numbers are zero', () => {
        const result = multiply(0, 0);
        expect(result).toBe(0)
    });

    test('should return the number itself when one of the numbers is zero', () => {
        const result1 = multiply(5, 2);
        expect(result1).toBe(10)
    });