import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
