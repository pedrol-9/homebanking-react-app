import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation, Outlet } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';

const MainLayout = (props) => {

  const location = useLocation();
  const landingViews = location.pathname === '/' || location.pathname === '/Register';

  return (
    <div className="flex flex-col w-full min-h-screen">
        {landingViews ? <LoginHeader /> : <Header />}
        <main className="flex flex-1 flex-col bg-[#E8DFCA]">
            <Outlet />
        </main>
        <Footer />
    </div>
);
}

export default MainLayout

