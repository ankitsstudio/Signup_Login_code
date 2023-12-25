const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 5000;
const User = require("./models/UserModel");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());

const MongoURI =
  "mongodb+srv://language_model:language_model9320@cluster0.xjj7khm.mongodb.net/Emitrr?retryWrites=true&w=majority";

mongoose
  .connect(MongoURI)
  .then((result) => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB not Connected", err);
  });

app.get("/", (req, res) => {
  res.send("Hello MongoDB");
});

const { body, validationResult } = require("express-validator");

app.post(
  "/user",
  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.status(200).json({
        success:true,
        message:"you are signed up"
      })
    } catch (error) {
      res.status(400).json({ success: false, message: `enter valid ${error}`});
    }
  }
);

// ... (previous code)

app.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });

      if (!user) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }

      res.status(200).json({
        success: true,
        message: "Login successful",
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
);

// ... (remaining code)



app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
