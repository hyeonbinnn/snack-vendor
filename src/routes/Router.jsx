import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import About from '../pages/AboutPage/About';
import Services from '../pages/ServicesPage/Services';
import Contact from '../pages/ContactPage/Contact';
import Recruit from '../pages/RecruitPage/Recruit';
import Error404 from '../pages/ErrorPage/Error404';
import Splash from '../pages/SplashPage/Splash';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/notfound" element={<Error404 />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recruit" element={<Recruit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;