import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import LandingPage from '../pages/publicPages/LandingPage';
import SignUpPage from '../pages/authPages/SignUpPage';
import AboutPage from '../pages/publicPages/AboutPage';
import ContactPage from '../pages/publicPages/ContactPage';
import LoginPage from '../pages/authPages/LoginPage';
import CareerInformationPage from '../pages/publicPages/CareerInformationPage';
import UniversityProfilePage from '../pages/publicPages/UniversityProfilePage';
import SearchUniversityPage from '../pages/publicPages/SearchUniversityPage';
import NotFound404 from '../pages/publicPages/NotFound404';
import DashboardRoutes from './DashboardRoutes';
import { store } from '../store/store';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ValidatePage from '../pages/authPages/ValidatePage';

const MainRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='career/:id' element={<CareerInformationPage />} />
          <Route path='university/:id' element={<UniversityProfilePage />} />
          <Route path='search' element={<SearchUniversityPage />} />
          <Route
            path='login'
            element={(
              <PublicRoute route='/dashboard/test'>
                <LoginPage />
              </PublicRoute>
            )}
          />
          <Route
            path='signup'
            element={(
              <PublicRoute route='/dashboard/test'>
                <SignUpPage />
              </PublicRoute>
            )}
          />
          <Route path='activate/:hash' element={<ValidatePage />} />
        </Route>

        <Route
          path='/dashboard/*'
          element={(
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          )}
        />

        <Route path='*' element={<NotFound404 />} />

      </Routes>
    </BrowserRouter>
  </Provider>
);

export default MainRouter;
