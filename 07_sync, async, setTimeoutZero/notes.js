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