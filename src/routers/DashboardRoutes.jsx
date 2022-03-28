import { Route, Routes } from 'react-router-dom';
import BaseDashboard from '../pages/dashboardPages/BaseDashboard';
import CareersListPage from '../pages/dashboardPages/CareersListPage';
import Dashboard from '../pages/dashboardPages/Dashboard';
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
        <Route index element={<Dashboard />} />
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
