import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCredentials } from "../redux/authSlice";
import { BASE_URL } from "../config/urlConfig";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, loginData);

      if (data?.token) {
        // 👇 build user object from backend response
        const user = {
          _id: data._id,
          fullname: data.fullname,
          email: data.email,
        };

        dispatch(setCredentials({ user, token: data.token }));

        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert("Invalid login response from server.");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed. Try again.");
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
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              Sign in to continue
            </p>

            <form onSubmit={handleLoginSubmit} className="space-y-6">
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                  className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-violet-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-transform transform hover:scale-105"
              >
                Login
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="p-4 text-center bg-gray-50 dark:bg-[#252525]">
            <span className="text-gray-600 dark:text-gray-300">
              Don&apos;t have an account?
            </span>
            <button
              onClick={() => navigate("/signup")}
              className="text-violet-600 dark:text-violet-400 font-bold ml-2 hover:underline focus:outline-none"
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
