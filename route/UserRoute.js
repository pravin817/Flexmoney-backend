import express from "express";
import { User } from "../Model/UserModel.js";
const router = express.Router();

// Route to save the new user
router.post("/", async (req, res) => {
  try {
    // validate the input data
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.phoneNumber ||
      !req.body.age ||
      !req.body.batch ||
      !req.body.fee
    ) {
      return res.status(400).send({
        message: "Please fill all the details",
      });
    }

    // create a new student
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      age: req.body.age,
      fee: req.body.fee,
      batch: req.body.batch,
    };

    const user = await User.create(newUser);

    return res.status(201).send({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
});

// Route to get All users list from Database
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).send({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
});

export default router;
