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
// --> y = text we want to enter in it (string)

fs.writeFileSync("./test.txt", "This is a test file");




// Features :-
// --> It is a synchronous method, hence it will block the main thread until its operation is finished and then let the JS Engine execute the next line.
// --> It is a blocking request
// --> It returns undefined. (Try storing in a variable and then console.logging it)
// --> If the file is not present, it will create the file.

// --> If the file is present, it will overwrite the whole file.





// b) fs.writeFile("x","y","z")
// --> x = file path along with extension
// --> y = text we want to enter in it (string)
// --> z = callback with an error parameter, incase of any error while creating / writing in the file

fs.writeFile("./test.txt", "This is a test file", (err) => {
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

const result = fs.readFileSync("./test.txt", "This is a test file");
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

fs.readFile("./test.txt", "This is a test file", (err, result) => {
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





//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) Adding Content in a file (without overwriting):-
// Very useful for making log file everytime someone enters in our website


// a) fs.appendFileSync("x","y")
// --> x = file path along with extension
// --> y = text we want to enter in it (string)


// e.g :-
fs.appendFileSync("./test.txt", "Adding Date\n");

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())

fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);


// Features :-
// --> It is a synchronous method, hence it will block the main thread until its operation is finished and then let the JS Engine execute the next line.
// --> It is a blocking request
// --> It does not return anything
// --> It is used to append the content in the file
// --> It just appends the content from the next character without giving any space, hence we need to manage the spacing and new lines ourselves.

// --> If the file is not present or corrupted file, it will give error which we have to handle using try-catch block




// b) fs.appendFile("x","y","z")
// --> x = file path along with extension
// --> y =  text we want to enter in it (string)
// --> z = callback with the 1st argument as error, incase of any error while appending in the file (corrupted file / file not found).


fs.appendFile("./test.txt", `${Date.now()} Hey There\n`, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Content Appended");
  }
});




// Features :-
// --> It is an asynchronous method, hence it will not block the main thread and offload it to libuv. After the operation is completed, its callback will be returned to the callStack once its empty.
// --> It is a non-blocking request

// --> It does not return anything, any error while creating or writing the file will be handled by the callback function
// --> If the file is not present, it will create the file.



//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 4) Copying a file into another (copying its content)


// a) fs.copyFileSync("x","y")
// --> x = file path along with extension of source file which is to be copied
// --> y = file path along with extension of destination file which will get the copied content

fs.copyFileSync("./test.txt", "./copied_file.txt");




// Features :-
// --> It is a synchronous method, hence it will block the main thread until its operation is finished and then let the JS Engine execute the next line.
// --> It is a blocking request
// --> It does not return anything
// --> If the file in which the content is to be copied is not present, it will create the file and then copy the content.
// --> The copied file's content will be totally overwritten
// --> In case of error we have to handle using try-catch block








// b) fs.copyFile("x","y","z")


// --> x = file path along with extension of source file which is to be copied
// --> y = file path along with extension of destination file which will get the copied content
// --> z = callback with the 1st argument as error, incase of any error while copying in the file (corrupted file / file not found).

fs.copyFile("example_file.txt", "copied_file.txt", (err) => {
  if (err) {
    console.log("Error Found:", err);
  }
  else {
    console.log("\nFile Content copied");
  }
});



// Features :-
// --> It is an asynchronous method, hence it will not block the main thread and offload it to libuv. After the operation is completed, its callback will be returned to the callStack once its empty.
// --> It is a non-blocking request

// --> It does not return anything, in case of error, its callback handles it.
// --> If the file in which the content is to be copied is not present, it will create the file and then copy the content.
// --> The copied file's content will be totally overwritten



//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 5) Deleting a file


// a) fs.unlinkSync("x")
// --> x = file path along with extension

fs.unlinkSync("./test.txt");



// Features :-
// --> It is a synchronous method, hence it will block the main thread until its operation is finished and then let the JS Engine execute the next line.
// --> It is a blocking request
// --> It returns undefined
// --> If the file to be deleted is not present, it will give error and then copy the content hence, we have to handle using try-catch block






// b) fs.unlink("x","y")
// --> x = file path along with extension
// --> y = callback with the 1st argument as error, incase of any error while deleting the file (corrupted file / file not found).

fs.unlink("./test.txt", (err) => {
  if (err) {
    console.log("Error:", err);
  }
  else {
    console.log("File Deleted");
  }
})


// Features :-
// --> It is an asynchronous method, hence it will not block the main thread and offload it to libuv. After the operation is completed, its callback will be returned to the callStack once its empty.
// --> It is a non-blocking request

// --> It does not return anything
// --> If the file to be deleted is not present, it will give error which will be handled by the callback method



//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 6) Getting the Status of a file :-

//  a) fs.statSync("x")
// --> x = file path along with extension


const result2 = fs.statSync("./test.txt");
console.log(result2);           //returns object containing details about the file

console.log(result2.isFile());  //returns boolean whether it is a file or not



// Features :-
// --> It is a synchronous method, hence it will block the main thread until its operation is finished and then let the JS Engine execute the next line.
// --> It is a blocking request
// --> It returns an object containing details about your file like size (bytes), created time, last modified time, uid, isFile() etc
// --> Errors regarding corrupted file or file not found has to be catched using try-catch block




// Same thing can be achieved asynchronously using :-
// fs.stat("x","y")
// --> x = file path along with extension
// --> y = callback with the 1st argument as error, incase of any error while deleting the file (corrupted file / file not found). 2nd argument as the stat object which contains info regarding the status of the file


fs.stat("./test.txt", (err, stat) => {
  if (err) {
    console.log("Error :", err);
  }
  else {
    console.log(stat);
  }
})



//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 7) Making a directory

// a) making single directory in current working directory

// --> fs.mkdirSync("x")
// x = directory path

fs.mkdirSync("my-docs");



//Features :-

// --> It is a synchronous method, hence it will block the main thread until its operation is finished and then let the JS Engine execute the next line.
// --> It is a blocking request
// --> error has to be handled by try-catch block






// b) making a nested directory

// --> fs.mkdirSync("x/y/z",{recursive:true})
// 1st parameter = directory path of nested directory
// 2nd parameter = object with various options but for nested directory creation "recursive : true" is mandatory
// x,y,z = directory names

fs.mkdirSync("my-docs/a/b", { recursive: true });






//********************************


// Same thing can be achieved asynchronously using :-


// a) making single directory in current working directory

// --> fs.mkdir("x", "y")
// x = directory path
// y = callback :- 1st argument as error for error-handling, 2nd argument as path for getting the absolute path of newly created directory

fs.mkdir("my-docs", (err, path) => {
  if (err)
    console.log(err);
  else
    console.log(path);
});

//It does not return anything





// b) making a nested directory

// --> fs.mkdir("x", "y", "z")
// x = directory path
// y = object with various options but for nested directory creation "recursive : true" is mandatory
// z = callback :- 1st argument as error for error-handling, 2nd argument as path for getting the absolute path of newly created outermost directory

fs.mkdir("my-docs/a/b", { recursive: true }, (err, path) => {
  if (err)
    console.log(err);

  else
    console.log(path);
})

//It does not return anything

