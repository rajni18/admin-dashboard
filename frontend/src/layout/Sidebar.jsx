import { NavLink } from "react-router-dom";
const Siderbar = ({ isOpen, onClose }) => {
  return (
    <>
      <div className="bg-[#E2E8F0] w-64 font-semibold dark:bg-gray-700 ">
        <ul className="p-8 flex flex-col gap-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700 dark:text-white"
              }
            >
              Dashboard
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700 dark:text-white"
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-700 dark:text-white"
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Siderbar;
