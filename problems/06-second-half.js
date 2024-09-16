/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/

function secondHalf(str) {
  // 1. define a function secondHalf with a string parameter
  // 2. iterate through HALF of the input string
  // define a variable that will equal the second half of the string
  // 3. return the second half of the characters

  let partOne = Math.ceil(str.length / 2);
  let partTwo = str.slice(partOne);

  for (i = 0; i < str.length; i++) {}
  return partTwo;
}

console.log(secondHalf('academy')); // 'emy'
console.log(secondHalf('planet')); // 'net'
console.log(secondHalf('sport')); // 'rt'
console.log(secondHalf('fasty'));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;
