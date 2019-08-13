var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  // Commented out, so we can use if necessary
  // res.send('respond with a resource');

  // Trying this out
  res.json([
    {
      id: 1,
      username: "blackpanther1",
      password: "wakandaforever123"
    },
    {
      id: 2,
      username: "Captain_America",
      password: "Americas_***"
    }
  ]);
});

module.exports = router;
