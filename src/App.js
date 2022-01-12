import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Galerypage from "./pages/Galerypage";
import Contactpage from "./pages/Contactpage";
import Shoppage from "./pages/Shoppage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/galery" element={<Galerypage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/shop" element={<Shoppage />} />
      </Routes>
    </ScrollToTop>
  );
};

export default App;
