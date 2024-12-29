const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name:  '....',
    api_key:  '....',
    api_secret: '.....'
});

const storage = multer.memoryStorage(); // multer create temporary memory storage

async function handleImageUploadUtil(file) {
    try {
        const result = await cloudinary.uploader.upload(file, {
            resource_type: 'auto', 
        });
        return result;
    } catch (error) {
        throw new Error('Image upload failed: ' + error.message);
    }
}
const upload = multer({ storage });

module.exports = { upload, handleImageUploadUtil };
