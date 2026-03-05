import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import MainDashboard from "./pages/MainDashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import updateThemeAsync from "./redux/adminsDataSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const App = () => {
  const theme = useSelector((state) => state.AdminsData.currentAdmin?.theme);
  useEffect(() => {
    const root = document.documentElement;
    if (!theme) return;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<MainDashboard />}></Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="settings" element={<Settings />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
