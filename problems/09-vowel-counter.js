/*
Define a function called countVowels, that takes in a lowercased word parameter
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// 0. define a vowels variable with the string 'aeiou'
// 1. define a vowelCounter variable
// 2. define a function called countVowels that takes in a string parameter
// 3. iterate through the string parameter
//    a. if vowels is included in the string, increase vowelCounter by 1
//    b. if the string has no vowels, return 0.

function countVowels(str) {
  const vowels = 'aeiou';
  let vowelCounter = 0;
  for (i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (vowels.includes(char)) {
      vowelCounter += 1;
    }
  }
  return vowelCounter;
}

console.log(countVowels('bootcamp')); // => 3
console.log(countVowels('apple')); // => 2
console.log(countVowels('pizza')); // => 2
console.log(countVowels('try')); // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = countVowels;
