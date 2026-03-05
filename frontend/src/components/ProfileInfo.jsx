const ProfileInfo = ({ currentAdmin }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border p-5 mb-5">
        <h3 className="font-medium text-gray-800 mb-4">
          👤 Profile Information
        </h3>

        <div className="flex justify-between text-sm mb-3">
          <span className="text-gray-500">Email</span>
          <span className="font-medium text-gray-800">
            {currentAdmin.email}
          </span>
        </div>

        <div className="flex justify-between text-sm mb-3">
          <span className="text-gray-500">Role</span>
          <span className="font-medium text-gray-800">{currentAdmin.role}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Account Status</span>
          <span className="font-medium text-green-600">Active</span>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
