let a = 3;
let b = 3;
// Returns value first before decrement
a--;
//Decrements before return
--b;
console.log(a, b);


let x = 2;
let y = '2';
//Loose equality
console.log(x == y);
//Strict equality
console.log(x === y)


//Tenary operator
let age = 18;
let canDrive  = age>= 16 ? true:false;
console.log(canDrive);


//Logical operators
console.log(true && true)
console.log(true || false)
console.log(!true)


//Nullish coalescing operator
let firstName = null;
let hasFirstName = fistName ?? 'John';
console.log(hasFirstName);
