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
    if ((s.length <= 104) && (s.length >= 1)) {
        const storage = {
            c: 0,
            s: 0,
            b: 0,
        }

        for (let i = 0; i < s.length; i++) {
            switch (s[i]) {
                case '(': 
                    storage.c += 1;
                    break;
                case ')': 
                    if (storage.c == 0) {
                        return false;
                    }
                    storage.c -= 1;
                    break;
                case '{': 
                    storage.s += 1;
                    break;
                case '}': 
                    if (storage.s == 0) {
                        return false;
                    }
                    storage.s -= 1;
                    break;
                case '[': 
                    storage.b += 1;
                    break;
                case ']': 
                    if (storage.b == 0) {
                        return false;
                    }
                    storage.b -= 1;
                    break;
                default:
                    return false;
            }
        }
        
        if (storage.c === 0 && storage.s === 0 && storage.b === 0) {
            return true;
        }
    }

    return false;
}

module.exports = checkParantheses;