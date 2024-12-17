// 'almas', 5, true, {}, []
// '', 0, false, null, undefined
// check truthy

let myVar = 50;
// check any truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}
// console.log(myVar);

let myMoney = 5;
// you check negative and falsy anything
if (!myMoney) {
}

const money = 800;
let food;
if (money > 100) {
  food = "biryani";
} else {
  food = "cha biscuit";
}

// console.log(money);

// ternary
let food1 = money > 100 ? "biryani" : "cha biscuit";
// console.log(food1);

let drink = money > 100 && myVar > 100 ? "Cake" : "Milk";
// console.log(drink);

// number to string conversion
const num = 55;
// console.log(num);
const string = num + "";
// console.log(string);

// string to number
const input = "1421";
const inputNumber = +input;
// console.log(inputNumber);

//
const isActive = true;
const showUser = () => console.log("Display User");
const hideUser = () => console.log("Hide User");
// isActive ? showUser() : hideUser;
// use && if the left side is ture then right side will be executed
// isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || showUser();

// toggle boolean
isActive = !isActive;
