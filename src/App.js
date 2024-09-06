import React from "react";
import { Routes, Route, Redirect, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/home" Component={Home}></Route>
        <Route exact path="/about" Component={About}></Route>
        <Route exact path="/service" Component={Service}></Route>
        <Route exact path="/contact" Component={Contact}></Route>
        <Route path="*" Component={Error}></Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
