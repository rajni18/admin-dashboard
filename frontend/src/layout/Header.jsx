import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleSearchChange } from "../redux/usersDataSlice";
const Header = ({ handleSidebar }) => {
  const searchTerm = useSelector((state) => state.UsersData.searchTerm);
  const dispatch = useDispatch();
  return (
    <header className="flex items-center justify-between gap-6 px-3 md:px-8 py-4 bg-[#1E2A3A] text-white font-semibold h-[70px]">
      <div className="text-xl shrink-0 flex items-center gap-2">
        <span
          className="text-2xl shrink-0 md:hidden text-gray-300 hover:text-white"
          onClick={handleSidebar}
        >
          ☰
        </span>
        <span>📊AdminPanel</span>
      </div>
      <div className="flex items-center px-2 md:px-6 w-full max-w-[420px]">
        <input
          type="text"
          className=" rounded-md px-4 py-1 w-full placeholder:text-sm bg-[#243447] border border-[#334155] text-white placeholder-gray-400
 "
          value={searchTerm}
          onChange={(e) => dispatch(handleSearchChange(e.target.value))}
          placeholder="Search user..."
        />
      </div>

      <div className="hidden md:flex justify-center items-center gap-12 shrink-0 ">
        <div className="flex justify-center items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive && "text-blue-400 border-b-2 border-blue-400"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) => isActive && "text-blue-400"}
          >
            Users
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => isActive && "text-blue-400"}
          >
            Settings
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
