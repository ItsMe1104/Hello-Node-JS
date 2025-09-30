//? Context :-
// --> Creating a repository
// --> Initializing the repository using "npm init"
// --> Difference between package.json, package-lock.json, node_modules
// --> What are dependencies
// --> Difference between caret ^ and tilde ~ in versioning
// --> Install express
// --> Create a server
// --> Listen to port 7777 or 3000
// --> Write request handlers for different routes
// --> Install nodemon and update scripts inside package.json
// --> What is the use of "-g" while npm install



//? 1) How to start the project?

//? STEP 1 (Configuration):-
// --> First start the configuration of the file
// --> Open the terminal (CTRL+`)
// --> type "npm init" and fill the inputs
// --> It will create the "package.json" file which is the json configuration file for our project
// --> It is like the contents/index of our project (metadata of our project) and also tells about the packages that we installed as a dependency for our project.


//***********************  */


//? STEP 2 (src folder) :-
// --> Always create a src folder
// --> create a file called "app.js" as the starting js file for our project


//***********************  */


//? STEP 3 (create a server) :-
// --> First create a server to listen to the request of other users
// --> When our server gets created and listens, it can accept the incoming requests
// --> Here we will use expressJS for creating server


//***********************  */


//? STEP 4 (Install Express.js) :-
// --> install the express package from npm (npm i express)
// --> Install it in the directory of src folder
// --> "node_modules" and "package-lock.json" will be created automatically


//?? node_modules :-
// --> All the packages/dependencies we install from npm, will have their source code in a separate folder inside the node_modules folder
// --> All the dependencies that our installed package will have, will also come inside the node_modules as a separate folder
// --> Every installed package has its own set of dependencies inside its own package.json, and similarly all the dependencies will also have their own dependencies in their own package.json
// --> The source code of all this hierarchial dependency chain wll come inside the node_modules


//? NOTE :-
// --> Whatever packages we install, nodeJs will add it in the package.json inside the "dependencies" object


//?? versioning of a package :-
// --> the versioning of a package is done in terms of 3 bits (major,minor,patch)
// --> Whenever a project is started it starts with 1.0.0 version
// --> As the developers push the code, it keeps on getting updated\

// e.g :- 4.19.2
// 2 --> patch (very small change or bug fix and safe to install ad update)
// 19 --> minor (pushing some features which are backward version compatible and safe to install and update)
// 4 --> major (critical changes which will break the existing repositories and are not backward compatible)

// --> Hence, if it is a major change, then its not safe to install the newer version if the projects are using the backward version


//* Good Practice :-
// Always use a "^" (caret) while giving versions in the dependency object of package.json
// This will make sure that our project automatically updates the dependency to newer version if any minor or patch changes are installed

// If we use a "~" tilde instead of "^" (caret) then only patch changes will be automatically updated in our project


//?? package-lock.json :-
// --> package.json doesn't tell us about the exact version of our dependencies as we use "^" or "~" for auto update
// --> The actual version of the dependency which our project is currently using is defined in package-lock.json


//***********************  */


//? STEP 5 (using express to create server) :-

// --> First require/import express from express module ( a module is a reusable block of code allowing you to organize code into logical, reusable components)

const express = require("express")

// --> Now create an instance of express app using the express function
// --> It will be like a new web server
const app = express();

// --> Now make the web server listen on some PORT no. using listen()
// --> listen(a,b)
// a = PORT no.
// b = callback function which is called once our server is running

app.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
})





//***********************  */


//? STEP 6 (Handling the request) :-
// --> Use the express app's use() method
// --> It is also called a request handler
// --> use(a,b)
// a --> route
// b --> callback function taking first two arguments request and response

// --> Place this above the listen() function
// --> To send any response use the send() method of the respond object which came as a second argument

app.use((req, res) => {
  res.send("Hello from the server");
});

// --> Now in the Browser go localhost:3000 or the port where we are listening to see the response from the server

//?? NOTE :- whenever we update our server file app.js, always rerun the file else our server will not be updated



//***********************  */


//? STEP 7 (Handling requests on different routes) :-

// --> Like the above case, if we don't give any route, our server will always respond with the same response for all the routes on that PORT

// --> For handling different requests for different routes, we provide the first argument in the use() as a "route"
// --> The route will be a relative URL with the "localhost:3000" as homepage
// --> "/" means the homepage

// e.g :-
// "/test"
// "/hello"
// "/hello/abc"

// --> hence when the request comes on that specific URL, the server will send a specific response

//?? NOTE :- the routes here act as wildcard, so order the routes properly
// e.g :- 
// "/hello" route handler will always overwrite the "/hello/hello" or "/hello/xyz" route's handler if it is put in order above them
// --> To avoid this, put the most inner routes in order first and then the outer routes
// --> Hence, always order the "/" route (homepage) at the last else it will overwrite all the other route handlers


//?? NOTE :- we can prepare any no. of handlers for different routes

app.use("/test", (req, res) => {
  res.send("Hello from the server on test!");
})

app.use("/hello", (req, res) => {
  res.send("Hello from the server on hello!")
})

app.use("/", (req, res) => {
  res.send("Hello from homepage")
})



//***********************  */


//? STEP 8 (Install nodemon) :-

// --> nodemon is a npm package which automatically refreshes the server once we apply changes to the server file and save it
// --> Hence, we don't have to restart the server manually once we did some changes to our server

//** Installation */
// npm i nodemon              ==> for current project only
// sudo npm i -g nodemon      ==> for all projects of nodeJS in our system

//** How to use */
// --> Instead of using "node server.js" in terminal
// --> Run "nodemon server.js"



//***********************  */


//? STEP 9 (Adding nodemon in scripts of package.json) :-

// --> Go to package.json
// --> Go to the object linked to the scripts attribute
// --> There add
// "dev" : "nodemon path"    {path = path to server.js from package.json}
// "start" : "node path"     {path = path to server.js from package.json}


//* For running the server in dev mode :-
// --> Use "npm run dev"      (will use nodemon)


//* For running the server in normal mode :-
// --> Use "npm run start"    (will use normal node)
