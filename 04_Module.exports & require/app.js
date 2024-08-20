var name = "Hrithik"

var a = 10;
var b = 20;

console.log(name);
console.log(a + b);



// 1) Common JS

// --> One way of importing
const obj = require("./sum.js");

const sum = obj.calculateSum(a, b);
console.log("Old Way :-", obj.x, sum);



// --> Second way of importing (Destructure on the fly)
const { x, calculateSum } = require("./sum.js");

const sum2 = calculateSum(a, b);
console.log("New Way :-", x, sum2);



// --> Importing json file
const data_json = require("./data.json");

console.log(JSON.stringify(data_json));




/*
--> ES Module

import { x, calculateSum } from "./sum.js"

const sum2 = calculateSum(a, b);
console.log(x, sum2);

*/

console.log(global);
console.log(this);



// globalThis :- try console logging it in all JS runtime environments
console.log("\n\nUsing globalThis :-\n\n", globalThis);
console.log(globalThis === global);    // true
