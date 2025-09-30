//? 1) How to regain the node_modules?
// --> If node_modules got deleted from the project, how to get them back?
// --> just use "npm i" or "npm install"
// --> The above command will go to the package.json file and install all the dependencies for our project in the node_modules


//? 2) Should we push node_modules into github?
// --> NO
// --> As it is not part of our pure source code
// --> It can be regenerated anytime while starting the project


//? 3) How to ignore node_modules or any directory or files from being scanned by git
// --> Create a file called ".gitignore" in the directory where node_modules are
// --> Place the paths of all the files / directories (including node_modules) in the ".gitignore" file which we don't want git to tract
// --> The path should be relative to the ".gitignore" file


//? 4) How to commit the files in git?
// --> committing the file is like a creating a checkpoint, such that git remembers the current scenario of our file before we do any further changes


// #) STEP 1 (First send those files in the staging area) :-
// use "git add 'path to file 1', 'path to file 2' ... "
// OR
// use "git add ."   (to get all the untracked and modified files at once)


// #) STEP 2 (Then commit those files which are in the staging area)
// use "git commit -m 'Give a message regarding the commit'"



//? 5) How to commit the files in github?
// --> First go to Github
// --> Create a new blank repository
// --> Fill the required details about the repository
// --> Connect the github repository to our local repository
// --> use "git remote add origin git@github.com:github_login_name/repository_name.git"
// --> git branch -M main
// --> git push -u origin main



//? H.w Question
// --> Should we push package-lock.json in github?


//? 2) Order of request handlers
// ? Can a request handler overshadow other request handlers?
//--> the routes in the request handlers act as wildcard, so order the routes properly

// --> "/hello" route handler will always overwrite / overshadow the "/hello/hello" or "/hello/xyz" route's handler if it is put in order above them
// --> Similarly "/hello/hello" will overwrite / overshadow the "/hello/hello/hello" or "/hello/hello/abcd1234"
// --> To avoid this, put the most inner routes in order first and then the outer routes
// --> Hence, always order the "/" route (homepage) at the last else it will overwrite all the other route handlers


//?? NOTE :-  "/hello" route handler will not overwrite / overshadow the "/hello123" or "/helloABCD/xyz" route's handler if it is put in order above them


//***************** */


//?? 3) HTTP methods
// --> GET, POST, PATCH, DELETE

// --> These are methods supported by Browser and HTTP protocols

// e.g :-
// --> In Browsers, whenever we ar hitting some URL, we basically make a GET API call on that route to the server
// --> We can make a POST, PATCH, DELETE, etc calls from Browser's Console but we cannot test them


//***************** */


//?? 4) Testing our APIs :-
// --> Use Postman (Download it from Google) as in Browsers it is very difficult to make a POST, PATCH, etc call
// --> Its like a repository where we can collect and share our APIs
// --> Create an account in Postman


// ?? 5) STEPS to use POSTMAN :-
// --> Create a personal workspace for the project
// --> Click on the "Workspace" in the topmost menu
// --> Click on "Create workspace"
// --> Click on "Blank Workspace" and give a name
// --> Choose the "personal" or "Internal" option
// --> For "Internal" option, choose the team name and other details
// --> Click Confirm

//### Creating a collection
// --> Collection here means the collection of APIs
// --> We can segregate the APIs into different collections based on their use case



//******************************************* */


// ?? 5) STEPS to use make a HTTP API call in Postman :-
// --> Click on the "New" button beside our workspace name in the leftmost menu
// --> Select the type of API call as "HTTP"
// --> Select which HTTP request among GET, PUT, PATCH, DELETE, etc
// --> Give the url (route + port no.) (e.g :- http://localhost:3000/hello)


//? NOTE :- Make sure that the server is up and running

// --> click on "send"
// --> The result from that route will appear on the "Response" tab


//* Save the important URLs along with the specific HTTP request
// --> click on "Save" button above "send" in a new collection



//******************************************* */


// ?? 6) Testing the GET, POST, PATCH, DELETE calls for same routes

//? Note 1 :-
// --> If we use the app.use() as request handler
// --> no matter whatever API request we make, Same response will always be sent for all types of requests for the same route


//? Note 2 :-
// --> If for same route we need different responses based on the specific HTTP request
// --> We need to design a specific route handler for a specific HTTP request
// --> We use the get(), post(), patch(), delete() methods instead of use()


// --> Same syntax like use()
app.get("route", (req, res) => { })
app.post("route", (req, res) => { })
app.patch("route", (req, res) => { })
app.delete("route", (req, res) => { })



//?? NOTE 3 (order of the handlers):-
// --> Here also the order of the request handlers matters
// --> No order management is required between get(), post(), patch(), delete() route handlers
// --> Order management is required b/w above route handlers and use() route handler

// --> Since JS runs line by line from the top of the file
// --> If use() route handler is kept above get(), post(), patch(), delete() route handlers for the same route
// --> Then it will overwrite the response sent by the other route handlers for any HTTP request
// --> Hence, always keep use() route handler at the last in order among the other route handlers for the same route


//? a) GET :-
// --> This method will only match the "GET" API calls for the given route 

app.get("/test", (req, res) => {

  // ... some process executed
  res.send({ firstName: "Hrithik", lastName: "Shaw" });
})



//? b) POST :-
// --> This method will only match the "POST" API calls for the given route 

app.post("/test", (req, res) => {

  // ... some process executed
  res.send("Response for POST call");
})



//? c) PATCH :-
// --> This method will only match the "PATCH" API calls for the given route 

app.patch("/test", (req, res) => {

  // ... some process executed
  res.send("Response for PATCH call");
})



//? d) DELETE :-
// --> This method will only match the "DELETE" API calls for the given route 

app.delete("/test", (req, res) => {

  // ... some process executed
  res.send("Response for DELETE call");
})



//******************************************* */


// ?? 7) Some advance shortcuts for handling routes :-

// --> The route that we use in the route handlers act as the wildcard for other bigger routes too


// e.g :-
// Route = "/test"
// will match "/test" , "/test/abc" , "/test/123"


//? Advance route techniques :-

//?a) ? (Optional)
// --> will make a character optional
// --> Hence, if some request is made for a route where other characters match then the request will be handled
// --> It doesn't matter if the request route has the optional character or not

route = "/ab?cd"         // will make "b" optional

app.get("/ab?cd", () => { })
// --> will work for /abcd and /acd




//? b) + 
// --> will make a character's repetition to any no. of count (minimum 1)

route = "/ab+cd"         // "b" can repeat any no. of times

app.get("/ab+cd", () => { })
// --> will work for /abcd , /abbcd , /abbbbcd, etc




//? c) * 
// --> In place of "*" we can place any no. of characters any no. of times 
// --> Here only the substrings before and after the '*' should match in the route

//? e.g.2 :-
route = "/ab*cd"         // any character/characters can repeat in place of "*" after "ab" and before "cd"

app.get("/ab*cd", () => { })
// --> will work for /abcd , /abbcd , /abHRITHIKcd, etc




//? d) ()
// --> It is used to group the above operators together

//? e.g 1 :-
// --> a(bc)?d  --> will make "ab" optional as a whole but not individually  (ad will work but acd will not)


//? e.g.2 :-
// --> a(bc)+d  --> will make "bc" repeat as a whole any no. of times (minimum once) but not individually

// --> abcd        -->   will work
// --> abcbcbcd    -->   will work
// --> ad          -->   will not work
// --> abcccd      -->   will not work
// --> abbbcd      -->   will not work



//******************************************* */


// ?? 8) Using regex for writing routes :-

// i) a/
// --> anywhere in the URL, if "a" is present, it will work

//  e.g :-
app.use("/a/", () => { })

// --> /abcd       --> will work
// --> /Hrithika   --> will work
// --> /Hrithik    --> will not work



// ii) .*fly$/
// --> anything in starting but should end with fly

// --> /butterfly   --> will work
// --> /fly         --> will work
// --> /dragonfly   --> will work
// --> /butterfly1  --> will work



//******************************************* */


//? 9) Dynamic query params/parameters :-

// Route :-
// "/user?userId=101"


//? Q) How to get the dynamic userId (query parameter) from the route into our route handler, to perform some operations

// --> use the request object in the callback function of the request handler
// --> use the "query" property of the request object
// --> It will return an object containing all the query parameters in terms of key-value pairs
// --> The value will be in string format


//? e.g 1 (Single query parameter):-
// Route = "/user?userId=101"

app.get("/user", (req, res) => {
  console.log(req.query);               // {userId : '101'}
  res.send("Query Parameters received")
})


//? e.g 2 (Multiple query parameters) :-
// Route = "/user?userId=101&pwd=testing"

app.get("/user", (req, res) => {
  console.log(req.query);   //{userId : '101', pwd:"testing"}
  res.send("Query Parameters received")
})



//******************************************* */


//? 10) Dynamic routes :-

// Route :-
// "/user/101"
// "/user/102"


//? Q) How to handle the route and get the dynamic ids from the route?

// a) handling the route
// --> use the ":" followed by a name to act as a placeholder for the dynamic id
// --> ":" colon means its a dynamic route

"/user/:userId"


// b) Extracting the dynamic userId
// --> use the request object in the callback function of the request handler
// --> use the "params" property of the request object
// --> It will return an object containing all the dynamic parameters in terms of key-value pairs
// --> The value will be in string format


//? e.g 1 (Single dynamic id) :-
// Route = "/user/707"
app.get("/user/:userId", (req, res) => {
  console.log(req.params);               // {userId : '101'}
  res.send("Query Parameters received")
})


//? e.g 2 (Multiple dynamic ids in same url) :-
// Route = "/user/707/Hrithik/testing"

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.query);   //{userId : '707',name: "Hrithik", password: "testing"}
  res.send("Query Parameters received")
})