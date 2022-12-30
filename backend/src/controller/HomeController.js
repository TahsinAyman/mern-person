const express = require("express");
const router = express.Router();

router.get("", (_request, response) => {
  response.status(202).json({
    message: JSON.stringify(process.env.DB_CONNECTION),
    result: true,
    statusCode: 202,
  });
});

module.exports = router;