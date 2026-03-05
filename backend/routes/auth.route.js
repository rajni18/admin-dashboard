const router = require("express").Router();
const {
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
} = require("../controller/auth.controller");
const validationCheck = require("../middleware/validationCheck");
const authHandler = require("../middleware/authHandler");
const restrictTo = require("../middleware/restrictTo");

router.post("/auth/register", validationCheck, registerUser);
router.post("/auth/login", validationCheck, userLogin);

//admindata-routes
router.get(
  "/get-admins",
  authHandler,
  restrictTo("super_admin"),
  getAdminsData,
);
router.get(
  "/get-admininfo",
  authHandler,
  restrictTo("admin", "super_admin"),
  getAdminInfo,
);

//usersdata-routes
router.get(
  "/get-users",
  authHandler,
  restrictTo("admin", "super_admin"),
  getUsers,
);
router.patch("/:id/update-user", authHandler, restrictTo("admin"), editUser);
router.delete("/:id/delete-user", authHandler, restrictTo("admin"), deleteUser);
router.get("/stats", authHandler, restrictTo("admin", "super_admin"), getStats);
router.patch(
  "/update-password",
  authHandler,
  restrictTo("admin"),
  updatePassword,
);
router.patch("/update-theme", authHandler, restrictTo("admin"), updateTheme);

module.exports = router;
