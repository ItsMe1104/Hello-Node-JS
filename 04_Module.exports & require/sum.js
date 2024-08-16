// Modules protects their variables and functions from leaking

console.log("Sum Module Executed");

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;

  return sum;

}


module.exports = {
  x: x,
  calculateSum: calculateSum
}