// server.js
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// A simple route
app.get("/", (req, res) => {
  res.send("Hello from Node backend 🚀");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
