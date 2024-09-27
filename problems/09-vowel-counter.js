/*
Define a function called countVowels, that takes in a lowercased word parameter
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
*/

let vowels = 'aeiou'

let countVowels = function(word){
  let vowelCount = 0;
  for(let i = 0; i < word.length; i++){
    let char = word[i];
    // console.log(char);
    if(vowels.includes(char)) vowelCount += 1
  }
  return vowelCount;
}

console.log(countVowels('bootcamp')); // => 3
console.log(countVowels('apple')); // => 2
console.log(countVowels('pizza')); // => 2
console.log(countVowels('try')); // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = countVowels;
