import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const LayoutProtected = (props) => {
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

export default LayoutProtected