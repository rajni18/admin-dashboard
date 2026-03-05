import { createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

export const usersDataAsync = () => async (dispatch) => {
  try {
    const response = await api.get("/get-users");
    const data = response.data.data;
    dispatch(setUsers(data));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getStatsDataAsync = () => async (dispatch) => {
  const response = await api.get("/stats");
  const data = response.data.data;
  dispatch(setStats(data));
};

export const deleteUserAsync = (userId) => async (dispatch) => {
  try {
    await api.delete(`/${userId}/delete-user`);
    dispatch(handleDelete(userId));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const editUserAsync =
  ({ userId, data }) =>
  async (dispatch) => {
    const response = await api.patch(`/${userId}/update-user`, data);
    dispatch(updateUser(response.data.data));
  };

const UserSlice = createSlice({
  name: "UsersData",
  initialState: {
    users: [],
    stats: null,
    searchTerm: "",
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    setStats: (state, action) => {
      state.stats = action.payload;
    },

    handleDelete: (state, action) => {
      state.users = state.users.filter((user) => user._id !== action.payload);
    },

    updateUser: (state, action) => {
      state.users = state.users.map((user) =>
        user._id === action.payload._id ? { ...user, ...action.payload } : user,
      );
    },

    handleSearchChange: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  setUsers,
  setError,
  setStats,
  handleDelete,
  updateUser,
  handleSearchChange,
} = UserSlice.actions;
export default UserSlice.reducer;
