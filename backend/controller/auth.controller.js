const catchAsync = require("../middleware/catchAsync");
const AppError = require("../utils/AppError");
const Admin = require("../models/Admin");
const jwt = require("../utils/jwt_token");
const User = require("../models/Users");

const registerUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await Admin.create({ email, password });
  res.status(201).json({
    status: "success",
    message: "User Registered Successfully",
    data: user,
  });
});

const userLogin = catchAsync(async (req, res, next) => {
  console.log("userLogin running");
  const { email, password } = req.body;
  const user = await Admin.findOne({ email }).select("+password");
  if (!user) {
    return next(new AppError("Invalid email or password", 404));
  }
  const isPasswordMatch = await user.correctPassword(
    req.body.password,
    user.password,
  );
  if (!isPasswordMatch) {
    return next(new AppError("Incorrect Password", 400));
  }

  const token = jwt.signToken(user._id);

  res.status(200).json({
    status: "success",
    message: "User Logged In Successfully",
    data: user,
    token,
  });
});

const getAdminsData = catchAsync(async (req, res) => {
  const adminsData = await Admin.find();
  res.status(200).json({
    message: "Admins Data fetched successfully",
  });
});

const getAdminInfo = catchAsync(async (req, res, next) => {
  const id = req.user.id;
  console.log("getAdminInfo---", id);
  const adminInfo = await Admin.findById(id);
  if (!adminInfo) {
    return next(new AppError("Admin not found", 401));
  }
  res.status(200).json({
    status: "Success",
    message: "Admin Data found successfully",
    data: adminInfo,
  });
});

const getUsers = catchAsync(async (req, res, next) => {
  //if filters handles from backend
  // const { status, search } = req.query;
  // let query = {};
  // if (status) {
  //   query.status = status;
  // }

  // if (search) {
  //   query.$or = [
  //     { name: { regex: search, options: "i" } },
  //     { email: { regex: search, options: "i" } },
  //   ];
  // }

  const users = await User.find();
  res.status(200).json({
    status: "success",
    message: "users fetched successfully",
    data: users,
  });
});

const editUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (Object.keys(req.body).length === 0) {
    return next(new AppError("No fields to update", 400));
  }
  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    return next(new AppError("User Not Found", 404));
  }
  res.status(200).json({
    status: "success",
    message: "User Updated Successfully",
    data: user,
  });
});

const deleteUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return next(new AppError("User Not Found", 404));
  }
  res.status(200).json({
    status: "success",
    message: "User Deleted Successfully",
  });
});

const getStats = catchAsync(async (req, res, next) => {
  const totalUsers = await User.countDocuments();
  const activeUsers = await User.countDocuments({ status: "Active" });
  const inActiveUsers = await User.countDocuments({ status: "Inactive" });
  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
  const newSignUps = await User.countDocuments({
    joinedAt: { $gte: fiveDaysAgo },
  });

  res.status(200).json({
    status: "success",
    message: "Stats fetched successfully",
    data: {
      totalUsers,
      activeUsers,
      inActiveUsers,
      newSignUps,
    },
  });
});

const updatePassword = catchAsync(async (req, res, next) => {
  const id = req.user.id;
  const adminUser = await Admin.findById(id).select("+password");
  if (!adminUser) {
    return next(new AppError("User Not Found", 404));
  }
  const isMatch = await adminUser.correctPassword(
    req.body.currentPassword,
    adminUser.password,
  );
  if (!isMatch) {
    return next(new AppError("Your password is incorrect", 400));
  }

  adminUser.password = req.body.newPassword;
  await adminUser.save();
  res.status(200).json({
    status: "success",
    message: "Password Updated Successfully",
  });
});

const updateTheme = catchAsync(async (req, res, next) => {
  const id = req.user.id;
  const adminUser = await Admin.findById(id);
  if (!adminUser) {
    return next(new AppError("User Not Found", 404));
  }
  adminUser.theme = req.body.theme;
  await adminUser.save();
  res.status(200).json({
    status: "success",
    message: "Theme Updated Successfully",
    data: adminUser.theme,
  });
});

module.exports = {
  registerUser,
  userLogin,
  getAdminsData,
  getAdminInfo,
  getUsers,
  editUser,
  deleteUser,
  getStats,
  updatePassword,
  updateTheme,
};
