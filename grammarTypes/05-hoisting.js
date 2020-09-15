/*
* ***************
! HOISTING
* ***************

    What is Hoisting?
        - JS pulls variables and functions to the "top" of thier repective scope prior to being executed.
        - only the delcaration is pulled up, not the assignment


*/

//console.log(hoistedVar);

//console.log('How JS see hoistedVar: ', typeof hoistedVar);
//var hoistedVar = 'using var'; // and when var is hoisted, it can potentially hoisted as undefined
//let hoistedVar = 'using let'; //VAR gets hoisted, LET does not


//console.log(noVariable);

//? Hoisting in a Function
// This process is condidered the same within a fucntion. one the first pass, to read it, pushes the declaration to the top
// and executes them in the order that they are written. 

function testHoist() {
    becomesGlobal = "not declared, it becomes part of the global scope";
    console.log('Prior to declaring ', insideFunc);
    var insideFunc = "Rules still apply here";
    console.log(insideFunc);
}

testHoist();
console.log(becomesGlobal);

// It is best practive to alaways declare variables regardless of weather they are in a function or global scope. This makes it clear how it should be handled.

//? Using LET
// They key word "let" is block scoped and not function scoped.


console.log(letVariable);
let letVariable = 'Using Let';
//This throws a ReferenceError due to ES6 not accepting undeclared variables. This is to ensure we ALWAYS declare our variables FIRST.

//? Hoisting Fucntion
//FUnction Declaration

hoistedf=Func();

function hoistedFunc() {
    console.log('This is a hoisted function');
}

//Function Expressions:
//These are NOT hoisted.

expressionFunc();

let expressionFunc = function () {
    console.log('Works?');
}