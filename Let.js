//1. Variables defined with let cannot be Redeclared.

//2. Variables defined with let must be Declared before use.

//3. Variables defined with let have Block Scope.

//1.

/*let a = "ali";
let a = 10;*/
//that will no work but with var that can redeclare.

var b ="ali";
var b= 10;

//3.

//Variables declared inside a { } block cannot be accessed from outside the block:

{
    let x =10;
    var y =20;
}

//console.log(x,y);
//here in case of x, there is error but in case of var(y) we can access outside the block

// using we can solve problem redeclaring variables in Let cas:
let a = 10;
// Here a is 10
{
    let a = 20;
    // Here a is 20
}
// Here a is 10



//
var f = 10;
// Here a is 10
{
    var f = 20;
    // Here a is 20
}
{
    var f =30;
}
console.log(f);
// Here a is 30
