'use strict';

const numbers = [];

let input = prompt('Enter a number (or type "done" to finish):');

// Collect numbers from the user until they type "done"
while (input !== 'done' && input !== null) {
  numbers.push(Number(input));
  input = prompt('Enter a number (or type "done" to finish):');
}

const evenNumbers = [];

// Filter even numbers from the array
for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

// Display the even numbers in the HTML
if (evenNumbers.length > 0) {
  document.getElementById('evenNumbers').textContent =
    `Even numbers: ${evenNumbers.join(', ')}`;
} else {
  document.getElementById('evenNumbers').textContent =
    'No even numbers were entered.';
}

document.getElementById('endMessage').textContent = 'End of program!';
