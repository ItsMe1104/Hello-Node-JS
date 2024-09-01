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




// 3) Phases of Event Loop :-