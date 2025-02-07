import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI);
    console.log(
      "Successfully connected with MongoDB ",
      connect.connection.host
    );
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default connectDb;
