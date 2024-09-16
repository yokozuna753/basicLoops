/*
Define a function logBetween that takes in two number parameters. The first
number parameter represents a low number and the second represents a high
number. The function should print every number from the low number to the
high number, inclusive. Inclusive means that the range includes the low and
high numbers.
*/

// 1. define a function logBetween
// 2. set 2 parameters, a low number and a high number
// 3. iterate from the low number to the high number, they are both included
// 4. return the range between the two numbers (inclusive)

function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i++) {
    console.log(i);
  }
}

logBetween(-1, 2);
/* prints out:
-1
0
1
2
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetween;
