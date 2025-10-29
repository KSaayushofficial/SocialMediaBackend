import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
      try {
            const connectionInstance = await mongoose.connect(`${process.env.MONGO}/${DB_NAME}`);
            console.log("Connected to the database successfully", connectionInstance.connection.host);
      } catch (error) {
            console.error("Error connecting to the database", error);
            process.exit(1);
      }
}