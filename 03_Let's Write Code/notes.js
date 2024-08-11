// 1) Installtion :-


// --> Go to https://nodejs.org/en/download/package-manager
// --> Choose your OS
// --> Select the LTS version
// --> Install Node js using comman line through nvm (Node Version Manager)

// OR

// --> Go to https://nodejs.org/en/download/package-manager
// --> Choose your OS
// --> Select the LTS version
// --> Use the prebuilt installer
// --> Just click next with default settings


// --> Installation issues :- very rare chances that issues occur because of your system, like earlier version of Node js might conflict, etc
// --> Google the error and follow through StackOverflow




//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 2) Verification :-


// --> Go to your OS terminal
// --> Type "node -v"
// --> If installed correctly , it will show the version of node js



// One more thing installed automatically with NodeJS is 'npm'
// --> npm is a registry which serves as a package manager for node

// --> Go to your OS terminal
// --> Type "npm -v"
// --> If installed correctly , it will show the version of 'npm'



// Both things are required to run node applications



//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) Running our JS code in NodeJs :-


// a) REPL :-
// --> Quickest and easiest way to run JS code is Node REPL
// --> REPL => Read Evaluate Print Loop


// --> In terminal give the command --> "node"
// --> REPL will open inside the terminal
// --> It works on read the code, evaluate the code, print the output and Loop back
// --> Any JS code will work now

// e.g :-
// 1 + 1
// > 2

// e.g :-
// > var a = "Hrithik Shaw"
// > a
'Hrithik Shaw'

// e.g :-
// > var i = 10
// > var j = 20
// > i + j
// > 30



// --> We have successfully run JS code in Node JS (Javascript Runtime Environment)
// --> Behind the scenes it uses V8 Engine
// --> Every JS code we wrote inside REPL, Node JS passed that code to V8 engine, and V8 Engine executed that code



// --> Node REPL is equivalent to Browser console because both Node js and Browser uses V8 engine behind the scenes





// b) Use VS code

// --> Install VS Code
// --> Create a folder, open it using VS Code
// --> Create a file called "app.js"  (Basic convention)
// --> Write JS code

// e.g :- var a = 10;
//        console.log(a);


// To run the file "app.js"
// --> Open the VS Code terminal (CTRL + ~)
// --> Go to the correct directory
// --> To execute the file , TYPE "node app.js"





//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/


// 4) Global Object inside NodeJS


// --> The Global Object inside Browser is "Window" object
// --> we get access to it inside the console
// --> Type "window" in browser console
// --> Even if we type "this" , "frames", "self" it also points to the Global Object
// --> It is not given by V8 engine, but is given by the Browser



// --> The Global Object inside NodeJS is "global" object
// --> Try to console log "global"
// --> Here we get the API's of setTimeout(), setInterval(), setImmediate(), etc
// --> Hence, if we want to execute the above functions, it comes from Global object
// --> It is not given by V8 engine, but is given by the NodeJS as a superpower
// --> V8 engine only understands global after the access of global is gien by NodeJS



// --> "this" keyword inside NodeJS
// --> if we try to console log "this" inside Node JS environment, we get an empty object






//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/


// 5) globalThis :-


// In Browser console, --> even if we type "window", "this", "self", "frames" , all refers to the Window Global Object. Why?

// --> When browser were created, the Global object was named as window
// --> then the concept of this made "this" pointing to the global object
// --> Then the concept of webworkers came in for which they started using "self" to denote the global object
// --> When Node JS was created, they used "global" to refer to the Global Object


// --> To prescribe a common Global Object for every platform because everyone wrote JS
// --> Then in 2020, Open JS foundation standardized the Global Object for all the runtime environments
// --> the first proposal was for "global", but the commitee rejected as some people / website might have used global as a variable name, hence there would be a conflict with their variable
// --> Same reason was cited for "window", "self", etc too


// --> The commitee came with a new word "globalThis" which will reference the Global Object in all JS runtime enviroments
// --> All the browser's latest versions including NodeJS, etc are supporting it

// --> Try console logging "globalThis", we will see it refers to the Global Object


// --> Also in NodeJS, try doing 
console.log(globalThis === global);


// --> Also in Browser, try doing 
console.log(globalThis === window);


