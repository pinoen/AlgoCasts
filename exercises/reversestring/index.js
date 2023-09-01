// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// My first attempt solution:
/* function reverse(str) {
  return str.split('').reverse().join('')
} */

// My alternative second attempt solution:
/* function reverse(str) {
  let alt = ''
  for(let i=str.length-1; i>=0; i--){
    alt += str[i]
  }
  return alt;
} */

// Teacher second solution (recommended use of for loop):
/* function reverse(str) {
  let reversed = ''
  for(let char of str){
    reserved = char + reserved
  }
  return reversed
} */

// Teacer third solution (cleverest one to let the interviewer see what you know):
function reverse(str) {
  // debugger example using the terminal
  // debugger;
  return str.split('').reduce((rev, char) => char + rev)
}

// For use of the debugger statement it is required to call the function
// reverse('emilio')

module.exports = reverse;
