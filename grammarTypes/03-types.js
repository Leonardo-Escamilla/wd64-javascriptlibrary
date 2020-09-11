/*
* ********
! TYPES
* ********

? Data and structure types
* ********************
    - Primitive Data Types:
        - boolean
        - undefined
        -number 
        -string
            -bright*
            -symbol*
        -null
        -object
        -function
    */

    //? Booleans
    //* ****************

    // A boolean has two possible values: true and false

    let on = true;
    let off= false;

    console.log (on);


    // ? NULL
    // A null value is an empty value. Think of this as an empty container to fill. 

    let empty= null;
    console.log(empty);

    //?
    // No value has been assigned to a container.

    let undef= undefined;
    console.log(undef);
    let password;
    console.log(password);

    /*
        - Null is like a container with nothing in it.
            - Null you can trust as zero - UNdefined not so much. 
        - Undefined is when a variable has never been set, or hasn't been created yet.
    */

    //? NUMBERS

    let degress =90;
    console.log(degress);

    let precise = 999999999999999; //15 9's
    console.log(precise);

    let rounded = 9999999999999999; //16 9's
    console.log(rounded);
    // JS gives us space for 15 9s before rounding up.

    let notQuite= 0.2 + 0.1;
    console.log(notQuite);
    // JS rounds our at a certain number, so if math is needed, be aware. 

    let whatIF= (0.2 *10 + 0.1*10);
    console.log(whatIF);
    let numbersAreHard= (.02 * 10 + .01 * 10) / 10; // should have been .3
    console.log(numbersAreHard);

    //? Strings

    // Stings represent text and are wrappped in either single or double quoates.

    let doubleQuote = "Double Quote"
    let singleQuote = 'Single Quote'
    console.log(doubleQuote, singleQuote);

    let inception = "I've";
    let singleQ = 'I\'ve';
    let bothQuotes = 'I said, "What about Bob"';
    console.log(inception,singleQuote)


    //? Number vs Sting
    let addThese = 1050 + 100;
    console.log(addThese); // seen as a number 

    let addTheseAlso = '1050' + '100';
    console.log(addTheseAlso); // combinging the two not adding them, seen as a string not number 

    console.log(typeof addThese);
    console.log(typeof addTheseAlso);

    // We can use an operator called 'typeof' that returns a string that tells us exactly what our variable "type" is.

    let stingToNumber = Number ('1150')
    console.log(stingToNumber);
    console.log(typeof stingToNumber);

    //const log= console.log; //WE can reduce our typing by settng console log to a variable that doesn't change.
    //log('test');

    //? OBJECTS
    /*
        - Objects are used to store many values instead of a singular value.
        - Consider these as a collection of various properties.
        - denoted by curly brackets: {}
    */

    let frodo = {
        race: 'hobbit', //string
        rings: 1, // number
        string: true, //boolean 
    }

    console.log(frodo);
    console.log(typeof frodo);
    //1: Key
    //2: Value

    //? ARRAYS
    /* 
        - Containers that hold a list of items.
        - denoted by square brackets: []
        - all items are withing the square brackets.
        - regardless of datatype, each item is seprerated by a coma.
    */

    let arrayList = ['pos 1', 'pos 2', 'pos 3'];
    console.log(arrayList);
    let anotherExample = [1,2, 'three', true];
    // let anotherExample = []
    console.log(anotherExample)
        
    console.log(typeof anotherExample);
    // JS classified arrays as objects and not a datatype of their own.


    //? ADDITION vs CONCATENTATION
    /*
        -JS sees the "+"symbol in two different ways.
            -When combined with numbers, uses built-in math functionality.
            -When combined with strings, it ingnoew the math and concats the two strings.
    */

    let stings= 'one' + ' ' + 'is a number';
    let concatDiff = 1050 + '100'
    console.log(stings)
    console.log(concatDiff)
    console.log(typeof concatDiff);

    /*
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = "Leonardo";
let lastName = "Escamilla";
let houseNumber = 1208;
let street = "N Centennial St";
let city = "Indianapolis";
let state = "Indiana";
let zipcode = 46222;

console.log(firstName, lastName, houseNumber, street, city, state, zipcode);

//? string: Properties

/*
    - stings have properties, or the qualities associated with that string.
    - the lenghth of a string is a property.
*/

let myName = "Leonardo";
console.log(myName.length);

//? Sting: Methods 
/*
    - methods are tools that can help use manipulate our data
*/

let myNameIs = "Leonardo";
console.log(myNameIs.toUpperCase()); // This is a method that changes a string to uppercase
console.log(myNameIs.toLowerCase()); // This is a method that changes a string to lowercase

let home = 'My home is Fishers';
console.log(home.includes('Fishers')) // True 

