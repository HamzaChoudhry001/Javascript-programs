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
//console.log(array.push("D"));
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
 const array2 = [1,2,3];
 const merge = array.concat(array2);
 console.log(merge);//'A', 'B', 'C', 1, 2, 3

//slice() The slice() method creates a new array. does not remove elemnt
//When the slice() method is given two arguments, it selects array elements from the start argument, and up to (but not included) the end argument
//merge:  'A', 'B', 'C', 1, 2, 3
console.log(merge.slice(1,4)); //4index value will not included

