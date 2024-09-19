/*
Define a function called `validHexCode` that returns `true` if its string
parameter is a valid hex code.

A valid hex code must begin with a pound key `#` followed by 6 characters.
Each character must be a digit from 0-9 or an alphabetic character from A-F.
All alphabetic characters may be uppercase or lowercase.
*/

/*
the function iterates through the input string
1. the first character in the string must be "#"
2. "#" must be followed by 6 characters
3. each character must be a number from 0-9 //* or letter from a-f(upper or lower case)
*/
//!return a boolean if the string is a valid hex code

function validHexCode(str) {
  let valid = "abcdefABCDEF0123456789";
  if (str.length !== 7) return false;
  if (!str.startsWith("#")) return false;

  for (i = 1; i < str.length; i++) {
    let char = str[i];
    if (!valid.includes(char)) {
      return false;
    }
  }
  return true;
}
console.log(validHexCode("#123456")); // true
console.log(validHexCode("!123456")); // false
console.log(validHexCode("#123")); // false
console.log(validHexCode("#1234567")); // false
// console.log(validHexCode("1234567"));  // false
// console.log(validHexCode("123456"));   // false
// console.log(validHexCode("#ABCDEF"));  // true
// console.log(validHexCode("#abcDEF"));  // true
// console.log(validHexCode("#88ef29"));  // true
// console.log(validHexCode("#222!E4"));  // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
try {
  module.exports = validHexCode;
} catch {}
