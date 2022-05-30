const obj={
    "name":"ali",
    "age":10,
    "email":"abc@gmail.com",
    "address":"gujrat",
    "avg" : 45+50+23+54+54+54/6,
    "marks": function(){
         
        return this.avg;
    }
    }
    
    // a)write a program which prints the name and wmail address
    console.log("name is: ",obj.name," ", "Email is: ",obj.email)
    // b)write a program which increment the 10 in the age 
    var umer = obj.age+=10;
    console.log("age: ",umer)
    // c)write a program which prints the average of the marks=45,50,23,54,54,54 in a particular function in object obj and then prints its result
    console.log("Avg: ",obj.marks());
    
    // Q2:-write a function which perfroms the +,-,%,* in that function on two numbers
    // (*Note the number should be given in the function arguments)
    function task(val1,val2){
        var num1 = val1;
        var num2 = val2;
        var sum=val1 + val2;
        var sub=val1 - val2;
        var mul=val1 * val2;
        var mod=val1 % val2;
        console.log("sum is :",sum);
        console.log("subtract is :",sub);
        console.log("multiply is :",mul);
        console.log("mod is :",mod);
        
    }
    task(4,3);