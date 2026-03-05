const AppError = require("../utils/AppError");
const jwt = require("../utils/jwt_token");
const Admin = require("../models/Admin");
const catchAsync = require("./catchAsync");

const authHandler = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppError("Unauthorized Access", 401));
  }

  let decoded;
  try {
    decoded = jwt.verifyToken(token);
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return next(new AppError("Session expired,please login again", 401));
    }
    return next(new AppError("Invalid Token", 401));
  }

  const user = await Admin.findById(decoded.id);
  if (!user) {
    return next(new AppError("Unauthorized Access", 401));
  }

  req.user = user;
  next();
});

module.exports = authHandler;
