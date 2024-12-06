import multer from 'multer';
import fs from 'fs';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        fs.mkdirSync(path.join(process.cwd(), "public", "upload",), { recursive: true });
        cb(null, "public/upload");
    },
    filename: (req, file, cb) => {
        const whiteListFormat = ["image/jpg", "image/jpeg", "image/png", "image/webp"];
        const mimetype = file.mimetype;
        const originalname = file.originalname;
        if (whiteListFormat.includes(mimetype)) {
            const format = path.extname(originalname);
            const filename = new Date().getTime().toString() + format;
            cb(null, filename);
        } else {
            cb(new Error("format file is not allowed!"))
        }
    }
})

const uploadDiskStorage = multer({
    storage,
    limits: {
        fileSize: 5242880, // 5MB
    }
})

export default uploadDiskStorage;