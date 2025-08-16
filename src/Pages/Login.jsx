import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCredentials } from "../redux/authSlice";
import { BASE_URL } from "../config/urlConfig";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, loginData, {
        headers: { "Content-Type": "application/json" },
      });

      if (data?.token) {
        dispatch(setCredentials({ user: data.user, token: data.token }));
        navigate("/");
      } else {
        setError("Invalid login response from server.");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen px-4 sm:px-6 lg:px-8 justify-center flex items-center"
      style={{ backgroundColor: "#2B2B2B" }}
    >
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-[#1d1d1d] rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Welcome Back!
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
              Sign in to continue
            </p>

            {error && (
              <p className="text-red-500 text-sm text-center mb-4">{error}</p>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={loginData.email}
                onChange={handleLoginChange}
                required
                className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-violet-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-violet-700 hover:scale-105"
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>

          <div className="p-4 text-center bg-gray-50 dark:bg-[#252525]">
            <span className="text-gray-600 dark:text-gray-300">
              Don&apos;t have an account?
            </span>
            <button
              onClick={() => navigate("/signup")}
              className="text-violet-600 dark:text-violet-400 font-bold ml-2 hover:underline"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
