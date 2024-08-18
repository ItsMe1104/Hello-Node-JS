// We cannot put all the code in a single file app.js, even though we can
// In large projects we create multiple files and multiple projects with different directory structure



//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// 1) Entry point in our Node JS application :-

// --> The file that we give alongside "node" in our terminal
// --> In our case its the app.js
// --> e.g :- node app.js




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 2) Modules :-

// --> Formal Definition :-
// It is a collection of code which is separate private to itself and it exist independently of any other program.

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
// --> x = relative/absolute path of that file  (with or without the extension name)

// e.g :-
require("./xyz.js")
require("./xyz")     // will also work as the extension is assumed to be ".js" only



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

// --> Way 1 (Old way)
// We use an object called "mdoule.exports"     (Remember the "s" after export)
// Since we will export multiple variables or methods, we will export it as an object
// the keys will have same names as the variable and method's names
// The values will be the actual variables, methods we want to export


module.exports = {
  x: x,                                     //variable
  calculateSum: calculateSum                //method
}



// --> Way 2 (New way)
// We use an object called "mdoule.exports"   
// Since we will export multiple variables or methods, we will export it as an object
// We can omit giving the key and colon, and directly write the values
// The values will be the actual variables, methods we want to export
// JS itself will assume the key to be same as value (Shorthand)


module.exports = {
  x,                                       //variable
  calculateSum                             //method
}







// b) To import :-

// --> Way 1 :-
// Try to store the exported object in a variable using require()
// Use dot operator to access the required methods and variables from the object 

const obj = require("./sum.js");

const sum = obj.calculateSum(a, b);
console.log(obj.x, sum);



// --> Way 2 :-
// Destructure the exported object on the fly
// Then use the exported variables and methods directly
// We can even destructure only the variables / methods we want to import out of all the variables/methods that have been exported

const { calculateSum } = require("./sum.js");    // ommiting "x"

const sum2 = calculateSum(a, b);
console.log(sum2);






// ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 6) Why so much fuss on exports and imports?
// --> It would have been easier if we would have ommited the export

// Solution :-
// --> The names of variables in one module can conflict with the names variables of other modules. Hence, modules tend to protect their private variables and functions
// --> Hence, a module can use its own variable without conflicting with the same name variable from some other module (Unless we import the same name variable from the other module also)





// ******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************




// 7) The above type of pattern for imporing and exorting are known as "Common JS Modules (cjs) ".