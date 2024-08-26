console.log("Hello World");

var a = 1078698;
var b = 20986;

//The callback will only be pushed to call Stack once the callStack is empty
setTimeout(() => {
  console.log("Call me write now");
}, 0);

setTimeout(() => {
  console.log("Call me after 3 seconds");
}, 3000);

function multiplyFN(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFN(a, b);
console.log("Multiplication resut is : ", c);
