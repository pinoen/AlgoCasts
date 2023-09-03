// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My first attemp solution
/* function palindrome(str) {
  return str.split('').reverse().join('') === str
} */

// Second teacher solution using reverse method:
/* function palindrome(str) {
  return str.split('').reverse().every((char, i) => char === str[i])
} */

// Second teacher solution:
function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - i - 1])
}

module.exports = palindrome;
