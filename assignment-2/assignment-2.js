'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  const number = prompt(`Enter number ${i + 1}:`);
  numbers.push(Number(number));
}

console.log(numbers);

// Check if a number is included in the array
const checkNumber = prompt('Enter a number to check:');

const isNumberIncluded = numbers.includes(Number(checkNumber));

console.log(
  `Is ${checkNumber} included in the numbers array? ${isNumberIncluded}`
);

// Remove the last number from the array
const removedNumber = numbers.pop();

console.log(`Removed number: ${removedNumber}`);
console.log('Updated numbers:', numbers);

// Sort the numbers array in ascending order
numbers.sort((a, b) => a - b);

// Display the sorted array
console.log('Sorted numbers:', numbers);
