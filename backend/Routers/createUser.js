const express = require("express");
const app = express();

const User = require("../models/UserModel");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");


app.use(express.json());

app.post(
    "/user",
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password").isLength({ min: 5 }),
    async (req, res) => {
      const errors = validationResult(req);
      
      if (!errors.isEmpty()) {
        return res.status(200).json({ errors: errors.array() });
      }
  
      // password hashing and security 
      const salt = await bcrypt.genSalt(10);
      let secPassword = await bcrypt.hash(req.body.password, salt);
  
  
      try {
        await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPassword,
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

  module.exports = app;