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

export default MainLayout