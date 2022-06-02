const path = require("path");

function sendUI(req, res) {
  res.sendFile(path.join(__rootDir, "/ui/index.html"));
}

module.exports = {
  sendUI
}

