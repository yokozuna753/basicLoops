/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

// 1. define a function firstHalf with a string parameter
// 2. iterate through HALF of the input string
// 3. return the first half of the characters

function firstHalf(str) {
  let arr = [];
  for (i = 0; i < str.length / 2; i++) {
    arr.push(str[i]);
  }
  return arr.join('');
}

console.log(firstHalf('academy')); // 'acad'
console.log(firstHalf('planet')); // 'pla'
console.log(firstHalf('sport')); // 'spo'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
