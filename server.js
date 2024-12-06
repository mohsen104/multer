import express from 'express';
import uploadDiskStorage from './multer-1.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/upload", uploadDiskStorage.single("file"), (req, res) => {
    return res.json(req.file);
})

app.listen(3000, () => {
    console.log("server run on port 3000");
})