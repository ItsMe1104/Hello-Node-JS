// Modules protects their variables and functions from leaking

console.log("Sum Module Executed");

var x = "Hello World";

function name(a, b) {
  const sum = a + b;

  console.log(sum);

}