const express = require('express');
const multer = require('multer');
const path = require('path');
const { createProduct, getproduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

router.post('/', upload.single('image'), createProduct);
router.get('/', getproduct);
router.put('/:id', upload.single('image'), updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
