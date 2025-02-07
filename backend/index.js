import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PORT } from "./config/env.js";
import connectDb from "./config/mongodb.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
      await connectDb();
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection failed", error);
    }
  });