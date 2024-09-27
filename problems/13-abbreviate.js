/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

let vowels = "aeiouAEIOU";

function abbreviate(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!vowels.includes(char)) newStr += char;
  }
  return newStr;
}

console.log(abbreviate("wonderful")); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
