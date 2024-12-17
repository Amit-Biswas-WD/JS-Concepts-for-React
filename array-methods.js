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

const name = products.map((product) => product.name);
// console.log(name);
const brand = products.map((product) => product.brand);
// console.log(brand);
const color = products.map((product) => product.color);
// console.log(color);
const price = products.map((product) => product.price);
// console.log(price);

products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.price));

products.forEach((product) => {
  const price = product.brand;
  const name = product.price;
  //   console.log(`price ${price} name ${name}`);
});

// 3. filter
const cheap = products.filter((product) => product.price >= 100000);
// console.log(cheap);

const specificName = products.filter((product) => product.name.includes("a"));
// console.log(specificName);

// 4. find
const special = products.find((product) => product.name.includes("n"));
console.log(special);
