const obj={
    "name":"ali",
    "age":10,
    "email":"abc@gmail.com",
    "address":"gujrat",
    "mark": function(){
        var marks=[45,50,23,54,54,54];
        var sum=0;
        var avg=0
        for(var x of marks){
           sum= sum+x;
           avg = sum/6
            
        }
        console.log(avg)
    }
    }

    
    // a)write a program which prints the name and email address
    console.log(obj.name+obj.email)
    // b)write a program which increment the 10 in the age 
   
    // c)write a program which prints the average of the marks=45,50,23,54,54,54 in a particular function in object obj 
    // and then prints its result
    console.log(obj.mark())
    
    // Q2:-write a function which perfroms the +,-,%,* in that function on two numbers
    // (*Note the number should be given in the function arguments)
    function ob(a,b)
    {
        var sum =a+b
        console.log(sum)
    }
   ob(1,2)
    