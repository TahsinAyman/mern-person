const express = require("express");
const router = express.Router();

router.get("", (_request, response) => {
  response.status(202).json({
    message: "Welcome to this Express Backend API",
    result: true,
    statusCode: 202,
  });
});

module.exports = router;