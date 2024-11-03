// 344. Reverse String
// https://leetcode.com/problems/reverse-string/
//
// Write a function that reverses a string.
// The input string is given as an array of characters s.
//
// You must do this by modifying the input array in-place with O(1) extra memory.
//
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
//
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
//

const reverseString = function (s) {
    let n = s.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        [s[i], s[n - 1 - i]] = [s[n - 1 - i], s[i]];
    }
};



