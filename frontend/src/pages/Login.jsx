import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, logout, loginUserAsync } from "../redux/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.Auth.loginUser);
  const form = useSelector((state) => state.Auth.form);
  const error = useSelector((state) => state.Auth.error);
  if (loginUser) return <Navigate to="/" replace />;
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md ">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Admin Login
          </h1>

          {/* Form */}
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(loginUserAsync(form));
            }}
          >
            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.email}
                onChange={(e) =>
                  dispatch(
                    handleChange({
                      name: e.target.name,
                      value: e.target.value,
                    }),
                  )
                }
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-600 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.password}
                onChange={(e) =>
                  dispatch(
                    handleChange({
                      name: e.target.name,
                      value: e.target.value,
                    }),
                  )
                }
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <div className="flex justify-center items-center font-semibold ">
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
