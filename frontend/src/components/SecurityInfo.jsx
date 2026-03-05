const SecurityInfo = ({ handleLogout, handleChangePassword }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
      {/* Section Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Security Settings
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Manage your account access and password settings.
        </p>
      </div>

      {/* Change Password */}
      <div className="flex items-center justify-between py-4 border-t border-gray-200">
        <div>
          <p className="text-sm font-medium text-gray-800">Change Password</p>
          <p className="text-xs text-gray-500 mt-1">
            Update your account password.
          </p>
        </div>

        <button
          className="px-4 py-2 text-sm rounded-md bg-[#1e2a3a] text-white hover:opacity-90 transition"
          onClick={handleChangePassword}
        >
          Update Password
        </button>
      </div>

      {/* Logout */}
      <div className="flex items-center justify-between py-4 border-t border-gray-200">
        <div>
          <p className="text-sm font-medium text-gray-800">
            {" "}
            Sign out of your account.
          </p>
        </div>

        <button
          className="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SecurityInfo;
