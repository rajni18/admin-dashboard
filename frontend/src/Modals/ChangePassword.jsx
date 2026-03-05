import { useState } from "react";
const ChangePassword = ({ isOpen, isClose, onSave }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validation = () => {
    let errors = {};
    if (!formData.currentPassword) {
      errors.currentPassword = "Current password is required";
    } else if (formData.currentPassword.length < 6) {
      errors.currentPassword = "Current password must be at least 6 characters";
    }

    if (!formData.newPassword) {
      errors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 6) {
      errors.newPassword = "New password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Plz confirm your New Password";
    } else if (formData.confirmPassword !== formData.newPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("formData", formData);
    onSave(formData);
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    isClose();
    setErrors({});
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black/40 backdrop-blur-sm "
          onClick={isClose}
        >
          <div
            className="bg-white w-full max-w-lg rounded-lg shadow-sm border p-5 mb-5"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-medium text-gray-800 mb-4">
              🔑 Change Password
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Current Password */}
              <div>
                <label
                  htmlFor="currentPassword"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Enter current password"
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
              </div>
              {errors.currentPassword && (
                <p className="text-red-500 text-sm">{errors.currentPassword}</p>
              )}

              {/* New Password */}
              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm text-gray-600 mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Enter new password"
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-sm">{errors.newPassword}</p>
              )}

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm text-gray-600 mb-1"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}

              {/* Actions */}
              <div className="flex justify-start gap-3 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 text-sm rounded-md border text-gray-600 hover:bg-gray-50"
                  onClick={isClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Update Password
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-400 mt-3">
              Make sure your new password is strong and secure.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePassword;
