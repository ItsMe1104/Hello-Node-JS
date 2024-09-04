
// --> process.nextTick() and promise callbacks have their own separate priority queue immediately


//***************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 1) Predict the output of the following code :-

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer Expired"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log("a =", a);
}

printA();
console.log("Last line of the file.");



// Output :-
// a = 100
// Last line of the file
// process.nextTick
// Promise
// Timer Expired
// setImmediate
// File Reading CB




// Short Explanation :-
// --> First the sync tasks will get executed
// --> Once the CallStack is empty, Event Loop checks the callback queues
// --> Since process.nextTick and promise callbacks are on priority queues, hence first they will be sent to call Stack one by one among all the callbacks in other queues
// --> After that the callback from Timer queue will be sent
// --> Since the file handling takes time, hence its callback will not be registered in the callback queue
// --> Hence the callback for the check phase will be sent to callStack that is from setImmediate()
// --> In the next cycle in the poll phase the callback of fille handling will be sent to the call Stack

// END



//***************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) Idle state of Event Loop :-

// --> When both the Call Stack and the callback queues are empty, hence the Event Loop becomes idle
// --> The Event Loop completes the current cycle till it reaches the poll phase and waits
// --> If something comes (User request) in the poll phase, it will first execute the innerloop and then from poll phase
// --> In this cycle, the Event loop doesnt start from the beginning that is timer phase but starts from the poll phase itself
// --> Hence in this cycle, the check phase will be executed after the poll phase and the cycle continues




//***************************************** */

// Event Loop in Browsers vs Event Loop in Libuv :-

// --> In browsers, the event loop keeps on runninh
// --> In Node, when the event loop is idle, it waits at the poll phase. (Hence, it is called semi infinite loop)




//***************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) Predict the output of this code :-

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);

  process.nextTick(() => console.log("2nd nextTick"))

  setImmediate(() => console.log("2nd setImmediate"))

  console.log("File Reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file.");



// Output :-
// --> Last line of the file.
// --> nextTick
// --> Promise
// --> Timer Expired
// --> setImmediate
// --> File Reading CB
// --> 2nd nextTick
// --> 2nd setImmediate
// --> 2nd Timer




// Explanation :-
// --> First the async task will get executed
// --> All the async tasks get offloaded to libuv


// ****** First cycle of Event Loop *************
// (INNER CYCLE)
// --> process.nextTick() is sent to callStack and executed
// --> Promise callback is sent to callStack and executed

// (TIMER PHASE)
// --> setTimeout() callback is pushed to callStack and executed

// (INNER CYCLE)
// --> No callback to be executed of process.nextTick() and promise callbacks


// (POLL PHASE)
// --> Since File Handling takes time, there is no callback in the callback queue for this phase

// (INNER CYCLE)
// --> No callback to be executed of process.nextTick() and promise callbacks


// (CHECK PHASE)
// --> setImmediate() callback is pushed to callStack and executed

// (INNER CYCLE)
// --> No callback to be executed of process.nextTick() and promise callbacks

// (CLOSE PHASE)
// --> No socket is required to get closed.



// ****** Second cycle of Event Loop *************


// (INNER CYCLE)
// --> No callback to be executed of process.nextTick() and promise callbacks

// (TIMER PHASE)
// --> No callback is present for this phase

// (INNER CYCLE)
// --> No callback to be executed of process.nextTick() and promise callbacks


// (POLL PHASE)
// --> Now the Event Loop waits here as both the callStack as well as callback queues are empty
// --> After some time the callback of file handling operation enters the respected callback queue
// --> It contains further mix of sync and async tasks inside
// --> Event Loop gives the callback to the callStack
// --> Call Stack starts executing line by line
// --> It executes the sync task of console.log()
// --> offloads all the async task of setTimeout(). process.nextTick() and setImmediate to livuv again


// ***** Cycle starting after poll phase :-
//  (INNER CYCLE)
// --> process.nextTick() is sent to callStack and executed

// (CHECK PHASE :- as loop starts after poll phase)
// --> setImmediate() callback is pushed to callStack and executed

// (INNER CYCLE)
// --> No callback to be executed of process.nextTick() and promise callbacks

// (CLOSE PHASE)
// --> No socket is required to get closed.

// (INNER CYCLE)
// --> No callback to be executed of process.nextTick() and promise callbacks

// (TIMER PHASE)
// --> setTimeout() callback is pushed to callStack and executed

// ***** END :- Event loop waits in the Poll phase



// Conclusion :-
// --> When idle, Event loop waits in the poll phase
// --> When starting again, it starts to execute starting from the next phase (after Inside Loop) of poll phase instead of the actual beginning




//***************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 4) Predict the output of the code :-


setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise1").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  Promise.resolve("Promise2").then(console.log);
  setTimeout(() => console.log("Timer Expired2"), 0);
  console.log("nextTick")
});

console.log("Last line of the file.");




// Output :-
// --> Last line of the file
// --> nextTick
// --> inner nextTick
// --> Promise1
// --> Promise2
// --> Timer Expired
// --> setImmediate
// --> File Reading CB



// Explanation :-
// --> Same as previous problem (Go step by step)
// --> Note that the callback queues serve as FIFO, hence Promise2 inside the process.tick will be put in the callStack only after Promise1 has been already put in callStack. As Promise1 entered the callback queue first
// --> Same happened with inner setTimeout and outer setTimeout


// Conclusion :-
// --> ALL individual Callback queues are normal FIFO for all the async tasks