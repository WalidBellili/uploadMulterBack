require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const cors = require('cors')
const PORT = 5000
const authRoutes = require('./routes/auth')
const usersPictureRoutes = require('./routes/usersPicture')

require('./models/index')

app.use(cors())

app.use(express.static('public'))
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
    })
)

app.use('/auth', authRoutes)
app.use('/profil', usersPictureRoutes)

app.listen(PORT, () => {
  console.log(`Server running on ${5000}`)
})