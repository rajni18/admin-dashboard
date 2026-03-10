import UserRow from "./UserRow";

const UserList = ({ limit, recentUsers, filteredUsers }) => {
  return (
    <div
      className="
      bg-white dark:bg-zinc-800
      border border-gray-200 dark:border-zinc-700
      rounded-xl
      shadow-sm
      transition-colors
      overflow-hidden
    "
    >
      {/* Header */}
      <div
        className="
        px-4 py-3
        border-b border-gray-200 dark:border-zinc-700
      "
      >
        <h2
          className="
          text-lg font-semibold
          text-gray-800 dark:text-zinc-200
        "
        >
          Recent Users
        </h2>
      </div>
      <div className="overflow-x-auto">
        <UserRow
          limit={limit}
          recentUsers={recentUsers}
          filteredUsers={filteredUsers}
        />
      </div>
    </div>
  );
};

export default UserList;
