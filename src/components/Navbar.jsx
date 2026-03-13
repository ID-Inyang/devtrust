import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar flex items-center justify-between p-4 border-b border-b-1 border-b-[#62727e] text-sm mb-[20px]">
            <div className="navbar-logo">
                <h1 className='font-dropshade font-bold'>In Devs We Trust</h1>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-links flex items-center gap-6 text-brandGray">
                    <li><a href="/">Solutions</a></li>
                    <li><a href="/about">Developers</a></li>
                    <li><a href="/contact">Pricing</a></li>
                    <li><a href="/contact">Resources</a></li>
                    <li><button className="border border-brandGray font-bold text-white p-3 rounded-xl">Sign In</button></li>
                    <li><button className="bg-buttonBlue text-white p-3 rounded-xl">Get Started</button></li> 
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar