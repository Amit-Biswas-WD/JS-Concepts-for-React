// 1. Array destructuring
const value = [42, 57, 65];
// const x = value[0];
// const y = value[1];
// const z = value[2];
// console.log(x, y, z);

// const [x, y, z] = [55, 57, 25];

// const [x, y, z] = value;

function boxify(num1, num2) {
  const nums = [num1 + num2];
  return nums;
}

// const [first, secend] = [31, 65];
// const [first, secend] = boxify(31, 65);

// const total = boxfy(25, 84);

const student = {
  name: "Amit",
  age: 21,
  from: "Dhaka, Bangladesh",
  hobby: ["Web Developer", "Bike Ride", "Around"],
};

const [first, secend, third] = student.hobby;
// console.log(first, secend, third);

// object destructuring
const { name, age } = { name: "Amit", age: 21 };
const { names, ages } = { id: 12, name: "Amit", salary: 34000, age: 21 };

const employee = {
  id: "VS Code",
  description: "Developer",
  machine: "mac",
  language: ["html", "css", "javascript"],
  specification: {
    height: 66,
    weight: 67,
    address: "Dhaka",
    drink: "water",
    watch: {
      color: "Black",
      price: 1250,
      brand: "onePlus",
    },
  },
};

const { id, description } = employee;
const { address, drink } = employee?.specification;
const { color, price, brand } = employee?.specification?.watch;
