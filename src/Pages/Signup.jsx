import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCredentials } from "../redux/authSlice";
import { BASE_URL } from "../config/urlConfig";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState({
    fullName: "",
    country: "",
    email: "",
    phoneNumber: "",
    gender: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Backend should return { user, token }
      const { data } = await axios.post(`${BASE_URL}/auth/signup`, signupData);

      // Store in Redux + localStorage via authSlice
      dispatch(setCredentials({ user: data.user, token: data.token }));

      alert("Signup successful!");
      navigate("/dashboard"); // or wherever you want to redirect
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message || "Signup failed! Please try again."
      );
    }
  };

  return (
    <div
      className="min-h-screen px-4 sm:px-6 lg:px-8 justify-center flex items-center"
      style={{ backgroundColor: "#2B2B2B" }}
    >
      <div className="w-full max-w-md m-4">
        <div className="bg-white dark:bg-[#1d1d1d] rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Create an Account
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              Join us and start your journey
            </p>

            <form onSubmit={handleSignupSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  required
                  className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
                />
              </div>

              {/* Country */}
              <div className="relative">
                <select
                  name="country"
                  value={signupData.country}
                  onChange={handleSignupChange}
                  required
                  className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
                >
                  <option value="">Select Country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                  className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
                />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={signupData.phoneNumber}
                  onChange={handleSignupChange}
                  required
                  className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
                />
              </div>

              {/* Gender */}
              <div className="pt-2">
                <span className="text-gray-600 dark:text-gray-400 font-semibold">
                  Gender
                </span>
                <div className="flex items-center space-x-6 mt-2">
                  {["male", "female", "other"].map((g) => (
                    <label
                      key={g}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={signupData.gender === g}
                        onChange={handleSignupChange}
                        className="form-radio h-4 w-4 text-violet-600"
                      />
                      <span className="ml-2 capitalize">{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                  className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-violet-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-transform transform hover:scale-105"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="p-4 text-center bg-gray-50 dark:bg-[#252525]">
            <span className="text-gray-600 dark:text-gray-300">
              Already have an account?
            </span>
            <button
              onClick={() => navigate("/login")}
              className="text-violet-600 dark:text-violet-400 font-bold ml-2 hover:underline focus:outline-none"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
