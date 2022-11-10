const authService = require("../services/auth.service");

module.exports.register = async (req, res, next) => {
  try {
    const data = await authService.createNewAccount(req.body);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const userJWT = await authService.login(req.body);
    res.send(userJWT);
  } catch (error) {
    next(error);
  }
};
