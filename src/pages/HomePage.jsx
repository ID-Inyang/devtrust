import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <>
      <div className='min-h-screen bg-[#101622]' 
            style={{ 
            backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default HomePage
