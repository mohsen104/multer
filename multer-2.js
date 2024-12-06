import multer from "multer";

const storage = multer.memoryStorage();

const uploadFile = multer({
    storage,
    limits: {
        fileSize: 5242880, // 5MB
    },
    fileFilter: (req, file, cb) => {
        const whiteListFormat = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
        const mimetype = file.mimetype;
        if (whiteListFormat.includes(mimetype)) {
            return cb(null, true); // Accept file
        }
        return cb(new Error("format file is not allowed !"));
    },
});

export default uploadFile;
