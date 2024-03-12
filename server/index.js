const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

// add middleware
app.use(express.static(path.join(__dirname, "../recipes/build")));
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../recipes/build/index.html"));
});

// start express server on port 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});