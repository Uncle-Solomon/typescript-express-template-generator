import mongoose from "mongoose";

//Database Connection
export const connectDB = (url: string) => {
  mongoose
    .connect(url, {
      // useNewUrlParser: true, // This is no longer needed in newer versions of Mongoose
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error(error);
    });
};
