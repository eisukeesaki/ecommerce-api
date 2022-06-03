const Express = require("express");
const path = require("path");

function sendUI(req, res) {
  // Express.static(path.join(__rootDir, "/ui"));
  res.send("this route is under development");
  // res.sendFile(path.join(__rootDir, "/ui/index.html"));
  // res.sendFile(path.join(__rootDir, "/ui/index.js"));
}

module.exports = {
  sendUI
}

