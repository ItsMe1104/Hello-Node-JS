// NodeJS gives our code to V8 Engine and V8 Engine executes our code


//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 1) Private Space of modules inside Node JS :-

// How does a module has its own privae space ?
// --> i.e. why we cannot access the variables / methods of one module from outside that module?



// Prerequisites :-
// --> In JS, if we create a function, all the variables and methods inside that function are privately scoped.
// --> Means we cannot access its variables and methods outside its scope

function x() {
  const a = 10;

  function b() {
    console.log("b");
  }
}

console.log(a);   //wont work will give error

// --> Whenever we wrap a code inside a function, now the code can only be accessed inside the function and not outside.





// Solution :-
// --> Modules work the same way in NodeJS
// --> Whenever we create a module, all the code that we write inside the module is wrapped inside a function and then executed.
// --> Hence we cannot access the variables and methods outside that function
// --> We can only access them via module.exports



// Explanation :-
// --> Whenever we require() a module , NodeJS takes the code from that module, wrpas it into a function and then gives it to the V8 engine to execute it.
// --> Hence, the code present inside that function also does not interfere with the code of the main module because of its scope.
// --> This is the reason why we cannot access the methods/variables of other modules directly because they are wwrapped inside a function while using require()




//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 2) Function in which module code is wrapped (IIFE):-

// --> IIFE (Immediately Invoked Function Expression)
// --> JavaScript function that runs as soon as it is defined.
// --> It is mostly an anonymous function and we try to invoke it at the time of declaring it only (on the fly)
// --> The anonymous function definition must first be wrapped inside braces to make it an expression, then only we can call it there itself

//Syntax :-
(anonymous_funcion_definition)();


//e.g :-
(function () {
  //...
})()


// NOTE :- The function definition must be wrapped inside braces () to make it a valid expression first, else it will give error.




//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) Process of require()

// --> Whenever we require a module using require()
// --> NodeJS will take all the code from that required module
// --> Wrap it inside an IIFE, and then give it to V8