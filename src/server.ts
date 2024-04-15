import app from ".";
import sequelize from "./config/sequelize";
const PORT = process.env.NODE_ENV === "test" ? 3000 : process.env.PORT;

app.listen(PORT, async () => {
	console.log(`Server is running on port ${PORT}`);
	try {
		await sequelize.authenticate();

		console.log("Database connection established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
});
