// 1413. Minimum Value to Get Positive Step by Step Sum
// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
//
// Given an array of integers nums, you start with an initial
// positive value startValue.
//
// In each iteration, you calculate the step by step sum of
// startValue plus elements in nums (from left to right).
//
// Return the minimum positive value of startValue such that
// the step by step sum is never less than 1.
//
// Input: nums = [-3,2,-3,4,2]
// Output: 5
//
// Input: nums = [1,2]
// Output: 1
//
// Input: nums = [1,-2,-3]
// Output: 5
//
const minStartValue = function(a) {
    let n = a[0] < 0 ? (1 - a[0]) : 1;
    let s = [a[0]];
    for (let i = 1; i < a.length; i++) {
        s[i] = a[i] + s[i - 1];
        let m = 1 - s[i]
        n = Math.max(n, m);
    }
    return n;
};


function describe(description, fn) {
    console.log(description);
    fn();
}

function it(message, fn) {
    console.log('  ' + message + ' ');
    fn();
}

function matchers(exp) {
    return {
        toBe: function (assertion) {
            if (exp === assertion) {
                console.log(' \u2705 pass ');
                return true;
            } else {
                console.log(' \u274C fail ');
                return false;
            }
        }
    }
}

function expect(exp) {
    return matchers(exp);
}

describe('minStartValue', () => {
    it('returns the correct minimum start value for mixed array', () => {
        const nums = [-3, 2, -3, 4, 2];
        expect(minStartValue(nums)).toBe(5);
    });
    it('returns 1 for positive array', () => {
        const nums = [1, 2];
        expect(minStartValue(nums)).toBe(1);
    });
    it('returns the correct minimum start value for mixed positive and negative array', () => {
        const nums = [1, -2, -3];
        expect(minStartValue(nums)).toBe(5);
    });
    it('returns 1 when single positive integer in array', () => {
        const nums = [7];
        expect(minStartValue(nums)).toBe(1);
    });
    it('returns the correct integer when single negative integer in array', () => {
        const nums = [-7];
        expect(minStartValue(nums)).toBe(8);
    });
});