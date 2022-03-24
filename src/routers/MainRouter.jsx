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
import NotFound404 from '../pages/NotFound404';
import UniversityProfileFormPage from '../pages/UniversityProfileFormPage';
import UserProfilePage from '../pages/UserProfilePage';
import DashboardRoutes from '../pages/dashboardPages/DashboardRoutes';
import Dashboard from '../pages/Dashboard';
import UsersListPage from '../pages/UsersListPage';
import CareersListPage from '../pages/CareersListPage';
import TestsListPage from '../pages/TestsListPage';

const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<LandingPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='career/:id' element={<CareerInformationPage />} />
        <Route path='university/:id' element={<UniversityProfilePage />} />
        <Route path='search' element={<SearchUniversityPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='test' element={<VocationalTestPage />} />
        <Route path='test/result' element={<VocationalTestResultPage />} />
      </Route>

      <Route path='/dashboard' element={<DashboardRoutes />}>
        <Route index element={<Dashboard />} />
        <Route path='institution/profile' element={<UniversityProfileFormPage />} />
        <Route path='user/profile' element={<UserProfilePage />} />
        <Route path='users' element={<UsersListPage />} />
        <Route path='careers' element={<CareersListPage />} />
        <Route path='tests' element={<TestsListPage />} />
      </Route>

      <Route path='*' element={<NotFound404 />} />
    </Routes>
  </BrowserRouter>
);

export default MainRouter;
