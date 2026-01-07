const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("UrbanThread Backend Running");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, result) => {
    if (err) return res.status(500).json({ success: false });

    if (result.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  const query = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(query, [username, password], err => {
    if (err) return res.status(500).json({ success: false });
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
