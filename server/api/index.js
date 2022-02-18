const express = require("express");
const router = express.Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/orders", require("./orders"));
router.use("/pets", require("./pets"));
router.use("/cart", require("./cartItems"));
router.use("/breeds", require("./breeds"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
