
// Is Node JS single threaded or multi-threaded ?


// 1) Thread Pool
// --> Whenever there is an async task, v8 engine offloads it to libuv
// --> For some of the complex tasks like reading a file, we cannot use our main thread as it will block all the synchronous tasks
// --> Hence, v8 engine offloads it to libuv
// --> Now libuv will find a thread from its thread pool and then it will run the file system using that thread
// --> Hence libuv uses that thread pool to request the file


// Note :-

// By default there are 4 threads available in thread pool, but it can be increased or decreased according to our code

// Once the file reading / request is done, the thread becomes vacant and is available for some other operation

