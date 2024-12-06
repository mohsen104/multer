# Multer Configuration for File Uploads

This project uses Multer for file handling, with two distinct configurations for uploading files. Each configuration has specific purposes and usage scenarios.

## 1. Disk Storage Configuration (uploadDiskStorage)
The `uploadDiskStorage` configuration saves uploaded files directly to the server's file system.

### Features:
- **Storage location**: Files are saved in the `public/upload` directory. If the directory doesn't exist, it is created recursively.
- **File validation**: Only image files with mime types `image/jpg`, `image/jpeg`, `image/png`, and `image/webp` are allowed.
- **File naming**: Files are renamed with a timestamp to ensure uniqueness.
- **File size limit**: 5MB per file.

### Example Usage:
```javascript
import uploadDiskStorage from './path/to/uploadDiskStorage';
app.post('/upload', uploadDiskStorage.single('file'), (req, res) => {
  // Handle file upload
});
```

## 2. Memory Storage Configuration (uploadFile)
The `uploadFile` configuration stores uploaded files in memory, making it suitable for further processing or direct storage in cloud services.

### Features:
- **Storage location**: Files are stored in memory as Buffer objects.
- **File validation**: Only image files with mime types `image/jpg`, `image/jpeg`, `image/png`, and `image/webp` are allowed.
- **File size limit**: 5MB per file.
- **File filter**: Ensures only allowed formats are accepted. If an unsupported format is uploaded, an error is returned.

### Example Usage:
```javascript
import uploadFile from './path/to/uploadFile';
app.post('/upload', uploadFile.single('file'), (req, res) => {
  // Handle file upload
});
```

## Notes:
- Both configurations limit the file size to 5MB.
- You can modify the allowed formats and size limits based on your needs.

For more information on Multer and file handling in Node.js, check the official [Multer documentation](https://www.npmjs.com/package/multer).