import { Route, Routes } from 'react-router-dom';
import BaseDashboard from '../pages/dashboardPages/BaseDashboard';
import CareersListPage from '../pages/dashboardPages/CareersListPage';
import DashboardPage from '../pages/dashboardPages/DashboardPage';
import GeneralPage from '../pages/dashboardPages/GeneralPage';
import TestsListPage from '../pages/dashboardPages/TestsListPage';
import UniversityProfileFormPage from '../pages/dashboardPages/UniversityProfileFormPage';
import UserProfilePage from '../pages/dashboardPages/UserProfilePage';
import UsersListPage from '../pages/dashboardPages/UsersListPage';
import VocationalTestPage from '../pages/dashboardPages/VocationalTestPage';
import VocationalTestResultPage from '../pages/dashboardPages/VocationalTestResultPage';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<BaseDashboard />}>
        <Route index element={<DashboardPage />} />
        <Route path='general' element={<GeneralPage />} />
        <Route path='test' element={<VocationalTestPage />} />
        <Route path='test/result' element={<VocationalTestResultPage />} />
        <Route path='institution/profile' element={<UniversityProfileFormPage />} />
        <Route path='user/profile' element={<UserProfilePage />} />
        <Route path='users' element={<UsersListPage />} />
        <Route path='careers' element={<CareersListPage />} />
        <Route path='tests' element={<TestsListPage />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;