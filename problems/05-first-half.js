/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

let firstHalf = function(str){
  let newStr = '';
  for(let i = 0; i < str.length / 2; i++){
    let char = str[i];
    newStr += char;
  }
  return newStr;
}

console.log(firstHalf('academy')); // 'acad'
console.log(firstHalf('planet')); // 'pla'
console.log(firstHalf('sport')); // 'spo'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
