/**
 * Write a function named firstUniqChar that takes a string (s) as input and returns 
 * the index of the first non-repeating character. If no such character exists, return -1.
 *
 * Problem: Given a string s, find the first non-repeating character and return its index.
 * If no such character exists, return -1.
 *
 * Examples:
 * - firstUniqChar("leetcode") → 0
 * - firstUniqChar("loveleetcode") → 2  
 * - firstUniqChar("aabb") → -1
 */

const firstUniqChar = (s) => {
    let letterFreq ={};
    for(const char of s){
        if(letterFreq[char]){
            letterFreq[char] ++;
        }else{
            letterFreq[char] =1;
        }
    }
    for (let i =0;i<s.length;i++){
        const letter = s[i];
        if(letterFreq[letter]=== 1){
            return i;
        }
    }
    return -1;
};
console.log(firstUniqChar('leetcode'));

// Export the function for testing
module.exports = { firstUniqChar };

// Example usage (commented out to avoid interference with tests)
// console.log(firstUniqChar("leetcode")); // → 0
// console.log(firstUniqChar("loveleetcode")); // → 2
// console.log(firstUniqChar("aabb")); // → -1
