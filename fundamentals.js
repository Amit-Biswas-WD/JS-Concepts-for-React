// 1. How to Declare a variable using let and const

const myName = "Amit";
let season = "Rainy";
season = "Winter";

// 2. Conditions
// 6 basic conditions: >,<, ===, !==, <=, >=
// multiple conditions: && ||

if (myName === "Amit" || season === "Rainy") {
  console.log(`My Name is ${myName}`);
} else if (myName === "Amit") {
  console.log(`my name ${myName}`);
} else {
  console.log(`This season is ${season}`);
}

// 3. Array Declare
// index, length, push

const number = [21, 54, 61, 45, 42, 65];
number[0] = 44;
console.log(number);

// 4. for loop
for (let i = 0; i < number.length; i++) {
  const numbers = number[i];
  console.log(numbers);
}

// 5. function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const output = multiply(42, 54);
console.log(output);

// 6. Object
const student = {
  name: "Amit",
  age: 21,
  from: "Dhaka, Bangladesh",
  hobby: {
    hobby1: "Web Developer",
    hobby2: "Bike Ride",
    hobby3: "Around",
  },
};

const myVariable = "age";

console.log(student.age); // direct by property
console.log(student["age"]); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
