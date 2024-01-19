import { expect, test } from 'vitest';
import { divide } from '../src/utils/divide';

    test('should return one when both numbers are zero', () => {
        const result = divide(10, 10);
        expect(result).toBe(1)
    });

    test('should return the number itself when one of the numbers is zero', () => {
        const result1 = divide(6, 2);
        expect(result1).toBe(3)
    });