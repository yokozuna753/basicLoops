/*
Write a function reverb that accepts a word as an argument. The function should
return a new word where all letters that come after the last vowel (including
the vowel itself) are repeated at the end of the word. If the value passed in is
not a string, say someone passes in a number as an argument, then return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

/*
- iterate through the word
- get the index of the last vowel
- including the last vowel, cut until the end of the word
- concat the original word to the last step
- return null if the argument passed is not a string
*/

let vowels = "aeiouAEIOU";
let nums = '123456789'
function reverb(word) {

  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i];
    if (vowels.includes(char)) return word + word.slice(i);
    else if (nums.includes(char))return word;
  }
  return null;
}

console.log(reverb("running")); // runninging
console.log(reverb("FAMILY")); // FAMILYILY
console.log(reverb("trash")); // trashash
console.log(reverb("DISH")); // DISHISH
console.log(reverb("197393")); // 197393
console.log(reverb(197393)); // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverb;
