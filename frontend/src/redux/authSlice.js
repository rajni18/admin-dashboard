import { createSlice } from "@reduxjs/toolkit";
import api from "../api/axios";

export const loginUserAsync = (form) => async (dispatch) => {
  try {
    dispatch(setError(null));
    const response = await api.post("/auth/login", form);
    const { token, data } = response.data;
    localStorage.setItem("token", token);
    dispatch(handleSubmit(data));
  } catch (err) {
    console.log("err", err.response.data);
    dispatch(
      setError(
        err.response?.data?.message ||
          err.response?.data?.error.message ||
          "Something went wrong",
      ),
    );
    console.log(err);
  }
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    loginUser: localStorage.getItem("token") || null,
    form: {
      email: "",
      password: "",
    },
    error: null,
  },
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state.form[name] = value;
    },

    handleSubmit: (state, action) => {
      state.loginUser = action.payload;
      state.form = { email: "", password: "" };
    },

    logout: (state) => {
      localStorage.removeItem("token");
      state.loginUser = null;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { handleChange, handleSubmit, logout, setError } =
  AuthSlice.actions;
export default AuthSlice.reducer;
