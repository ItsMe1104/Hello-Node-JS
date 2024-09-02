// Node JS has two core portions :-
// --> v8 Engine which runs on the main thread
// --> libuv
// --> other core Node JS modules



//*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/


// 1) Libuv :-

// There are three main components of libuv :-
// --> Event Loop
// --> Callback Queues
// --> Thread Pool


// Some asynchronous tasks are offloaded to libuv



// --> Asynchronous I/O and NonBlocking I/O in Node JS can only be done because of Libuv
// --> Node JS is possible for Asynchronous and NonBlocking IO only




// Internals of LibUV function :-
// --> While the JS Engine is executing some piece of code, and the result of API call or any other async task has been received by Libuv
// --> The callback of that async function has to wait inside the callback queue until the V8 Engine is empty or it is idle
// --> There are many callback queues for different types of async functions
// --> There are separate queue for timers, separate queue for API calls, separate queue for other async tasks
// --> If more than one async tasks have returned their result in same time, then they all might come at same time for execution
// --> All these callbacks will wait inside their respective callback queues till the JS engine becomes free.
// --> Libuv will hold these functions in callback queue and later they will be executed once the JS engine's call stack is empty
// --> The order in which the callbacks that are waiting inn callback queue will be passed in call Stack are managed by Event Loop



//*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/


// 2) Event Loop :-

// --> It is like a loop that keeps running, and its job is to keep checking at the call Stack and the callback queues.
// --> Suppose some tasks are waiting in the callback queue and finds the callStack as empty, hence it will take one of the task from the callback queue, and give it to callStack for exeution



// Race condition of all async tasks
// --> If there arises a situation of race condition between one or more tasks in the callback queue waiting to be executed
// --> Now, the Event Loop has to prioritize
// --> This situation is mainly faced by a server
// --> Hence, it is the job of Event loop, to push all these tasks in the callStack in correct time and correct order.
// --> The priority of these tasks is also managed inside Event Loop (It works like an orchestrator).
// Event loop has to wait for JS Engine to be idle / call Stack to be empty / the main thread to be unblocked so that it can push one task from callback queue to the call Stack





//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// Refer to image "EventLoop1.jpg"


// 3) Phases of Event Loop :-

// --> There are 4 major phases of Event Loop :-
// i) timer
// ii) poll
// iii) check
// iv) close

// --> All executes one after the other
// --> All these phases have their own callback queue in which they store their respective callbacks


//*************************** */


// i) timer phase:-

// --> It is the first phase
// --> In timer phase, all the callbacks set by setTimeout() or setInterval() are executed in this phase
// --> Hence, Event Loop first prioritizes the timer callback


//************************** */


// ii) poll phase:-

// --> It is the second phase
// --> In poll phase, all the callbacks associated with I/O callbacks are executed in this phase
// --> I/O call back includes incoming connections (users making an API call to our server), running controllers, data / network calls, file handling, fs, crypto, http.get
// --> Most of the callbacks will be executed in this poll phase.


//**************************** */


// iii) check phase :-

// --> It is the third phase
// --> In check phase, all the callbacks associated with setImmediate() are executed in this phase
// --> setImmediate is also an utility API


//**************************** */


// iv) close phase :-

// --> It is the fourth phase
// --> In close phase, all the close operations happen (like if we have opened a socket and now we want to close it)
// --> handling the socket.on("close") will happen in this phase
// --> This phase is mainly associated with closing or cleanup



// Hence, during Race Condition :-
// the callback priority is related to:-
// timer --> poll --> check --> close


// Event loop keeps checking the callback queue as well as the callStack.
// Once the callStack is empty, Event loop will take some task from the callback queue and execute it accordingly.




// NOTE :- Before every phase, Event Loop also follows an inside cycle



//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 4) Inside cycle in Event Loop :-

// --> It is followed before every phase
// --> It is more sort of a priority cycle
// --> It contains two phases
// --> process.nextTick() & promise callbacks
// --> These two phases also have their separate callback queue.



// process.nextTick() :-
// --> It is first phase in the Inside Cycle.
// --> It is a way of handling some operations. Through this we can also schedule some callbacks (Discussed Later).


// promise callbacks :-
// --> It is the second phase in the Inside Cycle.
// --> Suppose we have a promise and it is resolved, now there is a callback which needs to be executed


// These two phases will be executed before each phase.
// --> Before starting of each phase, Event Loop will check if there is a callback waiting for process.nextTick() or if there is a promise callbak waiting
// --> If there are, then it will execute the above callbacks and then it will enter a phase




// Flow of Event Loop :-

/*********** START ********** */

// --> process.nextTick() 
// --> promise callback
// -->        TIMER PHASE (setTimeout, setInterval)
// --> process.nextTick() 
// --> promise callback
// -->        POLL PHASE (I/O Callbacks)
// --> process.nextTick() 
// --> promise callback
// -->        CHECK PHASE (setImmediate)
// --> process.nextTick() 
// --> promise callback
// -->        CLOSE PHASE (Socket.on("close"))
// .
// .
// .
// --> The same loop continues

/************** END ********** */




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 5) Some Examples along with their order of execution :-



// a) Given a list of async tasks waiting inside the callback queue ready to be executed

process.nextTick(cb);
Promise.resolve(cb);
setTimeout(cb, 0);
setImmediate(cb);
fs.readFile("./file.txt", cb);
https.get("URL", cb);

// Tell about the order of execution :-



// --> SOLUTION :-

// process.nextTick(cb) --> from the 1st phase of inside cycle before Timer phase

// Promise.resolve(cb) --> from the 2nd phase of inside cycle before Timer phase

// setTimeout(cb) --> in the Timer Phase

// fs.readFile("./file.txt", cb) --> in the Poll phase (1st come first serve inside poll phase)

// https.get("URL",cb) --> in the Poll phase ((1st come first serve inside poll phase))

// setImmediate(cb) --> in the Check phase





// **************************************************


// b) Predict the output of this code :-


const a = 100;
setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer Expired"), 0);

function printA() {
  console.log("a =", a);
}

printA();
console.log("Last line of the file.");


// Outputs :-
// a = 100
// Last line of the file.
// Timer Expired
// setImmediate
// File Reading CB





// Explanation :-

// --> First the a is stored in memory heap with value 100

// --> Then JS engine offloads the setImmediate async task to libuv
// --> Since it is immediately executed by libuv, its callback is registered in the respective callback queue for setImmediate callbacks

// --> Then JS engine offloads the file handling async task to libuv
// --> Since it will take some time to read the file, Libuv keeps on executing it

// --> // --> Then JS engine offloads the setImmediate async task to libuv
// --> Since it has a waiting time of 0, it will be immediately executed by libuv, its callback is registered in the respective callback queue for Timer callbacks

// The function printA is stored in memory heap
// When JS Engine sees the printA() call, it goes to the memory heap and executes the function

// HENCE, a = 100 is printed in console.

// Now the console.log is executed and "Last line of the file" is printed in the console.



// NOW THE CALL STACK IS EMPTY :-



// Now the Event Loop knows that the call Stack is empty, it will check for process.nextTick(cb) and Promise callbacks in respective callback queues
// Since, there is none, the Timer phase is executed
// Event Loop sees the callback of Timer queue
// It finds the setTimeOut callback waiting in the Timer callback
// It passes that callback to the call Stack
// JS Engine executes the call Stack and prints "Timer expired"
// Now since no more Timer callbacks left, it moves out of Timer phase


// Now the Event Loop knows that the call Stack is empty, it will check for process.nextTick(cb) and Promise callbacks in respective callback queues
// Since, there is none, the poll phase is executed
// Since the file reading operation takes time, its callback is still not executed in the callback queue for file handling
// Hence, it moves out of Timer phase


// Now the Event Loop knows that the call Stack is empty, it will check for process.nextTick(cb) and Promise callbacks in respective callback queues
// Since, there is none, the check phase is executed
// Event Loop sees the callback of setImmediate queue
// It finds the setImmediate callback waiting in the Timer callback
// It passes that callback to the call Stack
// JS Engine executes the call Stack and prints "setImmediate"
// Now since no more Timer callbacks left, it moves out of check phase


// Now the Event Loop knows that the call Stack is empty, it will check for process.nextTick(cb) and Promise callbacks in respective callback queues
// Since, there is none, the close phase is executed
// Since, there is nothing to be closed
// Hence, it moves out of Close phase
// Now one cycle of Event Loop is completed


// Now the file handling operation might have been executed, and its callback might have been registered in the respective callback queue

// Again Event Loop goes to :-
// --> process.nextTick()
// --> promise callback
// --> Timer phase
// --> process.nextTick()
// --> promise callback
// --> Poll phase


// Event Loop sees the callback of readFile() in file Handling queue
// It passes that callback to the call Stack
// JS Engine executes the call Stack and prints "File Hanling CB"


// Hence, now both the callStack as well as the callback Queues are empty.



// CONCLUSION :-
// File read operation happens in poll phase
// setImmediate operation happens in check phase
// Still File read operation will happen in the next cycle
// Because the file reading operation takes time