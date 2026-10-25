'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

const vegetables = [];

console.log(fruits);

console.log('Length of fruits: ' + fruits.length);

console.log('Element at index 2: ' + fruits[2]);

console.log('Last element of fruits: ' + fruits[fruits.length - 1]);

let count = 0;

// Prompt the user to enter 3 vegetables and store them in the vegetables array
while (count < 3) {
  const vegetable = prompt('Enter a vegetable:');
  vegetables.push(vegetable);
  count++;
}

console.log(vegetables);

console.log('Length of vegetables: ' + vegetables.length);
