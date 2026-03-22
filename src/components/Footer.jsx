import React from 'react'
import { FaGlobe, FaCode } from "react-icons/fa";

const Footer = () => {
  const footerItems = [
    {
    title: 'Platform',
    links: ['Search', 'API Access', 'Verification']
    },
    {
    title: 'Company',
    links: ['About Us', 'Blog', 'Privacy']
    },
    {
    title: 'Support',
    links: ['Docs', 'Contact', 'Status']
    },
]

  return (
    <>
      <footer className="flex flex-col p-4 w-full max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-between items-center  border-b border-gray-700 mb-10 pb-10">
          <div className="flex flex-col items-start gap-2">
            <h2 className='font-dropshade font-bold'>IN DEVS WE TRUST</h2>
            <p className="text-brandGray">Building the standard for developer credibility in a modern engineering world</p>
          </div>
          <div className="flex">
            {footerItems.map((item, index) => (
              <div key={index} className="flex flex-col items-start gap-2 mx-4">
                <h3 className="font-bold">{item.title}</h3>
                {item.links.map((link, linkIndex) => (
                  <a key={linkIndex} href="#" className="text-sm text-gray-400 hover:text-blue-700 transition-colors duration-200">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-brandGray items-center">
          <p>© 2026 DevTrust Inc. All rights reserved.</p>
          <div className="flex space-x-4">

            {/* Globe icon */}
            <a href="/" aria-label="Global">
              <FaGlobe className="w-5 h-5 hover:text-blue-800" />
            </a>

            {/* Code icon */}
            <a href="/" aria-label="Code">
              <FaCode className="w-5 h-5 hover:text-blue-800" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer