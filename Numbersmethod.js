// Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).

// But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
 //toString() Method
//  The toString() method returns a number as a string.

//  let x = 10;
//  console.log(typeof(x));
//  let y = x.toString();
//  console.log(typeof(y));

//  The toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals:

// let t = 4.94342;
// console.log(t.toFixed(0));
// console.log(t.toFixed(1));
// console.log(t.toFixed(2));

// The parseInt() Method
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

let w = "10";
let r = "30";
let sum = w+r;
console.log(sum);

let s = parseInt(w);
let ss= parseInt(r);
let tot= s + ss;

console.log(tot);