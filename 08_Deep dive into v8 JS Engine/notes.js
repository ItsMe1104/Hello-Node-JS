// V8 JS Engine is developed by Google and till now maintained by Google

// The two major components of Node JS are :- V8 Engine and Libuv
// There are other libraries / modules also like fs, crypto, http, etc




// ********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

// 1) Stages of Execution in V8 Engine :-

// --> Whenever we give our code to the V8 Engine, it goes through alot of stages :-


// The stages are :-

// A) Parsing
// B) Interpreter




// ********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

// 2) Parsing Stage :-

// --> The steps in Parsing Stage are :-

// a) Lexical Analysis (Tokenization)
// --> The code is broken down into tokens
// --> Tokens are small / unit pieces of code

//for e.g : - var a = 10;
//Separate Tokens --> var, a, =, 10, ;

// --> V8 engine can only read your code token by token and not line by line




// b) Syntax Analysis (Parsing)
// --> The tokens are combined together to form an Abstract Syntax Tree (AST)
// --> It is in form of a tree but it is somewhat in form of JS objects

// Go to astexplorer.net for more clarification




//**************************************** */

// NOTE ABOUT AST :-

// for e.g (Variable Declaration):-
// --> var abc = "Namaste Node"

// --> Whenever JS Engine sees a "var", "let", "const", it knows its a variable declaration
// --> There should be a indentifier (the name that we give to the variable)

// Hence, it creates an object with Identifier and Literal in the following format

//   VariableDeclarator {
//      type : "Variable Declarator"
//      start : 2
//      end : 28
//      declarations: [
//         VariableDeclarator {
//          type: "VariableDeclarator"
//          start: 6
//          end : 27
//          id : Identifier {
//             type : "Identifier"
//             start : 6
//             end : 7
//             name : "abc"
//           }
//          init : Literal {
//            type : "Literal"
//            start: 10
//            end: 27
//            value: "Namaste Node"
//           }
//      ]
//      kind : "var"
//   }


// --> start and end properties are managed by JS engine internally
// For declarations, we have Identifier as "id" and Literal as "init"
// --> For identifier we have a name field which is the name of the variable
// --> For Literal we have the value = the value of our variable
// --> If we dont initialize a value (like var x;), then the Literal Object will be null



//*****************************************


// SYNTAX ERROR :-

//--> Error due to which we cannot generate an Abstract Syntax Tree

// var a = ;

// Error while making AST as JS Engine found unexpected Token while it was expecting a literal after the "=" sign
// When JS Engine reads token by token and when it finds an unexpected token it throws error


//*******************************************




// ********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


// 3) Prerequisites :-


// Types of languages :-

// --> a) Interpreted :- The interpreter starts to read the code line by line and executes it.
// --> Fast Initial Execution
// --> Interpreters are present


// --> b) Compiled :- The whole High Level code is first compiled into machine code and then the machine code is executed
// --> Initially heavy but executed fast
// --> Compilers are present





// Question) Is JS a compiled langauge or interpreted language ?

// --> JS uses an (Interpreter + Compiler) to work
// --> JS engine (V8) has an interpreter as well as a compiler.
// --> The compilation method in JS is called JIT compilation (Just in Time)





// ********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 4) Interpreter Stage (refer the pic IntrpreterStage.png):-

// --> When the AST is passed into the Interpretr
// --> The name of the interpreter in Google's V8 Engine is Ignition Interpreter
// --> Its job is to convert the AST to Byte Code line by line
// --> This Byte Code is finally executed

// --> There is also a compiler called Turbo Fan Compiler
// --> It works behind the scenes
// --> The Ignition Interpreter recognizes some code which is used alot (e.g some function, variable, piece of code)
// --> The code that is used alot means which is executed again and again or there are chances of optimization.
// --> The Ignition Interpreter gives this code (known as HOT Code) to Turbo Fan Compiler so that it can compile and optimize that code
// --> So that from next time that code executes very fast
// --> The Turbo Fan Compiler converts that code to "Optimized Machine Code"
// --> This Optimized Machine Code is executed

// --> This process of Iginition Interpreter providing the HOT Code to Turbo Fan Compiler for optimized Machine Code is called Optimization
// --> Through this some drawback of slow execution of Interpreter is covered.



//****************************************************


// Deoptimization of Optimized Machine Code :-

// --> In some scenarios, we have to deoptimize the machine code

// --> For e.g :-
// ==> There is a function sum(a,b) to calculate sum of two numbers
// ==> If this function is called again and again, Ignition Interpreter will provide this Hot code to turbofan compiler for optimization
// ==> While optimizing the code, TurboFan Compiler makes assumptions



// ********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

