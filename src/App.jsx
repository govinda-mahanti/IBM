import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

import Therapist from "./Pages/Therapist";
import Persona from "./Pages/Persona";
import About from "./Pages/About";
import Psychiatrist from "./Pages/Psychiatrist";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import Home from "./Pages/Home";
import Yoga from "./Pages/Yoga";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/persona" element={<Persona />} />
          <Route path="/therapist" element={<Therapist />} />
          <Route path="/psychiatrist" element={<Psychiatrist />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
