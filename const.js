/*
// Variables defined with const cannot be Redeclared.

const a = 2; //wrong
const a;

// const variables must be assigned a value when they are declared:

const  name = "Jhon"; //correct

const nam; //
nam = "Jhon"; // Wrong

// Variables defined with const cannot be Reassigned.

x = "jhon";
const x; //wrong
*/

                                           //Constant Arrays

const array = ["a", "b", "c"];
// You can add an element:
array.push("D");
// You can create a constant array:
array[0] = "Aa";
//console.log(array);

                                          //Constant Objects

//You can change the properties of a constant object: 
const chair = {color:"Black", name:"my chair", size:"small"} 
chair.size = "Large";
//console.log(chair);

                                           // Block Scope
                                           
// Declaring a variable with const is similar to let when it comes to Block Scope.

//Reassigning an existing const variable in block is possible,

const n = 2;
{
    const n = 3;
}
{
    const n = 4;   // Allowed
}
//console.log(n);


                                       // Const Hoisting
// Variables defined with var are hoisted to the top and can be initialized at any time.

// Meaning: You can use the variable before it is declared:
/*
hoist = "ALi";
const hoist; // wrong
*/

hoist = "ALi";
var hoist; // allow

