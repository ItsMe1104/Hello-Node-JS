
const express = require("express");

const app = express();


// Query Parameters :-
// Route = "/user?userId=101&pwd=testing"

app.get("/user", (req, res) => {
  console.log(req.query);   //{userId : '101', pwd:"testing"}
  res.send("Query Parameters received")
})


//****************************************** */


// Dynamic Routes :-
// Route = "/user/707/Hrithik/testing"

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.query);   //{userId : '707',name: "Hrithik", password: "testing"}
  res.send("Query Parameters received")
})


//****************************************** */


// GET call
app.get("/test", (req, res) => {
  res.send("Hello from the server on test!");
})

//****************************************** */

// POST call
app.post("/hello", (req, res) => {
  res.send("Hello from the server on hello!")
})

app.use("/", (req, res) => {
  res.send("Hello from the homepage");
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})