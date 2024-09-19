/*
Define a function getLastVowel that takes in a string parameter and returns the
last vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

/*
- initialize a vowels variable
- define a function getLastVowel that takes in a string parameter
- iterate through the string
- if the string contains a vowel
    a.return the last vowel
    b. return null
*/

function getLastVowel(str) {
  let vowels = "aeiou";
  for (let i = str.length - 1; i >= 0; i--) {
    let char = word[i];
    if (vowels.includes(char)) {
      return char + "b" + char;
    }
  }
  return null;
}

console.log(getLastVowel("battery")); // 'e'
console.log(getLastVowel("tunnel")); // 'e'
console.log(getLastVowel("dog")); // 'o'
console.log(getLastVowel("conventional")); // 'a'
console.log(getLastVowel("rhythm")); // null
console.log(getLastVowel("try")); // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getLastVowel;
