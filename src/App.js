// Import libraries
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import components
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Galerypage from "./pages/Galerypage";
import Shoppage from "./pages/Shoppage";
import ScrollToTop from "./components/ScrollToTop";
import Errorpage from "./pages/Errorpage";
import Productpage from "./pages/Productpage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";

// Import assets
import "./App.css";

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<Aboutpage />} />
        <Route exact path="/galery" element={<Galerypage />} />
        <Route exact path="/shop" element={<Shoppage />} />
        <Route exact path="/shop/product" element={<Productpage />} />
        <Route exact path="/shop/login" element={<Loginpage />} />
        <Route exact path="/shop/Register" element={<Registerpage />} />
        <Route path="*" element={<Errorpage />}/>
      </Routes>
    </ScrollToTop>
  );
};

export default App;
