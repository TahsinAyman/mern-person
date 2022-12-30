const PersonController = require("../controller/PersonController");
const HomeController = require("../controller/HomeController");

module.exports = (app) => {
  app.use("/api/v1/person", PersonController);
  app.use("/", HomeController);
};
