//Adding elements
const arr = [1, 2, 3, 4, 5,5];
arr.push(6); // adds element at the end
arr.unshift(0); // adds element at the beginning
console.log(arr);

arr.splice(2, 0, 'a', 'b'); // adds element at index 2, deletes 0 elements
console.log(arr);

//Finding Elements (Primitives)
const indexOfFive = arr.indexOf(5);
console.log(indexOfFive);

const lastIndexOfFive = arr.lastIndexOf(5); // returns -1 if not in array
console.log(lastIndexOfFive);

const containsFive = arr.includes(5);
console.log(containsFive);

//Finding Elements (Reference Types)
const arr2 = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Jane',
        age: 25
    }
]

const findJohn = arr2.find(
    function(e){
        return e.name === 'John';
    }
) // returns undefined if not found

console.log(findJohn);

const IndexOfJohn = arr2.findIndex(
    function(e){
        return e.name === "John";
    }
) // returns -1 if not found

console.log(IndexOfJohn)

//Arrow Functions
function add(a,b){
    return a+b
}
console.log(add(2,3))

const addArrow = (a,b) => a+b; // You can remove parentheses if only one parameter
console.log(addArrow(2,3))


//Removing Elements
arr.pop(); // removes last element
arr.shift(); // removes first element
const removedElement = arr.splice(2, 1); // removes element at index 2
console.log(arr)


//Combining and Slicing
const arr3 = [1, 2, 3, 4, 5];
const arr4 = [6,7,8,9,10];
const arr5  = arr3.concat(arr4)
const arr6 = [...arr3, 'a' , ...arr4, 'b'] // same as concat but with more flexibility

console.log(arr5)
console.log(arr6)
console.log(arr4.slice(2, 5))

//Joining Arrays
const joined = arr5.join(", "); // joins elements with a comma as a separator in a string
console.log(joined)

const string = "Hello World, how are you?"
const splitted = string.split(" ") // splits string into an array
console.log(splitted)

//Sorting Arrays
const ascending = arr5.sort();
const desceneding = arr.reverse();
console.log(ascending, desceneding)

const objectArray = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Jane',
        age: 25
    }
]

const sorted = objectArray.sort((a,b) => { 
    aLowerCase = a.name.toLowerCase();
    bLowerCase = b.name.toLowerCase();
    if(aLowerCase < bLowerCase) return -1;
    if(aLowerCase > bLowerCase) return 1;
    return 0;
})
console.log(sorted)

//Testing Arrays
const even = [2,4,6,8]
const oneEven = [1,3,5,7,8,9]
const hasEven1 = even.every(number=> number%2  === 0)
const hasEven2 = oneEven.some(number => number%2 === 0)
console.log(hasEven1, hasEven2)

//Filtering Arrays
const evenValues = arr.filter(number => number % 2 === 0)
const filteredObjectArray = objectArray.filter(object => object.name === "John")

//Mapping Arrays
const squaredNumbers = arr.map(number => number * number)
console.log(squaredNumbers)

const employees = [
    {name: 'John', age: 30, email: 'John@Gmail.com'},
    {name: 'Jane', age: 25, email: 'Jane@Gmail.com'},
    {name: 'Jim', age: 40, email: 'Jim@Gmail.com'},
]

const lowerCaseEmails = employees.map(employee =>({
    ...employee,
    email: employee.email.toLowerCase()
}))

//Reducing Arrays
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)//2nd argument is initial value of accumulator
console.log(sum)


