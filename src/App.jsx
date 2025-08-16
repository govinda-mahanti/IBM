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
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/persona" element={<Persona />} />
          <Route path="/therapist" element={<Therapist />} />
          <Route path="/psychiatrist" element={<Psychiatrist />} />
          <Route path="/about" element={<About />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
