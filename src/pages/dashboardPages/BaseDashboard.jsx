import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/organisms/sidebar/Sidebar';

const BaseDashboard = () => {
  const [width, setWidth] = useState(64);
  return (
    <>
      <Sidebar setWidth={setWidth} />
      <Outlet context={width} />
    </>
  );
};

export default BaseDashboard;
