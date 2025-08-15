import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

import Footer from "./Components/Footer";
import Therapist from "./Pages/Therapist";
import Persona from "./Pages/Persona";
import About from "./Pages/About";
import Psychiatrist from "./Pages/Psychiatrist";

import Home from "./Pages/Home";
import Yoga from "./Pages/Yoga";
const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/persona" element={<Persona />} />
          <Route path="/therapist" element={<Therapist />} />
          <Route path="/psychiatrist" element={<Psychiatrist />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}

          <Route path="/yoga" element={<Yoga />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
