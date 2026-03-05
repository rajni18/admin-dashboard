import { useState } from "react";
import { updateThemeAsync } from "../redux/adminsDataSlice";
import { useSelector, useDispatch } from "react-redux";

const AppInfo = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.AdminsData.currentAdmin?.theme);

  const themes = ["light", "dark"];

  const handleChange = (option) => {
    dispatch(updateThemeAsync(option));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-6">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
          Application Preferences
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Manage appearance and interface behavior for your account.
        </p>
      </div>

      {/* Theme Section */}
      <div className="border-t border-gray-100 pt-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-gray-900">Theme</p>
          </div>

          <span className="text-xs text-gray-400 capitalize">{theme} mode</span>
        </div>

        {/* Segmented Control */}
        <p className="text-xs text-gray-500 mb-1">
          Select how the application should appear to you.
        </p>
        <div className="inline-flex bg-gray-50 border border-gray-200 rounded-xl p-1">
          {themes.map((option) => (
            <button
              key={option}
              onClick={() => handleChange(option)}
              className={`px-6 py-1 text-sm font-medium rounded-lg capitalize transition-all duration-150
                ${
                  theme === option
                    ? "bg-[#1E2A3A] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications Section */}
      <div className="border-t border-gray-100 pt-6 mt-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">Notifications</p>
          <p className="text-xs text-gray-500 mt-1">
            Configure how you receive system updates and alerts.
          </p>
        </div>

        <span className="text-sm font-medium text-gray-700">Enabled</span>
      </div>
    </div>
  );
};

export default AppInfo;
