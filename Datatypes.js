/*
// JavaScript variables can hold different data types: numbers, strings, objects and more:

 let length = 16; 
 let height = 20;                              // Number
 let lastName = "Johnson";                      // String
// let x = {firstName:"John", lastName:"Doe"};    // Object

//Example1
console.log(length + height + lastName);

//Example2

console.log(lastName + length + height);
// In the first example, JavaScript treats 16 and 20 as numbers, until it reaches "Volvo".

// In the second example, since the first operand is a string, all operands are treated as strings.

*/

//JavaScript Types are Dynamic
//This means that the same variable can be used to hold different data

let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
//console.log(x);

//JavaScript Booleans
//Booleans are often used in conditional testing.
let k = 10;
let l = 20;
let j = 10;
//console.log((k==l),(k==j));

/*
//JavaScript Arrays
let person = ["ali" , "hamza" , "haider"];
console.log(person);
person[2] = "Kashif"; //index 2 update
console.log(person);
person[3] = "Ahmed"; //add new data at index 3
console.log(person);
*/

/*
//JavaScript Objects
let car = {name:"Mercedes", Model:"2022", Color:"Blue"}
console.log(car);
car.Color = "Black"; //change property
console.log(car);
car.owner = "Ali"; // add new element
console.log(car);
*/


//The typeof Operator

//You can use the JavaScript typeof operator to find the type of a JavaScript variable.
let xy = 8; // return number
let t = "s"; // return string
console.log(typeof xy, typeof t);