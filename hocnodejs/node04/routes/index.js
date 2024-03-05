var express = require("express");
var router = express.Router();
const job = require("../core/job");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({});
});

router.post("/create-file", async (req, res) => {
  for (let index = 1; index <= 5; index++) {
    await job.add("createFile", {
      filename: `tesst-${index}`,
      content: `Xin chào anh em F8: ${index}`,
    });
  }

  res.json({ status: "success" });
});

module.exports = router;
