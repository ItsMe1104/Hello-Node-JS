//JS Engine executes the synchronous code very fast

// For Asynchronous code like file handling, Database communication, Api call, Timer functions, JS Engine offloads it to libuv. The JS Engine continues executing the synchronous code, and once the call stack is empty, libuv starts sending the callbacks of the completed asynchronous tasks to the call stacks and then the JS Engine executes their call stacks synchronously




// Prerequisites :-

// a) "fs" module :- To interact with the file system and OS, Node JS has a superpower known as "fs" module. It returns an object which contains various functions to read, write, create, append, etc in a file.

//      --> To import :-
//          const fs = require("node:fs");    {variable name can vary}
//     or   const fs = require("fs");




// b) "https" module :- To do any network call or interact with the data from API, Node JS has a superpower known as "https" module.

//    -->   To import :-
//          const https = require("node:https");     {variable name can vary}
//     or   const https = require("https");




// NOTE :-
// --> The modules imported using require() are done synchronously in "common js modules"
// --> Hence, all the modules will be required in a synchronous manner.
// --> Hence, it is advised that we require() all the modules in the starting only


//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// 1) Output of the following sync and async code :-

const fs = require("node:fs");
const https = require("node:https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// API call
https.get('https://dummyjson.com/products', (res) => {
  console.log("Fetched Data Successfully");
})

// Timer Function
setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// File Handling
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data : ", data);
})

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(c);
console.log(c);




// Brief Points regarding the execution :-

// --> GEC is created in the call stack
// --> First the fs and http modules will be required synchronously using libuv
// --> Then JS engine prints "Hello World"
// --> Then JS engine puts the variables a,b in memory heap
// --> JS engine offloads the HTTP request to libuv, and libuv stores its callback function
// --> JS engine offloads the timer function to libuv, and libuv stores its callback function
// --> JS engine offloads the file handling to libuv, and libuv stores its callback function
// --> JS engine will then store the multiplyFN() into the memory heap
// --> JS Engine sees the multiplyFN() call
// --> FEC is created in the call stack
// --> JS engine finds the function body from the memory and starts executing the function code line by line
// --> It stores the local function variables in memory heap and then does the calculation
// --> It returns the result to the GEC from FEC
// --> FEC gets popped out of call stack
// --> Garbage collector cleans the local function variables from memory heap
// --> The result returned in GEC is stored in "c" in memory heap
// --> Then JS engine prints the value of "c" from memory heap
// --> GEC is popped out of call stack


// ALL the async tasks are running in parallel in libuv
// --> file system is faster (unless its a very huge file) as we just need to communicate with the OS (40-50 ms)
// --> API call generally takes 100,200,500 ms
// --> setTimeout with 5000 ms will take the longest time


// --> Now after any async task is executed by libuv, GEC is again pushed into call Stack
// --> the callback of that async task is pushed into the call Stack and its execution context is created. The callback is executed synchronously unless another async task is indie that callback
// --> for e.g :- now the callback of file handling will come in call stack. Its data will be stored in Memory Heap
// --> Now JS Engine will print the data into console from the memory heap
// --> Now the the callback's execution context will be popped out
// --> The garbage collector will clean the file data from the memory heap

// --> Now the other async tasks will proceed in the same way as the file handling


// NOTE :- No matter what happens, the async task's callback can only enter the call stack once the call stack is empty

// Hence the file handling callback came after all the synchronous code was already executed
// The other async task's call back will only enter the call stack once the file handling callback has finished its execution and moved out of the call stack making the call stack empty.




// Output :- (can vary depending on the file size)
//=> Hello World
//=> Multiplication result is : 22637556228
//=> File Data : This is the file data.
//=> Fetched Data Successfully
//=> setTimeout called after 5 seconds




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// 2) Blocking Sync code :-

var a = 1078698;
var b = 20986;

// Blocking Sync task
fs.readFileSync("./file.txt", "utf8");
console.log("This will execute only after file Read");

console.log(a + b);



// The function readFileSync() is a blocking sync task. It will make the JS Engine wait and not go the next line till its task is executed by the libuv and returned back to the GEC
// Normally these sync functions do not have a callback function



// Process :-
// --> The GEC is established in Call Stack
// --> Now a & b are stored in memory Heap
// --> The code will block on the readFileSync() function
// --> JS Engine sends the function to libuv
// --> Libuv executes the task
// --> Once the task is executed by Libuv
// --> A value is returned to the GEC (mostly undefined) signifying that the task is completed
// --> Now the JS Engine is allowed to move to the next line
// --> Now JS Engine fetches the value of a & b from the memory heap and then, evaluates it and then prints it in the console
// --> GEC is popped out of call stack



// Conclusion :-
// --> As a good developer, it is not recommended that we block our main thread using these "Sync" functions unless very much required as it will keep blocking the requests from clients made onto the server






//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 3) Crypto module :-


// --> Node JS has many inbuilt core modules (See from documentation)
// --> Some of them is crypto, https, File System (fs), Domain, DNS, Events, OS, REPL etc
// --> These are extra utilities which Node JS gives
// --> There is even a console module from where we actually are using console.log() in Node JS
// --> There is a Zilib module which is used to compress a file



// Require the crypto module :-
const crypto = require("crypto");

//or
// const crypto = require("node:crypto");



//************************


// Generating a password or a key :-

// a) Async function :-

//-->  crypto.pbkdf2("a","b",c,d,"e",f)

// pbkdf  = Password Based Key Derivation Function 2
// a = Any string to be used as password (hello World)
// b = salt for encryption (salt)
// c = iteration (the greater it is the stronger / complex will be the password to decrypt or crack)  (500000)
// d = key length (50)
// e = digest (algorithm we want to use) (sha512)
// f  = callback with first paraeter as error and the second parameter as the resultant key

crypto.pbkdf2("helloWorld", "salt", 500000, 50, "sha512", (err, key) => {
  if (err)
    console.log("Error :", err);
  else
    console.log("Your encryted key is : ", key);
})

// It is an async code hence it is offloaded to libuv by the JS Engine






// b) Sync function :-

//-->  crypto.pbkdf2("a","b",c,d,"e")

// pbkdf  = Password Based Key Derivation Function 2
// a = Any string to be used as password (hello World)
// b = salt for encryption (salt)
// c = iteration (the greater it is the stronger / complex will be the password to decrypt or crack)  (500000)
// d = key length (50)
// e = digest (algorithm we want to use) (sha512)

const crypto_key = crypto.pbkdf2Sync("helloWorld", "salt", 500000, 50, "sha512")
console.log(crypto_key);
console.log(typeof crypto_key);

// --> It is a sync function which will block the main thread (To experience increase the value of increment to 5000000)
// --> returns the encrypted key in the form of an object




//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// NOTE :-
// --> All the functions with "Sync" doesnt have a callback function, because libuv doesn't register their callbacks.
// --> The main thread holds on till the async task is completed by libuv
// --> It should not be used



//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 4) Output of the following Code :-

const crypto = require("crypto");
console.log("Hello World");

var a = 1078698;
var b = 20986;

//Sync function
const crypto_key1 = crypto.pbkdf2Sync("helloWorld", "salt", 500000, 50, "sha512")
console.log("First Key is Generated.");
console.log(typeof crypto_key);

//Async function
crypto.pbkdf2("helloWorld", "salt", 5000000, 50, "sha512", (err, key) => {
  if (err)
    console.log("Error :", err);
  else
    console.log("Second Key is Generated ", key);
})


function multiplyFN(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFN(a, b);
console.log("Multiplication result is : ", c);




// OUTPUT :-
// Hello World
// First Key is Generated
// object
// Multiplication result is : 22637556228
// Second Key is Generated <Buffer 0f 20 ff 2e 73 37 4d dc>




//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 5) setTimeOutZero

// --> the timeout function which has the waiting time of 0 ms
// --> It is an async function hence it is offloaded to libuv

setTimeout(() => {
  console.log("It will not be executed instantly");
}, 0)


//--> It might seem that this callback will be executed instantly as libuv will send the callback of this setTimeout function immediately to the CallStack.
//--> But in reality since it is an async function, hence it will be offloaded to the libuv as per the normal process.
//--> Now, libuv will send its callback to the CallStack only after the CallStack is empty with all the synchronous code
//--> Imagine if some Sync function is written blocking the main thread, hence no matter how much time it takes for the main thread to complete all the synchronous functions
//-->The callback of setTimeOutZero will not be loaded into the callStack.



// e.g :-


console.log("Hello World");

var a = 1078698;
var b = 20986;

//The callback will only be pushed to call Stack once the callStack is empty
setTimeout(() => {
  console.log("Call me write now");
}, 0);

setTimeout(() => {
  console.log("Call me after 3 seconds");
}, 3000);

function multiplyFN(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFN(a, b);
console.log("Multiplication resut is : ", c);


//setTimeOut(0) comes with terms and conditions applied, that is it will be executed 0 seconds only after the call stack of main thread is empty 