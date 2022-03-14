import { BrowserRouter, Routes, Route, } from "react-router-dom";


import React from 'react'
import App from "../App";
import LandingPage from "../pages/LandingPage";
import SignUpPage from "../pages/SignUpPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";


const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default MainRouter
