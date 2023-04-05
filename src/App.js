import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import "./scss/main.scss";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
// import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
