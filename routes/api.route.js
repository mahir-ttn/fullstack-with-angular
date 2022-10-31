const router = require("express").Router();
const userControll = require("../controllers/user.controller");
const authCheck = require("../middlewares/authCheck");

router.use("/users", userControll.getAll);
router.use("/me", authCheck, userControll.getMyDetails);

router.get("/*", (req, res, next) =>
  next({
    status: 404,
    message: "no Route matched",
  })
);

module.exports = router;
