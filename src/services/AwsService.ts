import User from "../services/UserService";
import * as AWS from "aws-sdk";
import * as fs from "fs";

const BUCKET_NAME = process.env.BUCKET_NAME;

const s3 = new AWS.S3({
	accessKeyId: process.env.ACCESS_KEY_ID,
	secretAccessKey: process.env.SECRET_ACCESS_KEY,
	region: process.env.REGION,
});

const uploadFileToS3 = async (
	filePath: string,
	bucketName: string,
	key: string
) => {
	const fileContent = fs.readFileSync(filePath);

	// Parámetros para la carga de archivo
	const params: AWS.S3.PutObjectRequest = {
		Bucket: bucketName,
		Key: key,
		Body: fileContent,
	};

	// Subir archivo a S3
	try {
		const data = await s3.upload(params).promise();
		console.log("Archivo cargado exitosamente:", data.Location);
		return data;
	} catch (error) {
		console.error("Error al cargar el archivo en S3:", error);
		return {
			error: "Error al cargar el archivo en S3",
		};
	}
};

export default {
	uploadImage: async (id: number, imagePath: string) => {
		const { user } = await User.find(id);
		const date = new Date();
		const BUCKET_NAME = process.env.BUCKET_NAME ?? "";
		const key = `profile-image-${id}-${user?.email}-${date.toISOString()}`; // Nombre con el que se guardará en S3

		return uploadFileToS3(imagePath, BUCKET_NAME, key);
	},
};
