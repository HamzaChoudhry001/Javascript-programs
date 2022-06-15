// Use pop() or shift() for deletion
//Use push() or unshift() for insertion



// Converting Arrays to Strings
const array = ["A","B","C"];
const string = array.toString();
// console.log(array);
//console.log(string);//The toString() method returns an array as a comma("") separated string:
// join()
//console.log(array.join("*"));//A*B*C It behaves just like toString(), but in addition you can specify the separator:

// Popping and Pushing
//push at last 
// let l = array.push("D");
// console.log(l);
//console.log(array);//now 'A', 'B', 'C', 'D'
//pop at last
//console.log(array.pop());
//console.log(array);//now 'A', 'B', 'C'

 //Shifting Elements
//Shifting is equivalent to popping, but working on the first element instead of the last.
// shift() method removes the first array element and "shifts" all other elements to a lower index.
// console.log(array.shift()); //A remove
// console.log(array);//Output:B,C  // B at index0 and C at index1
// console.log(array.length);


//unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// console.log(array.unshift("D")); //'D', 'A', 'B', 'C'
// console.log(array);

// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:
//  const array2 = [1,2,3];
//  const merge = array.concat(array2);
//  console.log(merge);//'A', 'B', 'C', 1, 2, 3

//slice() The slice() method creates a new array. does not remove elemnt
//When the slice() method is given two arguments, it selects array elements from the start argument, and up to (but not included) the end argument
//merge:  'A', 'B', 'C', 1, 2, 3
// console.log(merge.slice(1,4)); //4index value will not included

// Splicing  add value
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1,2,"Leon")//[ 'Banana', 'Leon', 'Mango' ] //add at index 1 and at index 2remove
// console.log(fruits);

//Slice //piece remove thwn insert to other aeeay
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//const citrus = fruits.slice(2);
console.log(fruits.slice(1,3));// [ 'Orange', 'Lemon' ] 3 not include 
console.log(fruits.slice(3)); //[ 'Apple', 'Mango' ]-->from 3index to till end slice array
console.log("old: "+fruits);

const f = ["Banana", "Orange", "Apple", "Mango"];
f[5] = "Kiwi";//[ 'Banana', 'Orange', 'Apple', 'Mango', <1 empty item>, 'Kiwi' ]
console.log(f);