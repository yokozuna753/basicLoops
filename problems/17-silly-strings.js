/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/

/*
- declare a vowels variable
- function sillyString accepts a word as an argument
- iterate through the word parameter
- if a vowel  is encountered at an index
    - return everything before the vowel + "b" + everything after the vowel

*/
let vowels = ["a", "e", "i", "o", "u"];
function sillyString(word) {
  let newWord = "";
  for (i = 0; i < word.length; i++) {
    let char = word[i];
    if (vowels.includes(char)) {
      newWord += char + "b" + char;
    } else {
      newWord += char;
    }
  }
  return newWord;
}
console.log(sillyString("stop"));

// console.log(sillyString("stop")); // stobop
// console.log(sillyString("that")); // thabat
// console.log(sillyString("can")); // caban
console.log(sillyString("cats")); // cabats
console.log(sillyString("italy")); // ibitabaly
console.log(sillyString("scooter")); // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
