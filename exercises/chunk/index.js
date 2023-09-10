// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Bard solution:
/* function chunk(array, size) {
  const subarrays = [];
  for (let i = 0; i < array.length; i += size) {
    subarrays.push(array.slice(i, i + size));
  }
  return subarrays;
} */

// Teacher solution:
function chunk(array, size) {
  const chunks = []
  for (let element of array) {
    const last = chunks[chunks.length - 1]
    if (!last || last.length === size) {
      chunks.push([element])
    } else {
      last.push(element)
    }
  }

  return chunks
}

module.exports = chunk;
