import { useDispatch } from "react-redux";
import { deleteUserAsync } from "../redux/usersDataSlice";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"; // Heroicons

const UserRow = ({ handleEdit, limit, recentUsers, filteredUsers }) => {
  const dispatch = useDispatch();
  const displayedUsers = limit ? filteredUsers.slice(0, limit) : filteredUsers;

  return (
    <>
      <table className="w-full text-left text-sm rounded shadow-sm dark:shadow-gray-800">
        <thead className="bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-600">
          <tr>
            <th className="px-6 py-4 font-medium">Name</th>
            <th className="px-6 py-4 font-medium">Email</th>
            <th className="px-6 py-4 font-medium">Status</th>
            {!recentUsers && (
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {displayedUsers.map((user) => (
            <tr
              className="hover:bg-gray-50 dark:hover:text-black"
              key={user._id}
            >
              <td className="px-6 py-4 font-semibold">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4 text-green-600 font-medium">
                <button
                  className={`text-white px-2 py-1 rounded text-xs w-24 ${
                    user.status === "Active" ? "bg-[#22C55E]" : "bg-[#EF4444]"
                  }`}
                >
                  {user.status}
                </button>
              </td>
              {!recentUsers && (
                <td className="px-6 py-4 text-right space-x-2 flex justify-end">
                  {/* Edit Icon */}
                  <button
                    onClick={() => handleEdit(user._id)}
                    className="bg-blue-300 hover:bg-blue-400 text-white p-2 rounded-md shadow-sm transition-all duration-200"
                    title="Edit"
                  >
                    <PencilSquareIcon className="w-5 h-5" />
                  </button>

                  {/* Delete Icon */}
                  <button
                    onClick={() => dispatch(deleteUserAsync(user._id))}
                    className="bg-[#EF4444] hover:bg-red-700 text-white p-2 rounded-md shadow-sm transition-all duration-200"
                    title="Delete"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserRow;
