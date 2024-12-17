const details = {
  name: "Amit Biswas",
  profession: "Web Developer",
  age: 21,
  18: "Aaa",
  address: "Dhaka, Bangladesh",
  "son-name": "Winter",
};

// dot notation
const prof1 = details.profession;
// console.log(prof1);

// bracket notation
const prof2 = details["profession"];
// console.log(prof2);
const pName = "profession";
const prof3 = details[pName];
// console.log(prof3);

const bbb = details[18];
// console.log(bbb);

const son = details["son-name"];
console.log(son);
