const jwt_token = require("jsonwebtoken");

const signToken = (id) => {
  return jwt_token.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const verifyToken = (token) => {
  return jwt_token.verify(token, process.env.JWT_SECRET_KEY);
};

module.exports = { signToken, verifyToken };
