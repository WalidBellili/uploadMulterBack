const express = require('express')
const { upload, directory } = require('../config/multer')
const app = express()
const { User } = require("../models/index");
const passport = require('../config/passport')


app.post('/user/:id', passport.authenticate('jwt'), async (req, res) => {
  const { id } = req.params

  try {
       await User.update(req.body.urlPicture, {
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