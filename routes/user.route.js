const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");
const verifyAuth = require("../middlewares/verifyAuth");

router.get("/me", verifyAuth, userCtrl.getMe);

module.exports = router;
