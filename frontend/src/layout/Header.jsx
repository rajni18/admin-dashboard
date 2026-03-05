import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleSearchChange } from "../redux/usersDataSlice";
import { logout } from "../redux/authSlice";
const Header = () => {
  const searchTerm = useSelector((state) => state.UsersData.searchTerm);
  const dispatch = useDispatch();
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#1E2A3A] text-white font-semibold h-[70px]">
      <div className="text-xl">[📊] AdminPanel</div>
      <div className="flex items-center gap-4">
        <span className="">Search :</span>
        <input
          type="text"
          className=" rounded-md p-1  placeholder-text-xs bg-[#243447] border border-[#334155] text-white placeholder-gray-400
 "
          value={searchTerm}
          onChange={(e) => dispatch(handleSearchChange(e.target.value))}
          placeholder="Search User"
        />
      </div>
      <div className="flex justify-center items-center gap-12">
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
        <button
          className="bg-red-600 hover:bg-red-400  text-white px-3 py-1 rounded "
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
