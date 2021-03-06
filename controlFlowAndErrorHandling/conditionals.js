/*
* ************
 !Conditionals
* ************

? FALSY VALUES:
    -false
    - 0
    - "", '', ``
    -null
    undefined
    NaN (not a number)

    When JS is expecting a boolean value and it is returned with one of these 6 values it is evaluated as a "falsy" 
*/

/*
* *******
! IF
* *******
- " If" something is true, do "this thing"
*/

let light = 'on';
if (light == 'on') {
    console.log ('The light is on');
};

let weather = 68;
if(weather <70) {
    console.log ('Wear a jacket.');
};

let rain = true;

if (weather < 70 && rain !=false) { // rain = true is what that means
    console.log ('It is a little chilly and will possibly rain.');
    // new function, that's why you need the semicolons at the end of console logs
};

/*
* **********
! IF ELSE
* **********
    If/Else statements allow us the ability to write out a chain of events.
*/

let today = 75;

if(today < 70) {
    console.log ('It is' + today + ', wear a jacket'); // not run when a false value is returned 
} else {
    console.log('It is' + today + ', No jacket needed.');
}

/*
! CHALLENGE
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
*/
let name = 'Leonardo'; // = assignment operator means "name is Leonardo "

if( name == 'Leonardo') { // == means "is equal" 
    console. log('Hello, my name is ' + name + '.');
} else {
    console.log('Hello, is your name ' + name + '?');
}

/*
***********
! Else IF
***********
    Ths is a condition that would be checked if the above condition was not met. 
*/

let cookTime = 45; // practice chaning value to see different output/results 

if(cookTime ===45){
    console.log('Let us feast!');
} else if (cookTime >= 30) {
    console.log(`It has only been ${cookTime} minutes. Wait another 5 - 15 minutes.`);
} else if (cookTime >= 20) {
    console.log(`It has only been ${cookTime} minutes. Wait another 10 - 25 minutes.`);
} else{
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it first...`);
}

// The end of the ELSE IF statement should have a simple "else" to finish it. 

//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 31;

if(age <= 17){
    console.log(`Sorry, you're too young to do anything.`);
} else if(age >= 18 && age <21){
    console.log(`You can vote!`);
}else if(age <= 21){
    console.log(`You can drink!`);
}else if(age >= 25){
    console.log(`You can rent a car!`);
}

/*
* **********
! TERNARIES
* **********
    - This is a quick way of considering and if/else statement. We are capable of writing out our conditional in a simple line.  
*/

let myName = 'Eric'; // = assignment operator means "name is Leonardo "

//if( myName == 'Leonardo') { // == means "is equal" 
   // console. log('Hello, my name is ' + myName + '.');
//} else {
    //console.log('Hello, is your name ' + myName + '?');
//}

// condition ? if true : esle result 


//     (1)                                   (2)                            (3)
myName === 'Leonardo' ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`)

/*
    1: condition
    2: True (if true)
    3: False (else)
 */

 //! CHALLENGE
// Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;

//if(lampOn == true && daytime != true) {
    //onsole.log('The lamp is on during the night')
//} else if(lampOn != true && daytime != true) {
    //console.log('The lamp is off during the night')
//} else if(lampOn == true && daytime == true){
    //console.log('The lamp is on during the day')
//} else if(lampOn != true && daytime == true) {
    //console.log('The lamp is off during the day')
//} else {
    //console.log('What lamp?')
//}

lampOn == true && daytime != true ? console.log('The lamp is one during the night.') 
: lampOn != true && daytime != true ? console.log('The lamp is off during the night.') 
: lampOn == true && daytime == true ? console.log('The lamp is on during the day.') 
: lampOn != true && daytime == true ? console.log('The lamp is off during the day.')
: console.log('What lamp?')


/*
* *******************
!Switch
* *******************
    - executes a block of code depending on different cases. 
*/

let instructor = 'Josh';

switch(instructor) {
    case 'Ing':
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
        // once each case has been evaluated and we return the result, we need to not to "break" out from our switch statement 
    case 'Zach':
        console.log(`${instructor} is a part of the Web Dev Team.`);
        break;
    case 'Josh':
            console.log(`${instructor} is a part of the Software Dev Team.`);
            break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`)

    // Need to use a defualt to help us catch those cases when none are true. 
}

instructor = 'Amanda';

switch(instructor) {
    case 'Ing':
    case 'Adam':
    case 'Eric':
    case 'Zach':
    case 'Donovan':
        console.log(`${instructor} is part of the Web Dev team.`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
        console.log(`${instructor} is part of the Software Dev team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`)
}

//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-59
*/


