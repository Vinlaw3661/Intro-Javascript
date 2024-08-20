//Objects
let obj = {
    name: "Michael",
    surname:"Samaya",
    age: 24,
    meth: function(){
        console.log("Hello World");
    },
    product(a,b){
        console.log(a*b);
    }
}

console.log(obj)
obj.meth()
obj.product(10,10)

//Factory functions - used to create objects much like a class constructor
function createPerson(name, surname, age){
    return {
        name: name,
        surname: surname,
        age: age,
        isHuman: true,
        greet: function(){
            console.log("Hello World")
        }
    }
}

person1 = createPerson("Michael", "Samaya", 24)
person2 = createPerson("John", "Doe", 30)

//Constructor functions
function Person(name, surname,age){
    //this = {}
    this.name = name
    this.surname = surname
    this.age = age
    this.greet = function(){
        console.log("Hello World")
    }
    //return this
}

person3 = new Person("Jane", "Doe", 35)


//Objects can be changed without reassignment even when declared as constant
const example = {
    name: "John",
    surname:"Pozzi"
}

example.age = 12

console.log(example)

delete example.age
console.log(example)

//Enumerating over Objects - returns values as arrays
const keys = Object.keys(example)
const values = Object.values(example)
const entries = Object.entries(example) //returns as [key, value]



//Cloning Objects
let a = {
    value: 2
}

b = {}
Object.assign(b,a) // Method 1 - assign method

c = {...a} // Method 2 - spread operator

//String literals
const sentence = "Today is a good day"

const doesIncludeGood = sentence.includes("good")
console.log(doesIncludeGood)

const startsWithT = sentence.startsWith("T")
console.log(startsWithT)

const endsWithG = sentence.endsWith("G")
console.log(endsWithG)

let updatedSentence = sentence.replace("good", "bad")
console.log(updatedSentence)

//Template Literals

const firsName = "Vinlaw"
const lastName = "Mudehwe"
const fullName = `${firstName} ${lastName}`
console.log(fullName)