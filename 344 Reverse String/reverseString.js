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

function reverseString(s) {
    const splitString = s.split("");
    const reverseArray = splitString.reverse();
    return reverseArray.join("");
}

function reverseStringLoop(s) {
    let newString = "";
    for (let i = s.length - 1; i >= 0; i--)
        newString += s[i];
    return newString;
}

function recursiveReverseString(s) {
    if (s === "") return "";
    else return recursiveReverseString(s.substring(1)) + s.charAt(0);
}

function reverseStringTernary(s) {
    return (s === "") ? "" : reverseStringTernary(s.substring(1)) + s.charAt(0);
}

function expect(exp) {
    return matchers(exp);
}

function it(message, fn) {
    console.log('  ' + message + ' ');
    fn();
}

function matchers(exp) {
    return {
        toBe: function (assertion) {
            if (exp === assertion) {
                console.log('\t\u2705 pass ', exp);
                return true;
            } else {
                console.log('\t\u274C fail ', exp);
                return false;
            }
        }
    }
}

function describe(description, fn) {
    console.log(description);
    fn();
}

describe("reverseString function", () => {
  it("It should return the reversed string", () => {
    expect(reverseStringTernary("hello")).toBe("olleh");
    expect(reverseStringTernary("world")).toBe("dlrow");
    expect(reverseStringTernary("JavaScript")).toBe("tpircSavaJ");
  });
  it("It should handle string with spaces and special characters", () => {
    expect(reverseStringTernary("hello world")).toBe("dlrow olleh");
    expect(reverseStringTernary("123@#$$%!^")).toBe("^!%$$#@321");
  });
  it("It should return same string when string length is 1", () => {
    expect(reverseStringTernary("a")).toBe("a");
    expect(reverseStringTernary("!")).toBe("!");
  });
  it("It should handle empty string", () => {
    expect(reverseStringTernary("")).toBe("");
  });
});
