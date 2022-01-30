// Import libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import components
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Galerypage from "./pages/Galerypage";
import ScrollToTop from "./components/ScrollToTop";
import Errorpage from "./pages/Errorpage";
import Contactpage from "./pages/Contactpage";
import ComingSoon from "./pages/ComingSoon";

// Import assets
import "./App.css";


const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route exact path="/galery" element={<Galerypage />} />
        <Route exact path="/contact" element={<Contactpage />} />
        <Route exact path="/shop" element={<ComingSoon />} />
        <Route exact path="/shop/product" element={<ComingSoon />} />
        <Route exact path="/shop/login" element={<ComingSoon />} />
        <Route exact path="/shop/register" element={<ComingSoon />} />
        <Route exact path="/shop/cart" element={<ComingSoon />} />
        <Route exact path="/donate" element={<ComingSoon />} />
        <Route path="*" element={<Errorpage />}/>
      </Routes>
    </ScrollToTop>
  );
};

export default App;
