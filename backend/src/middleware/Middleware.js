const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use((request, _response, next) => {
    console.log(`${request.method} ${request.url}`);
    next();
  });
};
