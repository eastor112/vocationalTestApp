import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import App from '../App';
import LandingPage from '../pages/LandingPage';
import SignUpPage from '../pages/SignUpPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import VocationalTestPage from '../pages/VocationalTestPage';
import VocationalTestResultPage from '../pages/VocationalTestResultPage';
import CareerInformationPage from '../pages/CareerInformationPage';
import UniversityProfilePage from '../pages/UniversityProfilePage';
import SearchUniversityPage from '../pages/SearchUniversityPage';
import Dashboard from '../pages/Dashboard';
import NotFound404 from '../pages/NotFound404';
import UniversityProfileFormPage from '../pages/UniversityProfileFormPage';

const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='test' element={<VocationalTestPage />} />
        <Route path='test/result' element={<VocationalTestResultPage />} />
        <Route path='career/:id' element={<CareerInformationPage />} />
        <Route path='university/1' element={<UniversityProfilePage />} />
        <Route path='search' element={<SearchUniversityPage />} />
      </Route>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<UniversityProfileFormPage />} />
      <Route path='*' element={<NotFound404 />} />
    </Routes>
  </BrowserRouter>
);

export default MainRouter;
