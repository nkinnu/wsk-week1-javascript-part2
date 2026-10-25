'use strict';

// Function to sort an array of numbers in ascending or descending order
function sortArray(numbers, order) {
  const sortedNumbers = numbers.slice();

  if (order === 'asc') {
    sortedNumbers.sort((a, b) => a - b);
  } else if (order === 'desc') {
    sortedNumbers.sort((a, b) => b - a);
  }

  return sortedNumbers;
}

const numbers = [5, 2, 9, 1, 5, 6];

// Test the sortArray function
console.log('Original array:', numbers);
console.log('Sorted array (ascending):', sortArray(numbers, 'asc'));
console.log('Sorted array (descending):', sortArray(numbers, 'desc'));

// Test with another array
const otherNumbers = [3, 8, 4, 7, 2];
console.log('Other array:', otherNumbers);
console.log('Sorted other array (ascending):', sortArray(otherNumbers, 'asc'));
console.log(
  'Sorted other array (descending):',
  sortArray(otherNumbers, 'desc')
);
