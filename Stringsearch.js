// JavaScript Search Methods


// String indexOf()
// The indexOf() method returns the index of (the position of) the first occurrence (is) of a specified text in a string:
let a = "This is Pakistan Habibis";
console.log(a.indexOf("is"));
console.log(a.indexOf("is",8));



// String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
console.log(a.lastIndexOf("is"));
/* The lastIndexOf() methods searches backwards (from the end to the beginning), 
meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.*/
console.log(a.lastIndexOf("is",9));

//search()
/*
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions)*/


// match()

let b = "this is car is IS iS Is";
console.log(b.match(/is/g));
//the match() method will return only the first match in the string swithout g.
console.log(b.match(/is/gi)); // match every lower upper case

// includes()
/*
//The includes() method returns true if a string contains a specified value.
let c = "I am hamza and";
console.log(c.includes("hamza")); //true
console.log(c.includes("Hamza")); //false
console.log(c.includes("hamza", 11)); //false start at 11th position*/

// String startsWith()
// The startsWith() method returns true if a string begins with a specified value, otherwise false:
let d = "Hi How are you";
console.log(d.startsWith("Hi")); //true
console.log(d.startsWith("are")); //false

// String endsWith()
let m = "Hi How are you";
console.log(m.endsWith("you")); //true
console.log(m.endsWith("are")); //false\

