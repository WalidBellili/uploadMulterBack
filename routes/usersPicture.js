const express = require('express')
const { upload, directory } = require('../config/multer')
const app = express()

app.post('/', upload.single('photo'), async (req, res) => {
  try {
    const photo = await Photo.create({
      url: `http://localhost:5000/${directory}${req.file.filename}`
    })

    res.json(photo)
  } catch (e) {
    res.json(e)
  }
})

app.get('/', async (req, res) => {
  try {
    const photos = await Photo.findAll()

    res.json(photos)
  } catch (e) {
    res.json(e)
  }
})

module.exports = app