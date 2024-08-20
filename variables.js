let firstName;
firstName = 'John';
let lastName = 'Doe';

const COLOR_GREEN = 'green'

let intVar = 10;

let floatVar = 3.14;

let nullVar = null;

let symbolVar = Symbol();

let bigIntVar = 9007199254740991n;

let undefinedVar = undefined;


let objectVar = {
    name: 'John',
    age: 30,
    address: '123 Main St',
}

let arrayVar = [1, 2, 3, 4, 5];

let length = arrayVar.length;

console.log("The length of the array is: ", length)
console.log(firstName, lastName, COLOR_GREEN, nullVar, symbolVar, bigIntVar, undefinedVar, intVar, floatVar, objectVar, arrayVar);

console.log(objectVar.name)

console.log(objectVar["name"])