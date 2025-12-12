const express = require("express");
const mongoose = require("mongoose");
const env=require('dotenv')
const app = express();
app.use(express.json());
env.config()

const port = process.env.PORT;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Database connected successfully.."))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
});

const user = mongoose.model("student", userSchema);

//api to add new user
app.post("/adduser", async (req, res) => {
  const newUser = new user({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  await newUser.save();
  res.status(201).json({ message: "New User added successfully.." });
});

// API to get All Users

app.get("/getusers", async (req, res) => {
  const receivedUsers = await user.find();

  res
    .status(200)
    .json({ message: "all users fetch successfully..", receivedUsers });
});

// API to get  User based on ID

app.get("/getuser/:id", async (req, res) => {
  const userId = await user.findById(req.params.id);
  if (!userId) {
    res.status(404).json({ message: "User not Found" });
  }
  res.status(200).json({ userId });
});

//API to Update user Details
app.put("/updateuser/:id", async (req, res) => {
  const updatedUser = await user.findByIdAndUpdate(
    req.params.id,
    {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    },
    {
      new: true,
    }
  );
  if (!updatedUser) {
    res.status(500).json({ message: "userId not found.." });
  }
  res.status(200).json({ message: "User Details Updated Successfully.." });
});

// Api to Delete user Based on ID
app.delete("/deleteuser/:id", async function (req, res) {
  const deleteUser = await user.findByIdAndDelete(req.params.id, {
    new: true,
  });
  if (!deleteUser) {
    res.status(500).json({ message: "unable to delete user.." });
  }
  res
    .status(200)
    .json({ message: "User delete Successfully", deletedUser: deleteUser });
});

app.listen(port, () => {
    console.log(` server listening on url : http://localhost:${port}`)
});