/*
!Constructor FUNCTIONS

- Functions allows us to easily create a unique solution for different circumstances by using parameters.
    - creating several different objects with the same keys but different values. 
*/



//opt 1:
let person1 = {
    name: 'Macy',
    age: 24,
    canVot: true 
};
let person2 = {
    name: 'Jeremy',
    age: 15,
    canVot: false
};
let person3 = {
    name: 'Tyler',
    age: 38,
    canVot: true 
};

//OPT 2
//  1      2            3
function Person (name, age, canVote){
//   4     5     6
    this.name = name
    this.age = age;
    this.canVote = canVote;
}
console.log(typeof Person);
//            7      8
let person4 = new Person ('James', 80, true);
console.log(person4);

/*
 1. They keyword (function)
 2. The function NAME. For Constructor Functions, the name should be capitalized. 
 3. The parameters. These will be the values of the object once this function is in use. 
 4. The 'this' keyword. 'this' gives us the ability to refer back to whatever called, or whatever actvities in it. in this case, 'this' refers to 'Person'. 
 5. This will be a key of the new object we will create. This is not refering to the parameter. 
 6. This is refering to the parameter we pass through our constructor function.
 7 & 8: This 'new' keyword is calling our person function, creating a new person with the values we passing as arguements, and storing that person in a variable.


*/

