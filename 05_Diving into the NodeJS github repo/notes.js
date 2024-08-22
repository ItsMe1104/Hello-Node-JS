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
// --> The anonymous function definition must first be wrapped inside braces to make it an expression (expressions can be executed right away), then only we can call it there itself

//Syntax :-
(anonymous_funcion_definition)();


//e.g :-
(function () {
  //...
})()


  // NOTE :- The function definition must be wrapped inside braces () to make it a valid expression first (expressions can be executed right away), else it will give error.




  //**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



  // 3) Process of require()

  // --> Whenever we require a module using require()
  // --> NodeJS will take all the code from that required module
  // --> Wrap it inside an IIFE, and then give it to V8



  // Q) Why do we need IIFE?
  // --> It immediately invokes the code when we load a module
  // --> It keeps our variables and methods private
  // --> The code inside it does not interfere with the code outside



  // Q) How are variables and functions private in different module
  // --> require() wraps the code of that module in an IIFE



  // Q) How do we get access to the "module" keyword so that we can use module.exports? Who added this "module" in our code
  // --> While wrapping code inside an IIFE, NodeJS  passes the parameters known as "exports" (1st parameter) & "module" (3rd parameter) in the IIFE. While the IIFE is getting invoked, "module.exports" is passed

  // e.g :-
  (function (exports, module) {

    //...code of that module

  })(module.exports = {})



  // Q) Can we require() another module inside a different module? How do we get access to the "require" keyword
  // --> While wrapping code inside an IIFE, NodeJS  passes a second parameter known as "require" in the IIFE.

  (function (exports, require, module) {

    //...code of that module
    require("./xyz")

  })(module.exports = { x, calculateSum })




//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 4) 5-step mechanism of require() :-

// a) Resolving the module :-
// --> Checking if the module comes from a local path, json path, node:module (internal module), directory module


// b) Loading the module :-
// --> File content is loaded according to file type


// c) Compile - Wraps inside an IIFE :-
// --> The module code is wrapped inside an IIFE


// d) Code Evaluation :-
// --> require(), module.exports is returned


// e) Caching :-
// --> NodeJS caches the require() that is the module is cached, so that if some other module requires the same module, then the all the steps of require() will not run again, rather the module will just return from the cache
// --> In a real world project, there can be 1000 modules, hence if a single module is loaded for so many times, it might make the application very slow. NodeJS makes the app efficient by caching the required module.



//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 5) Node JS repository :-
// Shortcut :-
// --> Go to any file in Github, press the "." button in keyboard
// --> All the code of the repository will open in VS Code.



// --> NodeJS is open source
// --> Go to the NodeJS repository --> dev folder --> v8 (to know more about v8)
// --> Go to the NodeJS repository --> dev folder --> uv (to know more about libuv --> The most important superpower)



// For require() repository
// --> Go to the NodeJS repository --> lib folder (library folder :- containing all utilities like require, setTimeout) --> internal --> modules --> helpers.js --> makeRequireFunction()

// --> makeRequireFunction() builds the require function and returns it






//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


//6) To get the file and directory name

__filename   // gives the filename (console.log it)
__dirname    // gives the directory name (console.log it)