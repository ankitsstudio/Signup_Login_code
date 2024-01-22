const express = require("express");
const app = express();
const User = require("../models/UserModel");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "MynameisAnkitKashyapABCDOZinterviewcompanies#%$";

app.use(express.json());

app.post(
    "/login",
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    async (req, res) => {
      const errors = validationResult(req);
      
      if (!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
      }
      
      let email = req.body.email
      try {
        const user = await User.findOne({email});
  
        if (!user) {
          return res.status(401).json({ success: false, message: "Invalid Email credentials" });
        }
  
        const pswdCompare = await bcrypt.compare(req.body.password,user.password);
        if (!pswdCompare) {
          return res.status(401).json({ success: false, message: "Invalid Password credentials" });
        }
        
        const data = {
          user:{
            id:user.id
          }
        }
  
        const authToken = jwt.sign(data,jwtSecret);
        res.status(200).json({
          success: true,
          message: "Login successful",
          authToken: authToken,
        });
  
      } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  );

  module.exports = app;