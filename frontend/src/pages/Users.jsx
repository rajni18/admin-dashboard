import UserRow from "../components/UserRow";
import useEditUser from "../hooks/useEditUser";
import EditUserModal from "../Modals/EditUserModal";
import useFilters from "../hooks/useFilters";

const Users = () => {
  const {
    editModalOpen,
    closeModal,
    handleEdit,
    handleChange,
    formData,
    handleSubmit,
  } = useEditUser();

  const { filteredUsers, status, handleStatusChange } = useFilters();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 transition-colors">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center px-8 pt-8 pb-4 gap-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-zinc-100">
          Users List
        </h1>

        {/* Filter */}
        <div className="flex items-center gap-3">
          <span className="text-gray-600 dark:text-zinc-300 font-medium">
            Filter by Status:
          </span>

          <select
            className="
              px-4 py-2
              rounded-lg
              border border-gray-300 dark:border-zinc-600
              bg-white dark:bg-zinc-800
              text-gray-700 dark:text-zinc-200
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-colors
            "
            value={status}
            onChange={handleStatusChange}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="px-2 md:px-8 pb-8">
        <div
          className="
          bg-white dark:bg-zinc-800 dark:text-white 
          border border-gray-200 dark:border-zinc-700
          rounded-xl
          shadow-sm
          overflow-hidden
          transition-colors
        "
        >
          <UserRow handleEdit={handleEdit} filteredUsers={filteredUsers} />
        </div>
      </div>

      {/* Modal */}
      {editModalOpen && (
        <EditUserModal
          isOpen={editModalOpen}
          isClose={closeModal}
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Users;
