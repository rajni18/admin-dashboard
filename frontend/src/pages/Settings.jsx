import ProfileInfo from "../components/ProfileInfo";
import AppInfo from "../components/AppInfo";
import SecurityInfo from "../components/SecurityInfo";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import ChangePassword from "../Modals/ChangePassword";
import {
  getAdminInfoAsync,
  updatePasswordAsync,
  updateThemeAsync,
} from "../redux/adminsDataSlice";
import { logout } from "../redux/authSlice";
const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const currentAdmin = useSelector((state) => state.AdminsData.currentAdmin);
  useEffect(() => {
    dispatch(getAdminInfoAsync());
  }, [dispatch]);
  const handleChangePassword = () => {
    console.log("handleChangePassword");
    setIsOpen(true);
  };

  const onSave = ({ currentPassword, newPassword }) => {
    dispatch(updatePasswordAsync({ currentPassword, newPassword }));
    setIsOpen(false);
  };
  return (
    <>
      <div
        className=" mx-auto p-9 
bg-gray-100 dark:bg-zinc-900 
min-h-screen 
text-gray-800 dark:text-zinc-200"
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-zinc-200">
            Settings
          </h1>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
            Manage your account and application preferences
          </p>
        </div>

        {/* Profile Information */}
        {currentAdmin && <ProfileInfo currentAdmin={currentAdmin} />}

        {/* Security */}
        <SecurityInfo
          handleLogout={() => dispatch(logout())}
          handleChangePassword={handleChangePassword}
        />

        {/* Application Preferences */}
        <AppInfo />

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 dark:text-zinc-500 mt-6">
          This section is under active development.
        </p>
      </div>
      {isOpen && (
        <ChangePassword
          isOpen={isOpen}
          isClose={() => setIsOpen(false)}
          onSave={onSave}
        />
      )}
    </>
  );
};

export default Settings;
