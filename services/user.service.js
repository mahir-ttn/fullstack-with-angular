const User = require("../models/user.model");

module.exports.getAll = async () => {
  return await User.find();
};
