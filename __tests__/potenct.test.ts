
import { expect, test } from 'vitest';
import { potency } from '../src/utils/potency';

    test('should return one when both numbers are zero', () => {
        const result = potency(6, 0);
        expect(result).toBe(1)
    });

    test('should return the number itself when one of the numbers is zero', () => {
        const result1 = potency(5, 2);
        expect(result1).toBe(25)
    });
