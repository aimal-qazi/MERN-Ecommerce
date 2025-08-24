import express from 'express';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
    res.send({
        message: "File uploaded successfully",
        image: `/${req.file.filename}`
    })
})

export default router;