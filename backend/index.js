const express = require("express");
const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());

require("./db");

app.get("/", (req, res) => {
  res.send("Hello MongoDB");
});

app.use('',require("./Routers/createUser"));
app.use('',require("./Routers/loginUser"));
app.use('',require("./Routers/DisplayData"));

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
