import mongoose from "mongoose";
import { UserType } from "../utils/config/types";

const userSchema = new mongoose.Schema<UserType>({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = mongoose.model("User", userSchema);
