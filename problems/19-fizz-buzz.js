/*
Define a function fizzBuzz(max) that takes a number and prints every number from
0 to max (not inclusive) that is divisible by either 3 or 5, but not both.
*/

function fizzBuzz(max) {
  /*
    - iterate through each number until reaching max (exclusive) - for loop
    - if a number in the list is divisible by 3, print that number
    - if a number in the list is divisible by 5, print that number
    - if the number is divisible by both 3 and 5, dont print the number
    */

  for (i = 0; i < max; i++) {
    let a = i % 3 === 0;
    let b = i % 5 === 0;
    if (i % 3 === 0 && i % 5 === 0) {
      i++;
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
}

fizzBuzz(45); // prints out:
/*
3
5
6
9
10
12
18
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fizzBuzz;
