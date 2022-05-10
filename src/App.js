import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import "./components/components.css";
import Navbar from "./components/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import About from "./components/About";
import NavBarNew from "./components/NavBarNew";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
        <NavBarNew />
        {/* <Popup /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        {/* <Home />  */}
        {/* <About /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
