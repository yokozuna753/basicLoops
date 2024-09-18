/*
Define a function getFirstVowel that takes in a string parameter and returns the
first vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.


Vowels are the letters "a", "e", "i", "o", "u".
*/
/* 
1. declare a vowels variable
2. declare a function getFirstVowel that takes in a string parameter
3. iterate through the string parameter
4. declare a variable that states what letter the for loop is at in the string
5.if the string includes a vowel:
  a. return the first instance of a vowel if "i" is a vowel
  b. return null
*/

function getFirstVowel(str) {
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (vowels.includes(char)) {
      return char;
    }
  }
  return null;
}

console.log(getFirstVowel("battery")); // 'a'
console.log(getFirstVowel("tunnel")); // 'u'
console.log(getFirstVowel("dog")); // 'o'
console.log(getFirstVowel("conventional")); // 'o'
console.log(getFirstVowel("rhythm")); // null
console.log(getFirstVowel("try")); // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getFirstVowel;
