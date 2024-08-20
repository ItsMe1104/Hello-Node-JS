// 1) EJ Modules (ESM) or (mjs) :-

// --> Mostly known as ES6 modules.
// --> Different way of importing and exporting modules.



//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 1) Enable ES6 module patterns?

// --> By default in NodeJS applications, commonJS module is used
// By default, commonJS module is used, even if we dont make a package.json file

//           {
//             "type": "commonjs"
//           }


// --> To enable ES module,
// --> Create a package.json file
// --> Inside the file write,

//           {
//             "type": "module"
//           }






//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 2) Exporting and Importing :-


// --> a) export :-

// i) Named export :-
//we directly write export infront of the methods() / variables, we want to export
// We can export as many methods, variables as we want
export let a = 10;

export function abc() {
  console.log("Named export in ejs");
}



// ii) Default export :-
// At the end of the module, we use the keyword "export default" + variable/method name
// In every module, we can only export only one variable / method as a default export.

// Syntax :-
let b = 20;
export default b;




// --> b) import :-

//NOTE :- import here will not only import the required methods/variables only. It works exactly like require(), hence first the other module will be loaded and executed, then only our current module will execute. (Try console logging in other modules)


// i) Named import :-
// We import in the form of a destructured object
// We use the keyword "import" and "from" keywords along with "module_path" (extension can be ignored)
// No need of require()

//Syntax :-
import { x, calculateSum } from "./sum.js"





// ii) Default import :-
// We import directly as a variable
// We use the keyword "import" and "from" keywords along with "module_path" (extension can be ignored)
// No need of require()

//Syntax :-
import b_variable from "./sum.js"




//NOTE :- once we have selected the "type" as module in package.json, we cannot use require(). We can only use one type between "module" and "commonjs" in our whole app.




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 3) CommonJS Modules (cjs)    vs    ES Modules (mjs) :-

// i) In cjs --> "module.exports" is used to export, while "require()" is used to import.
//    In mjs, --> "export" is used to export, while "import" is used to import.




// ii) cjs --> By Default used in Node, unless we specify ejs in package.json
//     mjs --> By Default used in ReactJS, Angular




// iii) cjs --> Older way (Till now all the nodeJS repositories use this pattern and also in the industry)
//     mjs --> Newer way (Open JS foundation is now saying that ES modules will be the standard way of importing and exporting modules in future)

// NOTE :- In our course we will totally follow commonJS module only, as it is highly used in the current industry





// iv) cjs --> "this" points to empty object {}
//     ejs --> "this" points to undefined (try console logging it)





// v) cjs --> when it is requiring the modules using require(), it does it in a synchronous way, the next line of code will only be executed once the current line completes execution, hence once the other module is completely loaded using require(), the code of current module will not move ahead.
//     ejs --> Async option is there for asynchronously importing the other modules





// vi) cjs --> The code is run in non-strict mode
//     ejs --> The code is run in strict mode in default

// non-strict mode e.g :-
// --> we can directly define variables without var, let or const.
// --> The code will still be executed
z = 15;

// non-strict mode e.g :-
// --> we cannot define variables without var, let or const.
// --> The code will give error
z = 15;    // error --> z is not defined





//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 4) Nested Modules :-





//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 5) Making a directory as a module :-


// Let's say our calculate folder contains three separate modules namely divide.js, subtract.js, multiply.js

// calculate (directory)
//   --> divide.js
//   --> multiply.js
//   --> subtract.js





// Turning calculate (directory) ==> module

// STEP 1
// --> Create an "index.js" file inside the calculate directory
// --> Inside this index.js file, we have to import the required methods / variables from other modules and export them also
// --> import their methods / variables using require() one by one

const { calculateMultiplication } = require("./multiply.js")
const { calculateSubtraction } = require("./subtract.js")


module.exports = { calculateMultiplication, calculateSubtraction }



// STEP 2
// --> In the module "app.js" (or any other module) where we want to import the directory module, just import the methods/variables using require() and object destructuring.
// --> The path should now be of the directory, insted of index.js inside the directory
// --> Although the path to index.js would also work but the upper one is a shorthand.

const { calculateMultiplication, calculateSubtraction } = require("./calculate");




// ADVANTAGE :-
// --> Instead of making our main module messy by requiring 100s of modules for their methods / variables, we can group together all the other modules in a folder structure and then require it in our main module
// --> Our main module (here app.js) doesn't need to know how the directory structures its files.
//--> Behind the scenes the methods can come from same module or different modules.






//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 6) Importing JSON files.

// --> We dont need to export the JSON file, we just need to import it in our required module using require()

const data_json = require("./data.json");


// --> Then use JSON.stringify(variable_name) to use it (it will work even if we dont do it).
console.log(JSON.stringify(data_json));




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 7) Importing modules from inside the core of Node JS :-

// for e.g :- there is a module called util
// --> No need of exporting it
// --> Just import it using require() in our required module
// --> The path name is "node:module_name"

const util_importing = require("node:util")

// --> The util module gives access to an util object which contain lots of important functions and properties like .debug, .format, etc




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 8) Converting JSON to Object / Array :-


// a) JSON --> Object
// --> When receiving data from a web server, the data is always a string. Parse the data with JSON.parse(), and the data becomes a JavaScript object.
// --> JSON.parse() will only work if the data received is in form of a string or we have to first make it a string using JSON.stringify(data)

const data = '{"name":"John", "age":30, "city":"New York"}'
console.log(JSON.parse(data));




// b) JSON --> Array
// --> When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

const text = '["Ford", "BMW", "Audi", "Fiat"]';
console.log(JSON.parse(text));
