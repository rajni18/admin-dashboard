const errorHandler = (err, req, res, next) => {
  console.log("errorHandler running");
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
