const EditUserModal = ({
  isOpen,
  isClose,
  handleChange,
  formData,
  handleSubmit,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black/40 backdrop-blur-sm "
          onClick={isClose}
        >
          <form
            className="bg-white w-96 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
          >
            <div className="bg-gray-100 p-4 border-b border-gray-300 flex justify-between items-center">
              <h5 className="text-lg font-semibold">Edit User</h5>
              <button className="text-lg" onClick={isClose}>
                X
              </button>
            </div>
            <div className="p-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-md p-2"
                value={formData.name}
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-md p-2"
                value={formData.email}
                onChange={handleChange}
              />
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Status
              </label>
              <select
                name="status"
                className="w-full border border-gray-300 rounded-md p-2"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="bg-gray-100 p-4 border-t border-gray-300 flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={isClose}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default EditUserModal;
