"use strict";
// Tests for Equality and inequality with strings
//Equality Test
let student = "Fariha";
console.log(student == "Fariha");
// Inequality Test with lowercase
console.log(student !== "fariha");
//Numerical Tests involving equality and inequality,greater than and less than , greater than or less than 
// or equal to,and less than or equal to
let number = 25;
console.log(number == 25);
console.log(number !== 25);
console.log(number > 15);
console.log(number < 10);
console.log(number >= 20);
console.log(number <= 15);
// Tests using "and" and "or" operators ("&& and |)
let a = 15;
let b = 10;
// We use "and" operator
console.log(`\nHere we are using 'and' and 'or' operators\n`);
console.log(a > 10 && b < 5);
//Here we use "or" operator
console.log(a > 7 || b < 10);
//Test whether the item is an array
let myList = ['Mahnoor', 'Rozina', 4, 9, 7];
let myName = "Fariha";
console.log("\n Now we are checking whether the item is an array or not\n");
console.log(Array.isArray(myList));
console.log(Array.isArray(myName));
