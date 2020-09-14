/*
* ************
! FOR LOOPS
* ************
    -Loops help us repear a process without writing a lot of code.

    We need to:
        1) Create and index
        2) run a condition
        3) change to the indexing variable (execution of condition)
*/

for(let i = 0; i < 10; i++) {
    console.log(i);
}

/*
    We state our loop with a "for"
    Within this fucntion, we are injecting some parameters that JS will run against
        (index; condition; change index -> result)

        for(<create index variable>; <run condition; <change index>) {
            * will continue until run condition is met. 
        }

*/

// using a for loop, set an idex of 2. Make a condition where if that number is greater than -10, change that index 
//by subtraction 4 and console log each iteration.

for(let i= 2; i > -10; i -= 4){ //i = i -4 could also write it like this
    console.log(i);
}

let word = 'supercali'
for(let i=0; i < word.length; i++) {
    console.log(i, word[i]);
}

/*

!FORIN LOOP

*/

let city = {
    name: 'Indianapolis',
    pop: 877000,
    Speedway : true
};

for(info in city) {
    console.log(info)
    console.log(city [info]); // pulling all info
}

/*
    for(variable IN object) {
        <statement>
    }
*/

let list = ['milk', 'eggs', 'beans', 'bread', 'bananas'];

for (item in list){
    //console.log(item);
    console.log(list[item]);
};

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let fullName; 

for(char in name){
    //console.log(char);
    char == 0 ? fullName = name [char].toUpperCase() : fullName += name[char].toLowerCase();
}
console.log(fullName);



/*
! FOROf LOOP


    - In order to run a FOR OF loop, the "thing" must be numbered like an array.
    
    let object = {
        key:value,
        key:value,
        key: value,
    };

    for (o of object) {

    }

*/

let indexArr = ['spot 1', 1, true, 'four'];

for (pos of indexArr) {
    console.log(pos);
}

/*
? Qucik Recap:
    for loop: loops through a block of code until the counter reaches a specified number.
    for in loops: loops through properties of an object.
    for of loops: loops over iterable objects as an arrays and strings can be accessed much in the same way as arrays. 
*/