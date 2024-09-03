
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