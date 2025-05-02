const mongoose = require('mongoose');
const express = require("express");
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://msanthoshhh:Rockmadhav123@cluster0.z7pts0d.mongodb.net/mySecondDatabase?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err));

const User = mongoose.model('User', {
  username: String,
  password: String,
  email: String
});

app.post("/signup", async function (req, res) {
  const { username, password, email } = req.body;

  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(403).json({
        msg: "User already exists",
      });
    }

    const user = new User({
      username,
      password,
      email
    });

    await user.save();

    res.json({
      msg: "User created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
