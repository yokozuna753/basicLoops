/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

/*
- write a function that takes in a string parameter
- declare a vowels variable
- iterate through the string
- check if the string contains any vowels
- return the string without all the vowels
*/

function abbreviate(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(abbreviate("wonderful")); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
