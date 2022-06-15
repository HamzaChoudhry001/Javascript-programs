const a = [
    { name: "ali", age: 20 },
    { name: "shah", age: 2031 },
    { name: "arslan", age: 2032 },
    { name: "ajmi", age: 2034 },
    { name: "shah", age: 2033 },

]


// note:
// a)Identify the piece of code is it array or object.
//console.log(Array.isArray(a))//true array


// b)print out the names which is named as shah

// let x=a.filter(myfun)
// function myfun(value) {
//     if (value.name == "shah") {
//         console.log(value.name)
//     }
// }
// output:
// shah
// shah
// c)calculate the maximum number of age in this piece of code

// function myArrayMax(arr) {
//     let max = 0;
//     for (var i =0; i<arr.length; i++){
//         if(arr[i].age>max){
//             max=arr[i].age
            
//         }       
//     }
//     console.log("Maximun age:"+max) //2034
//    }
//    myArrayMax(a)


// d)re arrange the array in assending as well as dessending order

 //sorted assending 
 a.sort(function(x,y){
    return x.age - y.age
    
 })
console.log(a)

//Desending order 
a.sort(function(x,y){
    return y.age - x.age
    
 })
console.log(a)
/*Output:
[
  { name: 'shah', age: 2034 },
  { name: 'ajmi', age: 2033 },
  { name: 'arslan', age: 2032 },
  { name: 'shah', age: 2031 },
  { name: 'ali', age: 20 }
]*/


// e)write a object and push this object into this piece of code

// let car = { name: "Honda", age: "1978" }
// a.push(car)
// console.log(a)
//output:
/*[
    { name: 'shah', age: 2034 },
    { name: 'ajmi', age: 2033 },
    { name: 'arslan', age: 2032 },
    { name: 'shah', age: 2031 },
    { name: 'ali', age: 20 },
    { name: 'Honda', age: '1978' }
  ]*/

// f)write a piece of code and changes the age where index is 3

// a[3].age=33;
// console.log(a);

/*Output: 
[
  { name: 'shah', age: 2034 },
  { name: 'ajmi', age: 2033 },
  { name: 'arslan', age: 2032 },
  { name: 'shah', age: 33 }, // here age is changed
  { name: 'ali', age: 20 }
]/*

 
// g)write a code which removes the two idexes from the piece of code
/*
console.log(a.length)// before: 6
a.shift()
a.pop()
console.log(a)
console.log(a.length)// after: 4
*/

/*output:
[
  { name: 'ajmi', age: 2033 },
  { name: 'arslan', age: 2032 },
  { name: 'shah', age: 2031 },
  { name: 'ali', age: 20 }
]*/
