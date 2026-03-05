import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

const useFilters = () => {
  const users = useSelector((state) => state.UsersData.users);
  const searchTerm = useSelector((state) => state.UsersData.searchTerm);
  const dispatch = useDispatch();

  const [status, setStatus] = useState("All");
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const filteredUsers = useMemo(() => {
    let result = users;
    if (searchTerm) {
      result = users.filter((user) => {
        return (
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    if (status !== "All") {
      return result.filter((user) => user.status === status);
    }

    return result;
  }, [users, status, searchTerm]);

  return { filteredUsers, status, handleStatusChange };
};

export default useFilters;
