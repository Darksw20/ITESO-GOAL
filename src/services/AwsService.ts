import User from "../services/UserService";
import * as AWS from "aws-sdk";
import * as fs from "fs";
import dotenv from "dotenv";
import path from "path";

const ENV = process.env.NODE_ENV === "test" ? ".env.testing" : ".env";
const paths = path.resolve(__dirname, "../../", ENV);
dotenv.config({ path: path.resolve(__dirname, "../../", ENV) });

const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;
const REGION = process.env.REGION;
const BUCKET_NAME = process.env.BUCKET_NAME;

// Validate environment variables
if (!ACCESS_KEY_ID || !SECRET_ACCESS_KEY || !REGION || !BUCKET_NAME) {
	console.error("Missing required environment variables.");
	process.exit(1);
}

const s3 = new AWS.S3({
	accessKeyId: ACCESS_KEY_ID,
	secretAccessKey: SECRET_ACCESS_KEY,
	region: REGION,
});

const uploadFileToS3 = async (
	filePath: string,
	bucketName: string,
	key: string
) => {
	let fileContent;
	try {
		fileContent = fs.readFileSync(filePath);
	} catch (error) {
		console.error("Error reading file:", error);
		return { error: "Error reading file" };
	}

	const params: AWS.S3.PutObjectRequest = {
		Bucket: bucketName,
		Key: key,
		Body: fileContent,
	};

	try {
		const data = await s3.upload(params).promise();
		console.log("File uploaded successfully:", data.Location);
		return data;
	} catch (error) {
		console.error("Error uploading file to S3:", error);
		return { error: "Error uploading file to S3" };
	}
};

export default {
	uploadImage: async (id: number, imagePath: string, ext: string) => {
		const { user } = await User.find(id);
		if (!user) {
			console.error("User not found");
			return { error: "User not found" };
		}

		const date = new Date();
		const key = `profile-image-${id}-${
			user.email
		}-${date.toISOString()}.${ext}`;

		console.log("Uploading image:", imagePath, BUCKET_NAME, key);
		return uploadFileToS3(imagePath, BUCKET_NAME, key);
	},
};
