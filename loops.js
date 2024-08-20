let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for loop
for(let i = 0; i < arr.length; i++)
    console.log(arr[i]);

// while loop
let i = 0;
while(i < arr.length){
    console.log(arr[i]);
    i++;

}

// do while loop
let j = 0;
do {
    console.log(arr[j]);
    j++;
}while(j < arr.length)


//for in loop 
const person = {
    name: 'John',
    age: 30
}
for(key in person)
    console.log(person[key])


//for of loop
for(num of arr)
    console.log(num);

//for each loop
arr.forEach(number => console.log(number))
arr.forEach((number, index) => console.log(number, index))

