//-------------------------------------------------Array Iteration
// Array iteration methods operate on every array item.

//foreach //no return value

// that iterate the each element of an array. forEach() method calls a function (a callback function) once for each array element.

/*const array = [10,35,90,44,56]
array.forEach(Myfunction)
function Myfunction(value,index,arr) //1st arrgument contain array element, 2nd index and 3rd contaon array itself
{ 
    console.log(index+"="+ value)
}*/

//for loop same 
/*for(var i=0; i<array.length; i++){
    console.log(i+" "+array[i])
}*/


// map()

// same as foreach but will create new array and it will not the original array //taht return value
/*const array = [10,35,90,44,56,70,41]
const array2 = array.map(Myfun)
function Myfun(value,index,arr) //output: [11, 36, 91, 45,57, 71, 42]
{ 
    return value+1
}
console.log(array2)*/


//filter() //return value

//create new array, if condition is ok then return value else no

/*const array = [10,35,90,44,56,70,41]
const array2 = array.filter(Myfun)
function Myfun(value,index,arr) 
{ 
     return value > 40; //[ 90, 44, 56, 70, 41 ]
    //console.log(value > 40)
}
 console.log(array2)*/


//  reduce()
//runs a function on each element to produce a single value
// contain 4 parameters .
//create new array
//work left to right

/*const array = [10,35,90,44,56,70,41]
const array2 = array.reduce(Myfun)
function Myfun(sum,value,index,arr) 
{ 
     return sum+value; //Sum is: 346
    
}
 console.log(array2)*/


//  every()

//return value pass if every element satify the condition 
/*const array = [10,20,21,22]
let array2 = array.every(Myfun)
function Myfun(value,index,arr) 
{ 
     //return value>18; //False:  bcz 10 element did not satisfy the condition
     console.log(value>18)
}
 //console.log(array2)*/


//  some()

//return value pass if (some) element satify the condition 
// const array = [10,20,21,22]
// let array2 = array.some(Myfun)
// function Myfun(value,index,arr) 
// { 
//      return value>18; //true:  bcz 20,21,22 element satisfy the condition but 10 n0t
//     //console.log(value>18)
// }
//   console.log(array2)

// indexOf()
// The indexOf() method searches an array for an element value and returns its position. first occurrence
// var fruit = ["Apple","Banana","Orange","Mango","Apple","Watermelon"]
// var arr = fruit.indexOf("Banana")+1;//2 Note: The first item has position 0, the second item has position 1, and so we add 1.
// console.log(arr);

// lastIndexOf()
// returns the position of the last occurrence of the specified element.
// var fruit = ["Apple","Banana","Orange","Mango","Apple","Watermelon"]
// var arr = fruit.lastIndexOf("Apple")+1; //position: 5 but index: 4
// console.log(arr);

// includes()
// This allows us to check if an element is present in an array (including NaN, unlike indexOf).
// var fruit = ["Apple","Banana","Orange","Mango","Apple","Watermelon"]
// var arr = fruit.includes("Apple"); //true
// console.log(arr);


// find()-->jo element phly condition pass kry ga wohi sirf new array main insert hoga

// const numbers = [4, 9, 16,19, 25, 29];
// let arr = numbers.find(Myfunction);
// function Myfunction(value,index,arr){
//     return value>18;
// }
// console.log(arr);//19--> jo element phly condition pass kry ga wohi sirf new array main insert hoga


// findIndex()
// const number = [4, 9, 16,19, 25, 29];
// let ar = number.findIndex(Myfunction);
// function Myfunction(value,index,arr){
//     return value>18;
// }
// console.log(ar);//3
//19 ka index 3--> jo element phly condition pass kry ga wohi (index )sirf new array main insert hoga


//Array.from()
// that hold value .string elemnt ko array bna dy ga

// var h = Array.from("Hi how are you");
// console.log(h); 
//output
/*[
    'H', 'i', ' ', 'h',
    'o', 'w', ' ', 'a',
    'r', 'e', ' ', 'y',
    'o', 'u'
  ]*/

// Keys()--> return keys/ hold keys

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (let x of keys) {
//     console.log(x);
// }
// for (var i = 0; i < fruits.length; i++) {
//     console.log(i);
// }
//output//
// [0]
// [1]
// [2]
// [3]

//entries()--> The entries() method returns an Array Iterator object with key/value pairs:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();
// for (var i of f) {
//     console.log(i);
// }
//output
// [ 0, 'Banana' ]
// [ 1, 'Orange' ]
// [ 2, 'Apple' ]
// [ 3, 'Mango' ]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//var s = fruits.fill("!001",1,3);//[ 'Banana', '!001', '!001', 'Mango' ]
console.log(s);


// array.copyWithin(target, start, end)
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// var s = fruits.copyWithin(2,0,2)
// console.log(s);