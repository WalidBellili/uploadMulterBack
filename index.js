
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000




app.use(cors())

app.use(express.static('public'))



app.listen(PORT, () => {
  console.log(`Server running on ${5000}`)
})