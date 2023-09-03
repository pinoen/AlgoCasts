// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My first attemp solution:
/* function reverseInt(n) {
  // This is needed to get a positive or negative result according to the input (the same in one line in the return)
  // let aux;
  // if (n >= 0) {
  //   aux = 1
  // } else {
  //   aux = -1
  // }
  return parseInt(n.toString().split('').reverse().join('')) * (n >= 0 ? 1 : -1)
} */

// First attemp using Math.sign()
function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

module.exports = reverseInt;
