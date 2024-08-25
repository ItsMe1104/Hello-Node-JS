// [BONUS] File Handling in Node JS

//File Handling :- means to do operations on files like read, create, write, etc



// **************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


// 1) "fs" module

// --> It is an inbuilt module of Node JS
// --> It is a superpower given by Node JS alongside V8 engine
// --> To interact with files, we first need to import / require this module in our current module (here file.js)
// --> The module returns an object which contains various functions to interact with the files.

const fs = require("fs");
// or const fs = require("node:fs");

// (variable name can vary)




//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) Creating / Writing in a file :-


// a) fs.writeFileSync("x","y")
// --> x = file path along with extension
// --> y = text we want to enter in it

fs.writeFileSync("test.txt", "This is a test file");




// Features :-
// --> It is a synchronous method, hence it will block the main thread until its operation is finished and then let the JS Engine execute the next line.
// --> It is a blocking request
// --> It returns undefined. (Try storing in a variable and then console.logging it)
// --> If the file is not present, it will create the file.

// --> If the file is present, it will overwrite the whole file.





// b) fs.writeFile("x","y","z")
// --> x = file path along with extension
// --> y = text we want to enter in it
// --> z = callback with an error parameter, incase of any error while creating / writing in the file

fs.writeFile("test.txt", "This is a test file", (err) => {
  console.log("File Error: ", err);
});



// Features :-
// --> It is an asynchronous method, hence it will not block the main thread and offload it to libuv. After the operation is completed, its callback will be returned to the callStack once its empty.
// --> It is a non-blocking request
// --> It does not return anything, any error while creating or writing the file will be handled by the callback function 
// --> If the file is not present, it will create the file.

// --> If the file is present, it will overwrite the whole file.





//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) Reading in a file :-


// a) fs.readFileSync("x","y")
// --> x = file path along with extension
// --> y = type of encoding of that file (utf-8 for text files)
// different encodings for binary, video files
// returns the text of that file in string format

const result = fs.readFileSync("test.txt", "This is a test file");
console.log(result);



// Features :-
// --> It is a synchronous method, hence it will block the main thread until its operation is finished and then let the JS Engine execute the next line.
// --> It is a blocking request

// --> It returns the text of that file in string format hence we need to store it in a variable

// --> If the file is not present or corrupted file, it will give error which we have to handle using try-catch block




// b) fs.readFile("x","y","z")
// --> x = file path along with extension
// --> y = type of encoding of that file (utf-8 for text files)
// --> z = callback with two arguments. 1st argument as error, incase of any error while reading the file (corrupted file / file not found). Second argument is a variable which will store the text from that file in string format

fs.writeFile("test.txt", "This is a test file", (err, result) => {
  if (err) {
    console.log("Error: ", err);
  }
  else {  // err = undefined
    console.log(result);
  }
});




// Features :-
// --> It is an asynchronous method, hence it will not block the main thread and offload it to libuv. After the operation is completed, its callback will be returned to the callStack once its empty.
// --> It is a non-blocking request

// --> It does not return anything, rather expects a callback as the third argument which handles both the error as well as the reading result of that file in a string format




