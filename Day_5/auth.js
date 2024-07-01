const express = require("express"); // npm install express
const jwt = require("jsonwebtoken"); // npm install jsonwebtoken
const jwtPassword = "123456"; 

const app = express(); // create express app
app.use(express.json()); // to recognize incoming request as JSON object
const ALL_USERS = [ // in memory db
  {
    username: "shakil@gmail.com",
    password: "123",
    name: "Shakil Ahmad",
  },
  {
    username: "sam@gmail.com",
    password: "sam123",
    name: "Sam",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// check if user exists in our in memory db
function userExists(username, password) {
  let userExists = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
      userExists = true;
    }
  }
  return userExists;
}

// signup api
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // check if user exists in our in memory db
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  // create a token
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

// get all users api
app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({"users":ALL_USERS})
    
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});