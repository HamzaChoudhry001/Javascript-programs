/*// Objects are variables too. But objects can contain many values.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

//Accessing Object Properties
console.log(person.lastName);
//or
const lname = person["lastName"];
console.log(lname);

*/

// Object Methods
// Objects can also have methods.

// Methods are actions that can be performed on objects.

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    array : ["Ali" , 12],
    //method
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    //another object in person object
    house : {name: "k2" , no: 234}
  };
  console.log(person.fullName());
  console.log(person.array[1]);
  console.log(person.house.no);
  
