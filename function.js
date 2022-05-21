// code here can NOT use total
function sum(p1,p2){
    let total; // Local Variables
    total = p1+p2;
    return total;
}
//// code here can NOT use total

let x = sum(1,2); //Function is called
console.log(x); // same console.log(sum(1,2));

/*
// Local Variables
 Variables declared within a JavaScript function, become LOCAL to the function.

 Local variables can only be accessed from within the function.*/