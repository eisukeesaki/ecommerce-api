const express = require("./express");
const PORT = 4242; // TODO: || process.env.PORT

express.listen(PORT, () => {
  console.log(`server is listening to PORT ${PORT}`);
});

