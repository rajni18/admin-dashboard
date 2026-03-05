import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../redux/usersDataSlice";
import AuthReducer from "../redux/authSlice";
import AdminReducer from "../redux/adminsDataSlice";

const Store = configureStore({
  reducer: {
    UsersData: UserReducer,
    Auth: AuthReducer,
    AdminsData: AdminReducer,
  },
});

export default Store;
