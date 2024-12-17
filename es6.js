const number = [21, 54, 61, 45, 42, 65];

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

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${number[5]} also like ${student.hobby.hobby1}`;
console.log(about);

// 2. Arrow function
const getFiftyFive = () => 55;
console.log(getFiftyFive());
const addSixtyFive = () => 65;
const isEven = (x) => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const total = num1 + num2;
  return total;
};

// spread operator

const newNumber = [...number];
// create a new array from an older array and add an element
const currentNumber = [...number, 55];

number.push(77);
number.push(77);
number.push(77);

console.log(number);
console.log(newNumber);
console.log(currentNumber);
