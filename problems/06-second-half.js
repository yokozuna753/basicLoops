/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/

let secondHalf = function (str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    if (str.length % 2 !== 0 && i > Math.floor(str.length / 2)) {
      // console.log(char);
      newStr = char + newStr;
    }
    if (str.length % 2 === 0 && i >= str.length / 2) {
      newStr = char + newStr;
    }
  }
  return newStr;
};

console.log(secondHalf("academy")); // 'emy'
console.log(secondHalf("planet")); // 'net'
console.log(secondHalf("sport")); // 'rt'
console.log(secondHalf("fasty"));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;
