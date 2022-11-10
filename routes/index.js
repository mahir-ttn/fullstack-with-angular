const express = require("express");
const router = express.Router();

// import all the routes here
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");

// public
router.use("/auth", authRoutes);

// protected
router.use("/user", userRoutes);

router.get("/*", (req, res, next) =>
  next({
    status: 404,
    message: "no Route matched",
  })
);

module.exports = router;
