import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserAsync } from "../redux/usersDataSlice";
const useEditUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersData.users);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "Active",
  });

  useEffect(() => {
    if (editedUser) {
      setFormData({
        name: editedUser.name,
        email: editedUser.email,
        status: editedUser.status,
      });
    }
  }, [editedUser]);

  const handleEdit = (id) => {
    setEditModalOpen(true);
    const updatedUser = users.find((user) => user._id === id);
    setEditedUser(updatedUser);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editUserAsync({
        userId: editedUser._id,
        data: formData,
      }),
    );
    setEditModalOpen(false);
  };

  const closeModal = () => {
    setEditModalOpen(false);
  };

  return {
    editModalOpen,
    closeModal,
    editedUser,
    handleEdit,
    handleChange,
    formData,
    handleSubmit,
  };
};

export default useEditUser;
