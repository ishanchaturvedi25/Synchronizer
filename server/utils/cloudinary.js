import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

async function uploadFileOnCloudinary(filePath) {
    try {
        if (!filePath || !fs.existsSync(filePath)) {
            return null;
        }
        const result = await cloudinary.uploader.upload(filePath, {
            folder: "syncronus-chat-app",
            resource_type: "auto"
        });
        console.log({ result });
        return result.url;
    } catch (error) {
        console.error("Error uploading file to Cloudinary:", error);
        return null;
    }
}

async function removeFileFromCloudinary(imageUrl) {
    try {
        if (!imageUrl) {
            return;
        }
        const publicId = imageUrl.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`syncronus-chat-app/${publicId}`);
    } catch (error) {
        console.error("Error removing image from Cloudinary:", error);
    }
}

export { uploadFileOnCloudinary, removeFileFromCloudinary };