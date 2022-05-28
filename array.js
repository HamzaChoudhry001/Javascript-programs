// An array is a special variable, which can hold more than one value:

// const cars = ["Saab", "Volvo", "BMW"];

// You can also create an array, and then provide the elements:

// Example
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:

// Example
// const cars = new Array("Saab", "Volvo", "BMW");
// The two examples above do exactly the same.

// There is no need to use new Array().


// const person = ["hamza", 21 , "A" , "Male"];
// console.log(person.length);
// person[1] = 30;
// console.log(person[1]);
// person.push("al");
// //console.log([person]);
// console.log(person[4]);

// Object:
//  const person = {firstName:"John", lastName:"Doe", age:46};
//  console.log(person.firstName);

var tot = 0;
var num = [10 , 20 , 30 , 40 , 50];
for(var i=0; i<num.length; i++){
   
    tot = tot + num[i];
    console.log(tot);
}
console.log("total:" , tot);
