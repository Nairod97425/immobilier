import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Apropos from "./components/A_Propos/Apropos";
import Home from "./components/pages/accueil"; // Update this line
import Login from "./components/Login"; // Update this line
import Signup from "./components/Signup" // Update this line
import Bien from "./components/Bien/bien";
import Contact from './components/Contact'
import Nav from "./components/navbarr";
import Footer from "./components/footer"
export default function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/bien" element={<><Nav/><Bien /><Footer/></>} />
          <Route path="/login" element={<><Nav/><Login /><Footer/></>} />
          <Route path="/signup" element={<><Nav/><Signup /><Footer/></>} />
          <Route path="/apropos" element={<><Nav/><Apropos /><Footer/></>} />
          <Route path="/contact" element={<><Nav/><Contact /><Footer/></>} />
        </Routes>
        {/* <Footer /> */}
      </>
    </Router>
  );
};
