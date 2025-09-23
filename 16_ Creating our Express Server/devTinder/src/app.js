
const express = require("express");

const app = express();


app.use("/test", (req, res) => {
  res.send("Hello from the server on test!");
})

app.use("/hello", (req, res) => {
  res.send("Hello from the server on hello!")
})

app.use("/", (req, res) => {
  res.send("Hello from the homepage");
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})