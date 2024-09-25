function flattenArray(array) {
    return array.flat(Infinity);
}

const flatArray = flattenArray([1, [2, [3, [4]], 5]]);
//console.log(flatArray); 

function findMissingNumber(array){
    const n = array.length + 1; 
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = array.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

const missingNumber = findMissingNumber([1, 2, 4, 5, 6]); 

console.log(missingNumber);

function longestSubstringWithoutRepeatingCharacters(s) {
    let seen = new Set(); 
    let maxLength = 0;
    let left = 0; 
    
    for (let right = 0; right < s.length; right++) {
        
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb")); 
console.log(longestSubstringWithoutRepeatingCharacters("bbbbb"));
