// https://leetcode.com/problems/valid-parentheses/description/
// PROBLEM 1. 5/23

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open b must be closed by the same type of b.
// Open b must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.



//WORKFLOW
/* 
    -nested parentheses is allowed
    -returns bool
    
    1. conditional check for length, return false if not
    2. iterate over string
        3. for i, check if character is a pair (maximum number of combos at once)
            3a. if not, save as new pair (as long as it isn't an end ')' )
            3b. if it is, remove from object
        4. iterate over array, if any are false, return false
        5. else, return true
*/

function checkParantheses(s: string) {
    const openBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const closeBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    if (s.length >= 1) {
        const queue: string[] = [];

        for (let i = 0; i < s.length; i++) {
            if (openBrackets[s[i]]) {
                queue.push(s[i]);
                continue;
            }

            if (queue.length == 0) {
                return false;
            }

            if (closeBrackets[s[i]]) {
                if (closeBrackets[s[i]] !== queue.pop()) {
                    return false;
                }
            }
        }

        return queue.length == 0;
    }

    return false;
}

module.exports = checkParantheses;