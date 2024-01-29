// the following 3 packages are needed in order for cloudinary to run
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

// your three cloudinary keys will be passed here from your .env file
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'bananarama', // The name of the folder in cloudinary . You can name this whatever you want
  allowedFormats: ['jpg', 'png'],
  // params: { resource_type: 'raw' }, => add this is in case you want to upload other type of files, not just images
  filename: function (_req: any, res: any, cb: any) {
    cb(null, res.originalname); // The file on cloudinary will have the same name as the original file name
  },
});

export const uploader = multer({ storage });
