import dotenv from "dotenv";

dotenv.config();

export const PORT: number = parseInt(process.env.PORT);
export const MONGODB_URI: string = process.env.MONGODB_URI;
// define more environment variables
