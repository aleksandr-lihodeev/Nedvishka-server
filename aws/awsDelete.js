import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./awsConfig.js";

export const deleteImageFromS3 = async (imageKey) => {
  const rootFolder = "nedvishka";
  const finalPath = `${rootFolder}/${decodeURIComponent(imageKey)}`;
  const deleteParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: finalPath,
  };
  try {
    await s3Client.send(new DeleteObjectCommand(deleteParams));
    console.log("Image deleted successfully");
  } catch (error) {
    console.error("Error deleting image from S3", error);
  }
};