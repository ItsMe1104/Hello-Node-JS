// We cannot put all the code in a single file app.js, even though we can
// In large projects we create multiple files and multiple projects with different directory structure



//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// 1) Entry point in our Node JS application :-

// --> The file that we give alongside "node" in our terminal
// --> In our case its the app.js
// --> e.g :- node app.js




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 2) Modules :-

// --> If there are codes in some other files also, how will they be executed along with the entry point file?
// --> These codes in these two files are not related somehow, these two codes are very separate in separate files.
// --> Hence these two files can be called as a separate "module"


// --> Consider modules to be the same as JavaScript libraries.
// --> A set of functions you want to include in your application.



// ==> Main Module :- The entry point file




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 3) Connecting the code of two modules  { require() }   :-

// --> To include or import a module inside other module
// --> Use the require() function
// --> Its a function used to just require other modules into our main module
// --> It is available anywhere / in any file inside our nodeJS app



// Syntax :-
// require("x");
// --> x = relative/absolute path of that file

// e.g :-
require("./xyz.js")



// Note :- If we try to require a file (no matter in whichever line), then that file's code will be executed first and then the whole code of the




/********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// 4) Restrictons on importing modules using require()

// --> Modules are protected by default
// --> They protect their variables and functions from leaking

// --> We cannot access the variables and methods of separate module directly into our required module by just using require()
// --> The code of that separate module will still


// e.g :- If we have a module "Sum.js"
// Inside it, a console.log() and a function is present to sum Two Integers

// Now if we import "Sum.js" into our "app.js" and try to use its Sum() inside app.js, it will give error
// Even though the console.log() of Sum.js will still be printed






/********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 5) How to access a single method or variable from other modules


// --> First export the required method or variable from the other module
// --> Then import it inside our required module




// a) To export :-
// --> We use an object called "mdoule.exports"     (Remember the "s" after export)
// --> Since we will export a single variable or method, we dont need to use an object 
// --> We can export it directly as a variable

function calculateSum(a, b) {
  return a + b;
}

module.exports = calculateSum;




// b) To import :-
// --> Whatever we will export, will be returned by the require()
// --> Hence, if a single variable / method is exported, normally import it inside a single variable using require()
// --> Then use that single variable wherever required

const calculateSum = require("./sum.js");

calculateSum(a, b);




/********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 5) How to access multiple methods or variable from other modules


// --> First export the required methods and variables from the other module
// --> Then import it inside our required module



// a) To export :-
// --> We use an object called "mdoule.exports"     (Remember the "s" after export)
// --> Since we will export multiple variables or methods, we will export it as an object
// --> the keys will have same names as the variable and method's names
// --> The values will be the actual variables, methods we want to export


module.exports = {
  x: x,                                     //variable
  calculateSum: calculateSum                //method
}



