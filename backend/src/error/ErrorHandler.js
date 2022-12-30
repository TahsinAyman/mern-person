const Message = require("../model/Message");

module.exports = (app) => {
  app.use((_request, response, _next) => {
    response
      .status(404)
      .json(new Message("The Path you requested was not found", false, 404));
  });
};
