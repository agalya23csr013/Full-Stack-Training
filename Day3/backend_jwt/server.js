const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const secreteKey = "c1e45bc22491124a732decfe";

const port = 5000;

app.use(express.json());
let users = [
  {
    id: 100,
    name: "John Doe",
    email: "admin@gmail.com",
  },
  {
    id: 200,
    name: "Ram ",
    email: "ram@gmail.com",
  },
  {
    id: 300,
    name: "Rani ",
    email: "rani@gmail.com",
  },
];
//api to get all users :
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

//api to insert a new user :
app.post("/insertuser", (req, res) => {
  const newUser = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json({ message: "New user inserted successfully" });
});

//api to get user based on userID
app.get("/user/:id", (req, res) => {
  const urlID = Number(req.params.id);
  const filteredUser = users.find((u) => u.id == urlID);
  //condition if user not found
  if (!urlID) {
    res.status(404).json({ message: "User Not found" });
  } else {
    res.status(500).json({ message: `Check the user ID ${urlID} not present` });
  }
  res.status(200).json({
    name: filteredUser.name,
    email: filteredUser.email,
  });
});

//delete user details based on ID
app.delete("/deleteuser/:id", (req, res) => {
  const urlID = Number(req.params.id);
  users = users.filter((u) => u.id != urlID);
  if (!urlID) {
    res.status(500).json({ message: "user id not found please check user ID" });
  }
  res.status(200).json({ message: "Deleted successfully" });
});

//JWT Token Concept

app.get("/login", (req, res) => {
  //generate token with dummy claims
  const claims = {
    id: 200,
    name: "Ramu",
    role: "admin",
  };
  // jwt.sign(payload ,secreteKey , {} )
  const token = jwt.sign(claims, secreteKey, {
    notBefore:'10M',
    expiresIn: "50M",
  });
  console.log(`Generated Token: ${token}`);
  res.status(201).json({ generatedToken: token });
});

app.get("/profile", (req, res) => {
  try {
    let token = req.headers["authorization"];//receiving token from header and storing in "token" variable
    token = token.split(" ")[1];
    const verified = jwt.verify(token, secreteKey);
     res.status(202).json({ message: "valid credentials....", verified });
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token this expired" });
    } 
    else if(err instanceof jwt.NotBeforeError){
      return res.status(401).json({ message: "Token still not active..." });
    }
    else if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "inValid Token" });
    }

  }
});

app.listen(port, () => {
  console.log(`Server is running on URL : http://localhost:${port}`);
});
