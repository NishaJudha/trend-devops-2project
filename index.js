const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Trend Store Updated Version 1");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Trend Store Updated Version 1");
});
