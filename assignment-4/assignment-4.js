'use strict';

// Function to sort an array of numbers in ascending order
function sortArray(numbers) {
  const sortedNumbers = numbers.slice();
  sortedNumbers.sort((a, b) => a - b);
  return sortedNumbers;
}

const numbers = [5, 2, 9, 1, 5, 6];

console.log('Original array:', numbers);
console.log('Sorted array:', sortArray(numbers));
