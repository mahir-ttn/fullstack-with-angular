const User = require("../models/user.model");

module.exports.getAll = async () => {
  const result = await User.find({}, { password: 0 });
  return { success: true, data: result };
};

module.exports.getMyDetails = async (email) => {
  const result = await User.findOne({ email }, { password: 0 });
  return { success: true, data: result };
};
