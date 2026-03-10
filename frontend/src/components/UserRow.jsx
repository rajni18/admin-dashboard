import { useDispatch } from "react-redux";
import { deleteUserAsync } from "../redux/usersDataSlice";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"; // Heroicons

const UserRow = ({ handleEdit, limit, recentUsers, filteredUsers }) => {
  const dispatch = useDispatch();
  const displayedUsers = limit ? filteredUsers.slice(0, limit) : filteredUsers;

  return (
    <table className="w-full text-left text-sm">
      <thead className="bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-600">
        <tr>
          <th className="px-4 py-4 font-medium">Name</th>
          {/* hide email column for mobile case */}
          <th className="px-4 py-4 font-medium hidden sm:table-cell">Email</th>
          <th className="px-4 py-4 font-medium">Status</th>
          {!recentUsers && (
            <th className="px-4 py-4 font-medium text-right">Actions</th>
          )}
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
        {displayedUsers.map((user) => (
          <tr
            className="hover:bg-gray-50 dark:hover:bg-zinc-700"
            key={user._id}
          >
            <td className="px-4 py-4">
              <div className="flex flex-col">
                <span className="font-semibold dark:text-zinc-200">
                  {user.name}
                </span>
                {/* in mobile case show email in name cell below */}
                <span className="text-[12px] text-gray-500 sm:hidden truncate w-24">
                  {user.email}
                </span>
              </div>
            </td>

            {/* Email column hidden on mobile */}
            <td className="px-4 py-4 hidden sm:table-cell dark:text-zinc-300">
              {user.email}
            </td>

            <td className="px-4 py-4">
              <button
                className={`text-white px-2 py-1 rounded text-[10px] sm:text-xs w-20 sm:w-24 ${
                  user.status === "Active" ? "bg-[#22C55E]" : "bg-[#EF4444]"
                }`}
              >
                {user.status}
              </button>
            </td>

            {!recentUsers && (
              <td className="px-4 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => handleEdit(user._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded-md transition-all"
                  >
                    <PencilSquareIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => dispatch(deleteUserAsync(user._id))}
                    className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-md transition-all"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserRow;
