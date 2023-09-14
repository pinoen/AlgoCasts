// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative solution
// function fib(n) {
//   let serie = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     serie.push(serie[serie.length - 2] + serie[serie.length - 1])
//   }
//   return serie[n]
// }

// Recursive solution:
// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 2) + fib(n - 1);
// }

// Shorter Recursive solution
// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 2) + fib(n - 1);
// }

// Recursive solution with memoization
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  return memo[n];
}

module.exports = fib;
