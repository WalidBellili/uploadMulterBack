const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const { upload, directory } = require('../config/multer')
const { User } = require("../models/index");
const issueToken = require("../utils/jwt");
// const { validationResult } = require('express-validator')

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(404).json("Not Found1");
    } else {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = issueToken({
          id: user.id,
          email: user.email,
        });
        res.json({ token });
      } else {
        res.status(404).json("Not Found2");
      }
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/signup",upload.single('photo'), async (req, res) => {
  try {
    const { email, password, firstname, lastname, pseudo, urlPicture } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      firstname, 
      lastname, 
      pseudo,
      urlPicture,
      password: hashedPassword,
    });
    res.json(user);
  } catch (e) {
    console.log(e);
  }
});

module.exports = app;
