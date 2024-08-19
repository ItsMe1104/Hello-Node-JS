// Modules protects their variables and functions from leaking

console.log("Sum Module Executed");

export var x = "Hello World";

export function calculateSum(a, b) {
  const sum = a + b;

  return sum;

}


/*
--> Way 1 (Old Way) :-
 module.exports = {
   x: x,
   calculateSum: calculateSum
 }


--> Way 2 (New Way) :-
module.exports = {
  x,
  calculateSum
}

*/