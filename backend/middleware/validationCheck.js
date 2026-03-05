const AppError = require("../utils/AppError");
const validationCheck = (req, res, next) => {
  console.log("validationCheck running");
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Email and Password are required", 400));
  }

  if (typeof email !== "string") {
    return next(new AppError("Email must be a string", 400));
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new AppError("Invalid email format", 400));
  }

  if (password.length < 6) {
    return next(new AppError("Password must be at least 6 characters", 400));
  }

  next();
};

module.exports = validationCheck;
