import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { User } from "./Model/UserModel.js";
import { PORT, MONGO_URI } from "./config.js";
import UserRoute from "./route/UserRoute.js";

const app = express();

// Middleware for parsing request data
app.use(express.json());

// handle cors errors
app.use(cors());

app.use("/user", UserRoute);

app.get("/", (req, res) => {
  console.log("Hello from backend");
  return res.status(234).send("Hello from backend");
});

// connnect to the database
mongoose.connect(MONGO_URI).then(() => {
  console.log("Connected to database");

  app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });
});
