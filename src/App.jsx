import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarFlow from './components/organisms/navBar/NavBarFlow';

function App() {
  return (
    <>
      <NavBarFlow />
      <Outlet />
    </>
  );
}

export default App;
