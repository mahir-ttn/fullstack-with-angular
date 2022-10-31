module.exports = (req, res, next) => {
  next();

  res.status(401).send({
    error: {
      code: 401,
      message: "you're not authorised to peform this operation",
    },
  });
};
