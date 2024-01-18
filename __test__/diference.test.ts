
import { expect, test } from 'vitest';
import { difference } from '../src/utils/diference';

    test('should return zero when both numbers are zero', () => {
        const result = difference(0, 0);
        expect(result).toBe(2)
    });

    test('should return the number itself when one of the numbers is zero', () => {
        const result1 = difference(5, 2);
        expect(result1).toBe(3)
    });
