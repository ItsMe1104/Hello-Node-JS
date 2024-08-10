// Node JS came with a philosophy that it can run outside the browser also, primarily on the server





// 1) Server

// --> Server is a remote computer/ CPU located at somewhere

// Question) What is meant by running a website on a server?
// --> It means we are running a website on a server of someone's computers (generally clouds)
// --> Cloud are servers located remotely
// --> At the end of the day it is a machine or a software that serves and receives a request through a client



// --> PROCESS :-
// --> The client makes a request through a web Browser
// --> Let's say the client tries to access Google.com (Domain name)
// --> Every domain name maps to an IP (114.265.123.8)
// --> This IP points to a server
// --> Hence the client makes a request to the server with the help of his web browser
// --> Mainly JS was used inside the web browser
// --> After Node JS we can also run JS on the server (server side rendering)

// --> Now with JS coming in both server and web broser (client side), the companies can most frequently hire a single developer to develop full stack, because earlier for backend multiple other technologies were used like Java, PHP, etc
// --> Hence, MERN , MEAN stacks came in demand



//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 2) Node JS and V8 Engine

// --> Node JS is C++ code and very little JS
// --> JS engine (V8) is also written mostly in C++ (72%) (Search for V8 Github)
// --> Hence, a JS engine is also a C++ program
// --> JS engine is simply a C++ program and not a physical machine



// FROM V8 Javascript engine website :-
// --> V8 is Google's open source JS and webAssembly engine, written in c++.
// --> It is used in Chrome and in Node JS, among others
// --> It implements ECMAScript and WebAssembly and runs on Windows, macOS and Linux systems
// --> V8 can be embedded / attached into any C++ application



// Job of V8 engine :-
// --> To execute JS code
// --> V8 is a C++ program that takes JS code as input, reads and converts it into Machine Code (0,1)
// --> Then Machine executes that code.

// JS code --> V8 (C++) --> Machine Code



// Node JS application :-
// --> Since, V8 can be embedded / attached into any C++ application
// --> Hence, Node Js was developed as a C++ application and V8 was attached to it.




// V.V.I
// Question) If V8 can execute a JS cde, why we needed to put it inside Node JS
// Question) What was the need of Node JS, we could have simply put V8 engine on the server?

// Solution :-
// --> V8 is a JS engine that follows ECMAScript standards
// --> EcmaScript is a standard followed by scripting languages like Javascript, JScipt and ActionScript
// --> For e.g :- In "var a = 12" , writing var before variable name, then single equal to after variable name to assign and then the value after equal to. These are all standards set by Ecmascirpt
// --> The way we write JS that are maintained by a standard known as EcmaSript

// --> Ecmascript :- standard or rules decided by a central commitee. Currently we are using ES6 (meaning the 6th version of JS)
// --> JS Engines have to follow these standards
// V8 (Chrome)
// Spider Monkey (Firefox)
// Chakra (Internet Explorer, Also in Edge a different JS Engine "Chakra" is used )
// JavascriptCore (Safari)

// --> Every JS Engine must follow these standards, so that the JS code written by a user is interpreted same in all the Browsers so that they give the same results
// --> Hence, V8 follows Ecmascript standards and cannot go outside it

// --> Node JS :- a C++ program which comes with V8 engine + extra superpowers
// --> These superpowers make the Node JS while running on the server very powerful
// --> These superpowers are APIs on server
// --> For e.g :- if some database is installed and we want to connect to access that database using JS. V8 cannot do that as it does not have access to database and hence cannot connect to database
// --> For e.g :- If we want to make an HTTP request to some other compouter, V8 cannot do that as its only job is to execute core JS Ecmascript standards
// --> For e.g :- V8 cannot access the file system
// --> For e.g :- V8 cannot access modules
// --> Hence these APIs are added by NodeJS along with V8 to do different tasks on the server
// --> Hence, Node JS is also called Javascript Runtime environment
