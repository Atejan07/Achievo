const express = require("express");
const router = express.Router();
const imageController = require("../controllers/images");
const multer = require('multer');


const upload = multer({ dest: 'uploads/' });


router.post('/api/upload', upload.single('image'), imageController.uploadImage);



module.exports = router;