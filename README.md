# Beginner JavaScript Guide

Welcome to the Beginner JavaScript Guide! This repository contains code examples and explanations for fundamental JavaScript concepts, including primitives, objects, arrays, functions, and operators. Whether you're just starting out or looking to reinforce your understanding, this guide provides a solid foundation.

## Table of Contents

1. [Introduction](#introduction)
2. [Primitives](#primitives)
3. [Objects](#objects)
4. [Arrays](#arrays)
   - [Map](#map)
   - [Filter](#filter)
   - [Reduce](#reduce)
5. [Functions](#functions)
   - [Function Declarations](#function-declarations)
   - [Function Expressions](#function-expressions)
   - [Arrow Functions](#arrow-functions)
6. [Operators](#operators)
   - [Basic Operators](#basic-operators)
   - [Nullish Coalescing Operator](#nullish-coalescing-operator)
   - [Ternary Operator](#ternary-operator)
7. [Getting Started](#getting-started)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

This repository contains code snippets and examples to help beginners understand essential JavaScript concepts. Each section is accompanied by explanations to help you grasp how and why things work.

## Primitives

Primitives are the most basic data types in JavaScript. They include:

- **String:** Represents textual data (`'Hello, World!'`)
- **Number:** Represents both integer and floating-point numbers (`42`, `3.14`)
- **Boolean:** Represents true/false values (`true`, `false`)
- **Null:** Represents the intentional absence of any object value
- **Undefined:** Represents a variable that has been declared but not yet assigned a value
- **Symbol:** Represents a unique identifier

## Objects

Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type.

## Arrays

Arrays are ordered collections of values. They can contain any combination of data types.

### Map

`map` creates a new array by applying a function to each element of the original array.

### Filter

`filter` creates a new array containing only elements that pass a specified condition.

### Reduce

`reduce` applies a function against an accumulator and each element in the array to reduce it to a single value.

## Functions

Functions are blocks of code designed to perform particular tasks. They can be declared in several ways.

### Function Declarations

A traditional way to declare a function.

### Function Expressions

Functions can also be assigned to variables.

### Arrow Functions

A concise way to write functions using the `=>` syntax.

## Operators

### Basic Operators

Basic arithmetic and logical operators.

### Nullish Coalescing Operator

The `??` operator returns the right-hand operand when the left-hand operand is `null` or `undefined`.

### Ternary Operator

The ternary operator is a compact way to perform conditional expressions.

## Full Code Example

```javascript
// Primitives
let name = 'John'; // String
let age = 25; // Number
let isStudent = true; // Boolean
let job = null; // Null
let address; // Undefined
let uniqueId = Symbol('id'); // Symbol

// Objects
let person = {
  name: 'Alice',
  age: 30,
  job: 'Engineer',
  isStudent: false
};

console.log(person.name); // Output: Alice

// Arrays
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Output: Apple

// Map
let numbers = [1, 2, 3];
let doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6]

// Filter
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Reduce
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // Output: 15

// Functions

// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

// Function Expression
const greetExpr = function(name) {
  return `Hello, ${name}!`;
};

console.log(greetExpr('Bob')); // Output: Hello, Bob!

// Arrow Function
const greetArrow = (name) => `Hello, ${name}!`;

console.log(greetArrow('Charlie')); // Output: Hello, Charlie!

// Operators

// Basic Operators
let sumOp = 5 + 3; // Addition
let product = 4 * 2; // Multiplication
let isTrue = 5 > 3; // Greater than

// Nullish Coalescing Operator
let userName = null;
let defaultName = 'Guest';
let displayName = userName ?? defaultName;

console.log(displayName); // Output: Guest

// Ternary Operator
let canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // Output: Yes
