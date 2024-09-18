/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// 0. define a vowels variable
// 1. define a function hasVowel that takes in a string parameter
// 2. iterate through the the string parameter
//  a. if the vowels variable includes at least one vowel in the string, return true
//  b. if not return false

function hasVowel(str) {
  let vowels = 'aeiou';
  for (i = 0; i < str.length; i++) {
    if(vowels.includes(str.charAt(i))){
      return true;
    }
  }
  return false;
}

console.log(hasVowel('dog')); // => true
console.log(hasVowel('conventional')); // => true
console.log(hasVowel('rhythm')); // => false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
