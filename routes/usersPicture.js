const express = require('express')
const { upload, directory } = require('../config/multer')
const app = express()
const { User } = require("../models/index");
const passport = require('../config/passport');
const multer = require('multer');


app.post('/user/:id', upload.single('photo'), async (req, res) => {
  const { id } = req.params
  console.log(req.file);

  try {
       await User.update({urlPicture : `http://localhost:5000/${directory}/${req.file.filename}`}, {
          where: {
            id,

          },
      })
      const response = await User.findOne({
          where: {
              id,
          },
      })

      res.json(response)
  } catch (e) {
      console.log(e)
      res.status(500).json('Internal server error')
  }
})

app.get('/user/:id', upload.single('photo'), async (req, res) => {
  const { id } = req.params
  try {

  const response = await User.findOne({
      where: {
          id,
      },
  })

  res.json(response)
  } catch (e) {
    res.json(e)
  }
})

app.get('/', async (req, res) => {
  try {
    const user = await User.findAll()

    res.json(photos)
  } catch (e) {
    res.json(e)
  }
})

module.exports = app