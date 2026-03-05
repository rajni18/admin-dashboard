import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
  const loginUser = useSelector((state) => state.Auth.loginUser);
  if (!loginUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
