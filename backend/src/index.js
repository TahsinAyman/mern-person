const express = require("express");
const app = express();
const config = require("./config/config.json");
const route = require("./routing/Routing");
const middleware = require("./middleware/Middleware");
const errorHandler = require("./error/ErrorHandler");
const mongoos = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

middleware(app);
route(app);
errorHandler(app);

mongoos.set("strictQuery", false);
mongoos.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB");
});

app.listen(config.port, config.host, () => {
  console.log(`Server Running On ${config.host}:${config.port}`);
});
