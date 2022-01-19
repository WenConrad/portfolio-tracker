const express = require("express");
const router = express.Router();
const queries = require("../queries");

/* GET home page. */
router.get("/", function (req, res, next) {
  queries.getUserWithEmail("conradwen@gmail.com").then((user) => {
    console.log(req.body);
    res.json({ user });
  });
});

module.exports = router;
