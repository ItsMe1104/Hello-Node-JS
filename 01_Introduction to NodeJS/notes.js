// Any Application that can be written in Javascript, will eventually be written in Javascript.


// 1) What is NodeJS?
// --> Node Js was developed by Ryan Dahl in 2009
// --> It is a JS runtime built on Chrome v8 JS engine
// --> It is cross-platform, meaning it can run on Windows, Linux, MacOS and alot other platforms
// --> It is open source and maintained by Open JS Foundation (They are responsible for adding several new features in node JS)
// --> It executes JS outside a web browser
// --> Earlier JS was just the core of the web and the Browser
// --> When NodeJs came in, we can now run the JS code outside browser, not only to servers but many other places


// NODE JS has an event driven Architecture and is capable of asynchronous IO (Non- Blocking IO) :- Explained Later in the course





//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */




// 2) History of Node JS :-


// --> In 2009, Ryan Dahl made Node JS
// --> It runs JS code
// --> To run JS we always needed a JS engine
// --> In Browsers also, there is a JS engine which executes it
// --> The first JS Engine used to run Node JS was Spider Monkey (Firefox) and not V8 Engine by Google Chrome
// --> After 2 Days, he switched to V8 Engine
// --> Some versions released afterwards still used Spider Monkey but today the official Node JS uses V8 Engine behind the scenes
// --> V8 Engine powers Node JS



// --> Company named Joyent was also working on some internal project to run JS on server
// --> They funded Ryan Dahl to build Node JS and then they took the ownership
// --> Slowly Joyent company internally started using Node JS
// --> Earlier the name of Node JS was web.js because Ryan wanted to create web servers using this
// --> Later it was renamed to Node JS because it could do way more than just building web servers



// --> At that time, APACHE was use to build BLOCKING HTTP servers
// --> Node JS was made for the purpose of Non-Blocking IO
// --> The advantage of Non-Blocking servers were that they can handle multiple requests with lesser no. of threads



// --> In 2010 :- NPM happened (made by a developer from joyent) which was used as a package manager for Node
// --> It was done for the purpose that everyone can create small packages and NPM would act as a registery or a central place where we can add a new package
// --> NPM made Node JS successful



// --> In 2011 :- It got Windows support through Joyent and Microsoft support
// --> Node JS was initially built for Mac OS and Linux



// --> In 2012 :- Ryan left the project but continued as an employee of Joyent
// --> This project was then maintained by Isaac (the creator of NPM)



// --> Since 2012, the development speed of Node JS became very slow and it could not catch up with the newer versions of V8 engine


//--> In 2014, a guy named Fedor  , forked the Node JS and named it as IO.js  (since Node JS was open source and Joyent was managing it, hence it was trying to hold the releases of it, the development process became slow)
//--> Node JS was about to die



//--> In 2015, Both NodeJS and io.js got merged and a NodeJS Foundation was formed and took the responsibilty of maintaining NODE JS



//--> In 2019, two major commitees, JS Foundation and Node JS Foundation, got merged and were called as Open JS Foundation and since then, this is the committee responsible for all the active development in Node JS