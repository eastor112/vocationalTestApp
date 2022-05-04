import { Route, Routes } from 'react-router-dom';
import BaseDashboard from '../pages/dashboardPages/BaseDashboard';
import CareersListPage from '../pages/dashboardPages/CareersListPage';
import CareerUpdatePage from '../pages/dashboardPages/CareerUpdatePage';
import Checkout from '../pages/dashboardPages/Checkout';
import DashboardPage from '../pages/dashboardPages/DashboardPage';
import EditTestPage from '../pages/dashboardPages/EditTestPage';
import GeneralPage from '../pages/dashboardPages/GeneralPage';
import Payment from '../pages/dashboardPages/Payment';
import SelectTestPage from '../pages/dashboardPages/SelectTestPage';
import SelectTestResultPage from '../pages/dashboardPages/SelectTestResultPage';
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
        <Route path='tests' element={<SelectTestPage />} />
        <Route path='tests/:testId' element={<VocationalTestPage />} />
        <Route path='testsresults' element={<SelectTestResultPage />} />
        <Route path='testsresults/:resultId' element={<VocationalTestResultPage />} />
        <Route path='institution/:part' element={<UniversityProfileFormPage />} />
        <Route path='user/profile' element={<UserProfilePage />} />
        <Route path='users' element={<UsersListPage />} />
        <Route path='careers' element={<CareersListPage />} />
        <Route path='admin/tests' element={<TestsListPage />} />
        <Route path='payment' element={<Payment />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='admin/:part' element={<EditTestPage />} />
        <Route path='editcareer/:id' element={<CareerUpdatePage />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
