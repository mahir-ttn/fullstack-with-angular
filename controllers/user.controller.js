const userService = require("../services/user.service");

module.exports.getAll = async (req, res, next) => {
  try {
    const data = await userService.getAll();
    res.send(data);
  } catch (error) {
    next(error);
  }
};

module.exports.getMyDetails = async (req, res, next) => {
  try {
    const data = await userService.getAll();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    let result = await userService.delete(req.params.id);
    if (!result)
      throw {
        status: 400,
        message: "invalid id check if id exists with the record",
      };
    res.send(result);
  } catch (error) {
    next(error);
  }
};
