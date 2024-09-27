/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

let elementsOfOddIndicesReversed = function (str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (i % 2 !== 0) {
      newStr = char + newStr;
      console.log('char ====>',char, 'newStr====>', newStr);
    }
  }
  // return newStr;
};

console.log(elementsOfOddIndicesReversed("academy")); // 'mdc'
console.log(elementsOfOddIndicesReversed("planet")); // 'tnl'
console.log(elementsOfOddIndicesReversed("sport")); // 'rp'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
