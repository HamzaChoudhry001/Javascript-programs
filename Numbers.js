// If you add two strings, the result will be a string concatenation:
let x = "4";
let y = "10";
console.log(x+y);

// If you add a number and a string, the result will be a string concatenation:
/*let x1 = 10;
let y1 = "20";
let j1 = "ali";
let z = x1 + y1 + j1;
console.log(z);*/

/*
// If you add first numbers and then string, the result will be first add sums and then concat:
let x1 = 10;
let y1 = 20;
let j1 = "ali";
let z = x1 + y1 + j1;
console.log(z);
*/
/*
// JavaScript will try to convert strings to numbers in all numeric operations:
//but a+b will not work, + operator to concatenate the strings.
let a = "20";
let b = "10";
console.log(a/b , a*b, a+b, a-b);*/

// JavaScript Numbers as Objects
let a = 100;
let b = new Number(199);
console.log(typeof(b),typeof(a));