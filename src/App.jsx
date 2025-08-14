import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

import Home from "./Pages/Home";
import Yoga from "./Pages/Yoga"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/yoga-wellness" element={<Yoga />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
