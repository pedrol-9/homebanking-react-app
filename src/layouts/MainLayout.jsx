import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';

const MainLayout = (props) => {

  const location = useLocation();
  const landingViews = location.pathname === '/' || location.pathname === '/Register';

  return (
    <div className="flex flex-col w-full min-h-screen">
        {landingViews ? <LoginHeader /> : <Header />}
        <main className="flex flex-1 flex-col bg-[#E8DFCA]">
            {props.children}
        </main>
        <Footer />
    </div>
);
}

export default MainLayout

/*  VERSION CON OUTLET PARA LAS RUTAS PROTEGIDAS
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = (props) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="content flex flex-1 flex-col bg-[#E8DFCA]">
          <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout */

/*  VERSIÓN ANTIGUA

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = (props) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col bg-[#E8DFCA]">
        {props.children}
      </main>
      <Footer />      
    </div>
  )
}

export default MainLayout */