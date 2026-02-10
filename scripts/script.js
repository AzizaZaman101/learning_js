//printing a message in js
console.log("Hello, world!");
console.log("this is my js file");


//; is optional but a good practice to use to prevent errors
//assign a variable and print it
var a= "I am a learner";
console.log(a);



//let is the preffered way to declare variables in js now
let variableName = "I am using let";
console.log(variableName);
variableName = "let allows reassignment";
console.log(variableName);



//const is used to declare variables that won't be changed further
const contact ="here is my number 1234567890";
console.log(contact);
//contact = "trying to change const"; //this will give an error


// ctrl +/ to comment or uncomment a line of code


//string
//you can use single or double quotes or backticks to declare strings
const exampleString = "This is a string";
console.log(exampleString);

const anotherstring = 'this is also a string';
console.log(anotherstring);


//backtick is on the left side of 1 on the keyboard
//it is a complex string type that allows multi-line strings and string interpolation
//it allows to embed different variable or xpressions inside a string
//Whenever you want something more dynamic, use backticks
const name = 'John';
const backtickString =`Helloooo, ${name}, welcome!`;

console.log(backtickString);

//here we are using $ to get the result of an expression inside a string
const integer_backtick= `the sum of 2 and 3 is ${2+3}`;
console.log(integer_backtick);


//you can get the typeof a variable
console.log(typeof integer_backtick);

//numbers - untyped - here no need to declare int or float
let number1=56;
let number2= 4.5;
console.log(number1, number2);
console.log(number1<=number2);
console.log(typeof number1, typeof number2);

const sum = number1 + number2;
console.log("the sum is ", sum);

//computational error, when you try to compute with strings and numbers, then you are going to get NaN (not a number)
let wrongSum = number1/number1;
console.log(wrongSum);  
console.log(typeof wrongSum); //this will be number because of computational error


//boolean - true or false
let iscool= true;
console.log(iscool);
console.log(typeof iscool);

const age=56;
console.log(age<90); //this will return true

if(iscool)
{
    console.log("Hey, you are really cool!");
}
else
{
    console.log("Hello...how you doin'!");
}



//null - value unknown/empty
//it is an assignment value, to represent no value
//unassigned variable is declared to be undefined, in js, but if you want to explicitly say that a variable has no value, use null
let whatever = null;
whatever = "now assigned";

let emptyValue = null;
console.log(typeof emptyValue); 
//this is a known js bug, typeof null should return null, but it returns object
//this will return object, this is a js bug



//undefined - if a variable is declared but no assigned any value, it is undefined
//to check if the variable is assigned or not
// let notAssigned = undefined; is not a recommended approach
let notAssigned;
console.log(notAssigned);


//all data types in js is primitive data types except object
//object - used to store collections of data in more complex entities
const person = {
    name: "Aziza",
    age: 56,
    ismarried: false,
}
console.log(person);
//using dot notation to access object properties
console.log(person.name);
console.log(typeof person.age);



//array - a special type of object to store ordered collection of data
//here we can access the elements using their index
const arr=[1,2,3,4,5];
console.log(arr);
console.log(typeof arr); //this will return object because array is a special type of objects



//date object
const date = new Date();
console.log(date);
console.log(typeof date); //this will return object because date is also a special type of objects


//statically typed languages vs dynamically typed languages
//in statically typed languages, you have to declare the data type of a variable while declaring it
//in dynamically typed languages like js, the data type is determined at runtime based on the assigned value
let message = "Hello";
console.log(message);
message = 42; //this is allowed in js
console.log(message);



const n=12;
const n1=13;





//loose equality operator
//doesn't use data type checking, only checks values
//unexpected results may occur
console.log(n==n1);  //it will show if true or false
console.log(n!=n1);  //it will show if true or false
//but it gives true even if the the data types are different but values look similar
console.log(2=="2"); //true
console.log(''=='0'); //false
console.log(0==''); //true
console.log(false=='false'); //false
console.log(false==0); //true







//strict equality operator --> used more often in js than regular equality check
//it checks both value and data type --> returns true only if both are same
//less bugs
//mostly predictable
console.log(2===2);
//strict inequality operator
console.log(2!==3);
console.log(2==="2"); //false because data types are different


//logical operators 
//AND operator &&
//OR operator ||
//NOT operator !


 //conditional statements
 const age1=20;

    if(age1<18)
    {
        console.log("You can't enter the book club!");
    }
    else if(age1===18)
    {
        console.log("You just got access to the book club!");
    }
    else
    {
        console.log("Welcome to the book club!");
    }

let i=0

//while loop
while(i<10)
{
    console.log("The value of i is ", i);
    i++;
}

//for loop
for(let j=0;j<5;j++)
{
    console.log("The value of j is ", j);
}



//function - a block of code designed to perform a particular task
//reusable code
//function declaration --> calling/defining a function
//function call --> invoking/executing a function
//console.log is also a function


greet("Alice");
console.log("The square of 5 is", square(5));


function greet(name)
{
    console.log(`Hello, ${name}, welcome to the world of JavaScript!`);
}

function square(num)
{
    return num * num;
}




//different ways to define functions in js

//a function delclaration
// function name4(params)
// {
//     //statements
// }

// //a function expression
// const name5 =function(params){
//     //statements
// }

// //an arrow function --> more modern way
// const name6 =(params)=>{
//     //statements
// }

hi("Aziza");

function hi(name)
{
    console.log(`Hi, ${name}!`);
}

//returns undefined

const addition=add(3,4);
console.log("The addition is", addition);

function add(a,b)
{
    //no return statement will work after one return statement has been passed
    return a+b;
}

// functions
//dont create their own this context
//when there is only one parameter, we can skip the parenthesis
//but otherwise, we need to use parenthesis
const squares = (num) => {
    return num * num; 
}
//when there is only one statement in the function body, we can write it like this
//const squares = (num) => num * num;
//calling the arrow function remains the same
const result = squares(6);
console.log("The square of 6 is", result);