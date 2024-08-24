

// 1) Execution of Asynchronous Code in JS Engine:-


// Asynchronous taks :-
// a) File operations
// b) Database operations
// c) API call
// d) Timer functions (setTimeout, etc)
// e) etc



// JS engine cannot do this alone
// Node JS gives superpower to JS Engine to interact with the OS and do these tasks.
// Accessing a file needs OS as it knows the location of the file
// JS engine needs superpowers to connect with databases
// OS can make anetwork call
// JS Engine does not have a concept of time to execute the Timer functions
// It needs to connect with the time function inside OS because OS manages time



// Node JS gets these superpowers through a library called "libuv"
// libuv is the superhero to provide the superpowers to Node
// If JS engine needs to do a file access, it offloads it to libuv, libuv talks to the file system, gets the response and gives it back to the V8 engine
// JS engine offloads all the asynchronous tasks to libuv
// Same case for other asynchronous tasks as well





//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 2) Libuv :-

// --> Asynchronous I/O made simple
// --> It is a C code (97%)
// --> To connect with OS, C is a good language because of its compiled nature and system calls
// --> Libuv acts as a middle layer between JS engine and OS
// --> It has a thread pool, eventloop, etc
// --> It has a I/O callback queue, timer's queue
// --> Manages File System, timers, etc
// --> Node JS is asynchronous because of libuv




// Where does it exist in Node JS library?
// --> deps (dependencies) --> uv (libuv)




//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 3) Process of asynchronous code execution in NodeJS :-


//Asynchronous Task :-
// --> A) API call
// --> B) Timer Function
// --> C) File Operations


//Code :-

var a = 103645;
var b = 203415;

// A) API call
https.get("https://api.fbi.com", (res) => {
  console.log("secret data:" + res.secret);
});

// B) Timer functions :-
setTimeout(() => {
  console.log("Wait here for 5 seconds");
}, 5000);

// C) File operations :-
fs.readFile("./gosspi.txt", "utf8", (data) => {
  console.log("File data", data);
});




function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);
console.log(c);




// Components :-

// a) Node JS :-
//    --> V8
//       --> Call Stack
//       --> Garbage Collector
//       --> Memory Heap
//    --> Libuv

// b) OS




// Refer to the image for more clarification :-

// Process :-

// --> Whenever we run a piece of code in Node JS, a Global Execution Context (GEC) is created in Call Stack
// --> Code will be executed inside (GEC) line by line
// --> Garbage Collector will also work in sync with the memory heap
// --> a will be stored in memory heap
// --> b will be stored in memory heap
// --> When API call comes under GEC, V8 offloads it to the libuv


// --> Libuv will now register the API call within itself
// --> It will also register the callback function registered within the API call, which will run after the API call has been made


// --> JS engine moves to the next line
// --> When a timer function like setTimeout() comes under GEC, V8 offloads it to the libuv


// --> Libuv will now register the Timer function (setTimeOut)within itself
// --> It will also register the callback function registered within the setTimeOut() , which will run after the counting time is over


// --> JS engine moves to the next line
// --> When a file handling operation like fs.readFile comes under GEC, V8 offloads it to the libuv


// --> Libuv will now register the File Handling Operation within itself
// --> It will also register the callback function registered within fs.readFile(), which will run after the file read is done


// --> JS engine moves to the next line
// --> JS will now make multiplyFn() to be stored in the memory
// --> The code of multiplyFn() will also be stored inside the memory
// --> For variable 'c' there function call, hence a function execution context (FEC) is created and pushed at the top of the stack
// --> The code inside the multiplyFn() will now be running in the function execution context (FEC)
// --> The code will also run in a synchronous fashion


// --> The result of a*b will be stored in the memory heap in a variable result
// --> The result value in the memory heap is returned to the Global Execution Context from the function execution context
// --> Since the excution of the function is completed, the function execution context (FEC) will pop out of Call Stack

// --> Once the FEC moves out of the call stack, all the memory that was allocated to the variables (here result) inside the multiplyFn() are cleared by the Garbage Collector

// --> The Global Execution Context again starts execution
// --> The value returned by the multiplyFn is stored in variable 'c'
// --> 'c' will be stored in the memory Heap
// --> console.log(c) is also executed by the V8 engine and on the console 'c' is printed

// --> After all the code is executed, GEC moves out of the call stack



// LIBUV TASK :-

// --> Libuv makes an API call, OS is taking its own time to fetch the server, getting back the data and giving it back to libuv
// --> Simultaneously libuv manages the other async tasks like running the timer and talking to OS and handling the file system
// --> Meanwhile the JS Engine is idle

// --> If any of the async task data is received by libuv, it provides its callback function to the JS Engine's callstack
// --> The callback function's Execution context is created and JS engine starts executing the callback function line by line
// e.g :- if the timer function inside the libuv finished its task, its callback is pushed inside the call stack and its console.log() is executed
// --> After the whole callback is executed, the FEC is popped out of callStack
// Same happens for all other async tasks, whichever completes their task, libuv provides their callback inside the V8 engine's call stack




//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 4) Conclusion :-
// --> V8 engine is synchronous but Node JS is asynchronous with the help of libuv
// --> Node JS can do async IO (file system, making an API call, etc)
// --> Node JS can do Non-blocking IO because it does not block the main thread inside V8 engine
// --> Node JS gets slow when its main thread gets blocked hence we should write code such that our main thread doesnt get blocked.