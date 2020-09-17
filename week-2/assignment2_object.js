/*

In JavaScript, there are many different sets of syntax for creating objects. 
In the code below, function parameters are encapsulated into an object, try using at least two ways to create a proper object as a parameter of the calculate function.


    For example, if we have an add function like this: 
        function add(args){ 
                return args.n1+args.n2; 
        } 

    We can call it by passing an object created by JSON literal:                 
    
    add({n1:3, n2:4}); // your first way 

    You should apply constructor or class as another way to create a proper object. 
    
        add(用類別或建構式產生的物件); // your another way 

*/

function calculate(args){ 
    let result; 
    if(args.op==="+"){ 
        result=args.n1+args.n2;
     }else if(args.op==="-"){ 
        result=args.n1-args.n2; 
     }else{ 
        result="Not supported"; 
     } 
    return result; 
} 

// 1st Way: general object

const arguments ={
    op: '+',
    n1: 3,
    n2: 4
};

console.log(calculate(arguments));


// 2nd Way: by class & contructor

class Arguments{
    constructor(op, n1, n2){
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}
const numberList = new Arguments('-', 3, 4);
console.log(calculate(numberList));

// Try to call calculate function correctly 

