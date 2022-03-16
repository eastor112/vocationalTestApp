import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarFlow from './components/organisms/navBar/NavBarFlow'



const App = () => {
  return (
    <>
      <NavBarFlow />
      <Outlet />
    </>
  )
}

export default App
