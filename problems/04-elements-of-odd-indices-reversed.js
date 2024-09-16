/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

// 1. define a function elementsOfOddIndicesReversed with a string parameter
// 2. iterate through the odd indices of the string
// 3. reverse the order of the indices
// 4. return the letters in each odd index

function elementsOfOddIndicesReversed(str) {
  let arr = [];
  for (i = 1; i < str.length; i += 2) {
    arr.push(str[i]);
  }
  arr.reverse();
  return arr.join('');
}

console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
console.log(elementsOfOddIndicesReversed('planet')); // 'tnl'
console.log(elementsOfOddIndicesReversed('sport')); // 'rp'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
