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



// ii) cjs --> Older way (Till now all the nodeJS repositories use this pattern and also in the industry)
//     mjs --> Newer way (Open JS foundation is now saying that ES modules will be the standard way of importing and exporting modules in future)


// NOTE :- In our course we will totally follow commonJS module only, as it is highly used in the current industry