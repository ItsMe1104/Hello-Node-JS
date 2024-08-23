// Node.js has an event-driven architecture capable of asynchronous I/O.

// JS is a synchronous single-threaded language
// One thread only is required to run any piece of JS code.
// There is only one thread and we run JS engine on that.
// Thread is light weight process
// JS will execute the code in synchronous manner (line by line)
// Hence, due to this if some task has very heavy calculation, then the thread will be blocked




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/


// 1) Synchronous vs Asynchronous :-


// --> Synchronous = Blocking
// --> Asynchronous = Non-Blocking

// e.g :- Food counter
// --> Coke (0 min)
// --> Pizza (10 min)
// --> Maggie (5 min)


// Queue :-
// --> Person A) Coke
// --> Person B) Noodles
// --> Person C) Pizza
// --> Person D) Coke
// --> Person E) Noodles




// Synchronous :-
// --> A (0s)
// --> B (10 mins)
// --> C (10 mins + 5 mins) = 15 minutes
// --> D (10 mins + 5 mins + 0 mins) = 15 minutes
// --> E (10 mins + 5 mins + 0 mins + 5 mins) = 20 mins


// --> Order of Execution :-
// --> A (0) --> B (10) --> C (15) --> D (15) --> E (20)


// --> Conclusion :-
// --> Person D got blocked even though he ordered just a Coke which costed him 0 mins of himself but due to the waiting time of others, he had to wait for additional 15 minutes
// --> Same goes for person E
// --> JS Engine can only execute in this fashion






// Asynchronous :-
// --> A (0s)
// --> B (Waiting Area (No.1))
// --> C (Waiting Area (No.2))
// --> D (0s)
// --> E (Waiting Area (No.3))


// --> Waiting Area
// --> C (5 mins)
// --> B , D (10 mins)
// (Since noddles counter was busy for C hence D had to wait extra 5 mins)


// --> Order of Execution :-
// --> A (0) --> D (0) --> C (5) --> B + E (10)



// Conclusion :- Javascript is Synchronous but with the superpowers of Node, it becomes Asynchronous




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) Synchronous & Asynchronous Codes :-


//a) Synchronous codes :-

var a = 103645;
var b = 203415;

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

// JS engine can execute this code very fast.
// These tasks can execute immediately
// Time, tide and JS waits for nothing





//b) Asynchronous codes :-

// API call
https.get("https://api.fbi.com", (res) => {
  console.log("secret data:" + res.secret);
});

// File operations :-
fs.readFile("./gosspi.txt", "utf8", (data) => {
  console.log("File data", data);
});

// Timer functions :-
setTimeout(() => {
  console.log("Wait here for 5 seconds");
}, 5000);

// JS engine cannot process this code as this kind of code blocks it due to its slow nature
// Asynchronous tasks take time to execute



//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) Execution of Synchronous Code in JS Engine:-

var a = 103645;
var b = 203415;

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);




//--> Refer to the diagram for more clarification :-

//  V8 JS Engine contains :-
// --> Memory Heap :- Allocates memory to variables and put its value

// --> One Call Stack :- Runs on a single thread. Every code that we write is executed inside this call stack

// --> Garbage Collector :- It is used to clear the memory of unused variables and functions which wont be used later in the program (like the variables of a function after it is finished its execution)






// Process :-

// --> Whenever we run the code, a global execution context is created and pushed inside the Call Stack
// --> All the code is wrapped and executed inside the execution context
// --> It runs in a synchronous single threaded way

// --> a will be stored in memory
// --> b will be stored in memory
// --> multiplyFn() will be stored in the memory
// --> The code of multiplyFn() will also be stored inside the memory
// --> For variable 'c' there function call, hence a function execution context (FEC) is created and pushed at the top of the stack
// --> The code inside the multiplyFn() will now be running in the function execution context (FEC)
// --> The code will also run in a synchronous fashion

// --> The result of a*b will be stored in the memory heap in a variable result
// --> The result value in the memory heap is returned to the Global Execution Context from the function execution context
// --> Since the excution of the function is completed, the function execution context will pop out of Call Stack
// --> The Global Execution Context again starts execution
// --> The value returned by the multiplyFn is stored in variable 'c'
// --> 'c' will be stored in the memory Heap

// Once the whole code got executed, Global Execution Context gets popped out of the Call Stack which now becomes empty.





//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




// 4) Execution of Asynchronous Code in JS Engine:-

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