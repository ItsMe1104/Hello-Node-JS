const crypto = require("crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;


//Sync function
const crypto_key = crypto.pbkdf2Sync("helloWorld", "salt", 500000, 50, "sha512")
console.log("First Key is Generated");
console.log(typeof crypto_key);



//Async function
crypto.pbkdf2("helloWorld", "salt", 5000000, 50, "sha512", (err, key) => {
  if (err)
    console.log("Error :", err);
  else
    console.log("Second Key is Generated : ", key);
})


function multiplyFN(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFN(a, b);
console.log("Multiplication resut is : ", c);
