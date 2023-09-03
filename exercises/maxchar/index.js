// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// My first attemp solution:
/* function maxChar(str) {
  const obj = {}
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char]++
    }
  }

  let winner;

  for (let value in obj) {
    if (obj[value] > 1) {
      winner = value
    }
  }

  return winner || str
} */

// Teacher solution:
function maxChar(str) {
  const chars = {}
  for (let char of str) {
    if (chars[char]) {
      chars[char]++
    } else {
      chars[char] = 1
    }
  }

  let max = 0
  let maxChar = ''

  for (let value in chars) {
    if (chars[value] > max) {
      max = chars[value]
      maxChar = value
    }
  }

  return maxChar
}

module.exports = maxChar;
