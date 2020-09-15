/*
* *************
!ARROW FUNCTIONS
* *************

Arrow fucntions are expressinal fucntions that can be simplifieed into one of two forms, CONCISE and BLOCK BODY. 
The goal is to generate shorter syntax for writing a fucntion. 

* Arrow functions also do NOT get hoisted.

*/

function regFunc() {
    console.log('Regular');
}
regFunc();

//  1           2  3          4
let arrowFunc = () => console.log('Arrow Func');
arrowFunc(); // still need to invoke our function

/*
    1. Arrow functions are always anonymous. 
    2. Parameters are still capable of being injected.
        - if we have one parameter, we techinically don't need the parans ()
        - BUT if we are not passing any parameters, it is requred to denote ()
    3. This is syntax JS that we are about to process a function the fat arrow 
    4. Within this format, JS assumes the return statement. 
*/






//? Concise vs Block Body

// CONCISE:

let cBody = (x,y) => console.log(x + y);
cBody(1,2);

let slightlyComplex = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater tjan 2 and ${y} is less than 2`)
:console.log (`$`)


//Block:
// The retun keyword is required. We also include the curly braces. 

let blockArrow = (x,y) => {
    return`${x} are within a ${y}`;
}

console.log(blockArrow('We', "Block Body"));




