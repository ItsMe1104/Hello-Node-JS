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