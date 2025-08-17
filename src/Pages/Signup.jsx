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
    const [loading, setLoading] = useState(false); 


  // 👇 aligned with backend fields
  const [signupData, setSignupData] = useState({
    fullname: "",
    country: "",
    email: "",
    phoneNo: "",
    gender: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
        setLoading(true);


    try {
      const { data } = await axios.post(`${BASE_URL}/auth/signup`, signupData);

      dispatch(setCredentials({ user: data, token: data.token }));

      alert("Signup successful!");
        navigate("/");
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message || "Signup failed! Please try again."
      );
    }
  };

  return (
    <div
      className="min-h-screen px-4 sm:px-6 lg:px-8 justify-center flex items-center "
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
              {/* Fullname */}
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={signupData.fullname}
                onChange={handleSignupChange}
                required
                className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
              />

              {/* Country */}
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

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={signupData.email}
                onChange={handleSignupChange}
                required
                className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
              />

              {/* Phone Number */}
              <input
                type="tel"
                name="phoneNo"
                placeholder="Phone Number"
                value={signupData.phoneNo}
                onChange={handleSignupChange}
                required
                className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
              />

              {/* Gender */}
              <div className="pt-2">
                <span className="text-gray-600 dark:text-gray-400 font-semibold">
                  Gender
                </span>
                <div className="flex items-center space-x-6 mt-2">
                  {["Male", "Female", "Other"].map((g) => (
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
                      <span className="ml-2">{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signupData.password}
                onChange={handleSignupChange}
                required
                className="w-full pl-4 pr-4 py-2 bg-gray-100 dark:bg-[#2d2d2d] border rounded-lg focus:ring-2 focus:ring-violet-500 text-gray-800 dark:text-white"
              />

              {/* Submit */}
               <button
                type="submit"
                disabled={loading} 
                className={`w-full font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-violet-600 hover:bg-violet-700 focus:ring-violet-500 text-white hover:scale-105"
                }`}
              >
                {loading ? "Submitting..." : "Sign Up"}
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
