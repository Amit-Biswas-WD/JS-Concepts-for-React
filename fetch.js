// 1. JSON

const student = {
  name: "Amit",
  age: 21,
  from: "Dhaka, Bangladesh",
  hobby: ["Web Developer", "Bike Ride", "Around"],
};

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. fetch

// fetch("url")
//   .then((res) => res.json)
//   .then((data) => console.log(data));

//   3. keys, values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);

// 4. for
const number = [45, 87, 62, 91, 37];
number.forEach((num) => console.log(num));
number.map((num) => num * 2);

// for of an array like object
// loop of an object using for in

// add or remove from an array
const products = [
  {
    name: "Laptop",
    price: 180000,
    brand: "Apple",
    color: "Gray",
  },
  {
    name: "Camera",
    price: 80000,
    brand: "Sony",
    color: "Black",
  },
  {
    name: "Phone",
    price: 120000,
    brand: "OnePlus",
    color: "Black",
  },
  {
    name: "Bike",
    price: 500000,
    brand: "R15 V3",
    color: "Black",
  },
  {
    name: "Car",
    price: 500000,
    brand: "Supra",
    color: "Gray",
  },
];

const newProduct = { name: "Phone", price: 49999, brand: "OnePlus" };
// copy Products array and then add newProduct
const newProducts = [...products.newProduct];

// create a new array without one specific items
// remove phone means create a new array without the phone

const remaining = products.filter((product) => product.name !== "phone");
