// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My first attempt solution:
/* function anagrams(stringA, stringB) {
  return stringA.split('').every(char => stringB.includes(char)) && stringA.length === stringB.length
} */

// Just add toLowerCase() 
/* function anagrams(stringA, stringB) {
  return stringA.toLowerCase().split('').every(char => stringB.toLowerCase().includes(char)) && stringA.length === stringB.length
} */


// Teacher solution with a helper function
/* function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
    }
  }

  return true;
} */

/* function buildCharMap(str) {
  const charMap = {}
  for (let char of str.replace(/[\W]/gi, "")) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  return charMap
} */

// Another way of mapping:
/* function buildCharMapCooler(str) {
  const charMap = {}
  for (let char of str.replace(/[^\w]/gi, "")) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap
} */

// My second solution:
/* function anagrams(stringA, stringB) {
  return stringA.replace(/\W/gi, "").split('').sort().join('') === stringB.replace(/\W/gi, "").split('').sort().join('')
} */

// Second teacher solution with sort method and another helper function
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str.replace(/\W/gi, "").split('').sort().join('')
}

module.exports = anagrams;
