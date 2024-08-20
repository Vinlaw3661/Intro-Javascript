//Function Declaration - hoisting allows us to use the function before it is defined
greet("Hoisting")
function greet(name){
    console.log("Hello World")
    console.log("This message was written by", name)
}

greet("Vinlaw");


//Function Expression - do not allow us to use the function before it is defined
const greet2 = function(name){
    console.log("Hello World")
    console.log("This message was written by", name)
}

greet2("Vinlaw")

const greet3 = function greetings(name){
    console.log("Hello World")
    console.log("This message was written by", name)
}

greet3("Vinlaw")

//Arrow Functions
const greet4 = name => {
    console.log("Hello World")
    console.log("This message was written by", name)
}

greet4("Vinlaw")

//Arguments
function multiply(num1, num2){
    console.log(arguments) //Stores all the arguments provided at the time of function call
    product = 1
    for(let num of arguments){
        product *= num
    } 
    return product
}

console.log(multiply(1, 2, 3, 4, 5)) // arrays can take more than defined argumens. If less are provided, the rest will be undefined

//Rest Operator
function add(...args){
    return args.reduce((accumulator,currentValue)=>accumulator + currentValue)
}

function add2(factor, ...args){
    return args.map(number => number+factor)
}

//Getters and Setters 
const profile = {
    name: 'John',
    age: 30,
    job: "Software Engineer",
    salary: 0,
    get update() {
        return this.name;
    },
    set update(amount){
        this.salary = amount;
    }
}

console.log(profile)

//Binds
const obj = {
    name: "Somnyama",
    age:40,
    greet(period){
        return `Good ${period} ${this.name}`
    },
    greet2: period => {`Good ${period} ${this.name}`} //Undefined because it takes from global scope
}

function binder(content){
    console.log(`This is ${this.name} teaching ${content}`)
}

const introduction  = binder.bind(obj)
introduction("JavaScript")