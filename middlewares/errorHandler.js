// eslint-disable-next-line no-unused-vars
module.exports = (error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500).send({
    error: {
      code: error.status || "500",
      message: (error.status && error.message) || "An unknown error occurred.",
    },
  });
};
