const multer = require('multer')
const directory = 'images/'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/${directory}`)
  },
  filename: (req, file, cb) => {
    const fileType = file.mimetype.split('/')[1]
    // application/pdf => ["application", "pdf"], "pdf"

    const originalName = file.originalname.split('.')[0]
    // ananas.png => ["ananas", "png"] => "ananas"

    const fileName = `${originalName}-${Date.now()}.${fileType}`

    cb(null, fileName)
  }
})

const upload = multer({ storage: storage })

module.exports = {
  storage,
  upload,
  directory
}