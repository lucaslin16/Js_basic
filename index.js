//person class
let person = {
    name: 'Lucas',
    age: 30
};
person.name = 'John';

console.log(person);


//Arrays [] = array literal, dynamic types and length
let selectedColors = ['red', 'blue'];
//add green (dynamic length)
selectedColors[selectedColors.length] = 'green';
//add a number (dynamic types)
selectedColors[selectedColors.length] = 3;

console.log(selectedColors);

//functions
function greet(firstName, lastName){
    //body of function
    console.log('hello ' + firstName +' ' + lastName);
}

function square(num){
    return num * num;
}

greet('lucas', 'lin');
let num = square(2);
console.log(num);