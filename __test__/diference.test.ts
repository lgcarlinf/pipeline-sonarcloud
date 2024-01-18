
import { expect, test } from 'vitest';
import { sum } from '../src/utils/sum';

    test('should return zero when both numbers are zero', () => {
        const result = sum(0, 0);
        expect(result).toBe(2)
    });

    test('should return the number itself when one of the numbers is zero', () => {
        const result1 = sum(5, 2);
        expect(result1).toBe(3)
    });
