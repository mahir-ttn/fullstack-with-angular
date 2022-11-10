const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, SECRET_KEY);
    req.user_eid = payload.email;

    next();
  } catch (error) {
    res.status(401).send({
      code: 401,
      message: "you're not authorised to peform this operation",
    });
  }
};
