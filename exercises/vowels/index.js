// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Code with the help of codeium
// function vowels(str) {
//   let counter = 0
//   for (let char of str) {
//     if (/[aeiou]/i.test(char)) {
//       counter++
//     }
//   }
//   return counter
// }

// Teacher solution
// function vowels(str) {
//   let counter = 0
//   // let checker = 'aeiou' or better:
//   let checker = ['a', 'e', 'i', 'o', 'u']
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       counter++
//     }
//   }
//   return counter
// }

// Now using match method:
function vowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0
}

module.exports = vowels;
