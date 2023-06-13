const express = require("express");
const router = express.Router();
const imageController = require("../controllers/images");
const multer = require('multer');


const upload = multer({ dest: '../client/public/uploads/' });


router.post('/api/upload', upload.single('image'), imageController.uploadImage);
// router.get('/images', /* gets all images */);



module.exports = router;