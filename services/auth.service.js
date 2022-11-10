const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { SECRET_KEY } = require("../config");

module.exports.createNewAccount = async ({ fullname, email, password }) => {
  const result = await User.findOne({ email });
  if (result)
    throw {
      status: "500",
      message: "Account already exists",
    };

  password = await bcrypt.hash(password, 10);

  const newAcc = new User({ fullname, email, password });
  await newAcc.save();

  return { success: true, message: "Account Created" };
};

module.exports.login = async ({ email, password }) => {
  const result = await User.findOne({ email });
  const passCheck = await bcrypt.compare(password, result?.password || "");

  if (!passCheck)
    throw {
      status: "401",
      message: "Incorrect email or password",
    };

  const token = jwt.sign({ email: result.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return { success: true, token };
};
