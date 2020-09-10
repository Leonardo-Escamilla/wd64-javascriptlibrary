/*
* **********
! Variables
* **********
*/

console.log ('hello');
// The console log is a debugging tool. 

let a = 2; 

/*
- let : is our keyword
- a : is our NAME of our variable
- = : is our ASSIGNMENT OPERATOR
- 2 : is our variable value
*/

let b = 1

console.log (a+b);

//! RESTRICTIONS
/*
    - a variable name must begin with a letter, underscore, or a dollar sign.
    - numbers may follow the above characters, but cannot come first. 
    - javascript is case sensitive - 'hello' and 'Hello', there would be different variables. 
    - no spaces are allowed in variable names.
    - camelCase is the best practive for nameing 
    - ex:
        let myName = 'Eric';
        is easier to read than
        let myname = 'Eric';

*/

let startingWithLetter = "Works";
let _startingWithUnderscore = "Works";
let $startingWithDollarSign = "Works";
// let 4startWithNumber = "Breaks";

console.log (startingWithLetter,_startingWithUnderscore, $startingWithDollarSign);

let PascaleCase;
let camelCase;
let snake_case;

/*
* Keywords

var, let, and const

    - var: 'old' keyword that stands for variable. ** We won't be using it as often but is still viable one to use. 

    - let: 'new' keyword for variable. (introduced with ES6 *newest version of ECMAScrpit, witch is a standardization of JS)

    - const: also 'new' keyword that declares an UNCHANGEABLE, or constant, variable.
*/

//var variable = 'var variable';
//let variable = 'let variable';

//let function = 1;  Cannot use reserved words within a varaible name- *function is a reserved word.


/*
* **********
! Declarations & Initializations
* **********
*/
// Declarations are the left side of the assignment operator 
//let x;

// Initializations are on the right side of the assignment operator
//let x = 10

//10 is our initialization.

let y;
console.log('declaration:', y);

y= 10;
console. log('initialization', y);

y= 33;
console.log('initialixation 2: ', y);

// We've set our variavle with our keyword. With each iteration, we have redeclared what it is. 



//? const

let today = 'Great!';
const efa = 'Wonderful';
console.log(today, efa)

today = 'Awesome!';
console.log (today, efa)

//efa= 'Super';
console/log(today,efa)
// const allows us to make a varaiable that we don't want to change.
