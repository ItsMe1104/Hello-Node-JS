const fs = require("node:fs");
const https = require("node:https");

console.log("Hello World");

var a = 1078698;
var b = 20986;


// API call
https.get('https://dummyjson.com/products', (res) => {
  console.log("Fetched Data Successfully");
})

// Timer Function
setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// File Handling
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
})

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(c);
console.log(c);


