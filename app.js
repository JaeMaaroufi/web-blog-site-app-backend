const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = 6000;
app.listen(port, () => {
  console.log(`This Web-blog server is working on PORT: ${port}`);
});
