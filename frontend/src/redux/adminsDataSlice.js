import { createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

export const AdminsDataAsync = () => async (dispatch) => {
  try {
    const response = await api.get("/get-admins");
    dispatch(setAdmins(response.data.data));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const getAdminInfoAsync = () => async (dispatch) => {
  try {
    const response = await api.get("/get-admininfo");
    const data = response.data.data;
    console.log("getAdminInfoAsync---", data);
    dispatch(currentAdminInfo(data));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

export const updatePasswordAsync = (data) => async (dispatch) => {
  try {
    console.log("updatePasswordAsync", data);
    await api.patch("/update-password", data);
  } catch (err) {
    dispatch(setError(err.response.data.message) || "Password update failed");
  }
};

export const updateThemeAsync = (theme) => async (dispatch) => {
  try {
    const response = await api.patch("/update-theme", { theme });
    console.log("updateThemeAsync", response.data.data);
    dispatch(setTheme(response.data.data));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

const AdminsDataSlice = createSlice({
  name: "AdminsData",
  initialState: {
    admins: [],
    currentAdmin: null,
    error: null,
  },
  reducers: {
    setAdmins: (state, action) => {
      state.admins = action.payload;
    },

    currentAdminInfo: (state, action) => {
      state.currentAdmin = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    setTheme: (state, action) => {
      state.currentAdmin.theme = action.payload;
    },
  },
});

export const { setAdmins, currentAdminInfo, setError, setTheme } =
  AdminsDataSlice.actions;
export default AdminsDataSlice.reducer;
