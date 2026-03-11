import React from 'react'

const RecommendationList = () => {
  return (
    <>
      <div className='w-full max-w-7xl mx-auto px-4 '>
        <div className="flex items-center justify-between mb-6 mt-10 gap-10">
          <div className="left border-b border-gray-700 pb-4 flex flex-col items-start gap-2">
              <h2 className='text-2xl font-bold text-white mb-'>Featured Trusted Developers</h2>
              Hand-picked developers with the highest ecosystem integrity scores.
          </div>
          <div className="right">
              <a className="text-blue-500">View All &gt;</a>
          </div>
        </div>
        <div className="featured-developers grid grid-cols-3 gap-4">
          <div className="developer-card bg-[#1e293b] p-4 rounded-lg shadow-md ">
              <h3 className='text-lg font-semibold text-white mb-2'>Jane Doe</h3>
              <p className='text-gray-400 text-sm mb-4'>Full Stack Developer</p>
              <p className='text-gray-300 text-sm'>Ecosystem Integrity Score: 95</p>
          </div>
          <div className="developer-card bg-[#1e293b] p-4 rounded-lg shadow-md">
              <h3 className='text-lg font-semibold text-white mb-2'>John Smith</h3>
              <p className='text-gray-400 text-sm mb-4'>Frontend Developer</p>
              <p className='text-gray-300 text-sm'>Ecosystem Integrity Score: 92</p>
          </div>
          <div className="developer-card bg-[#1e293b] p-4 rounded-lg shadow-md">
              <h3 className='text-lg font-semibold text-white mb-2'>Alice Johnson</h3>
              <p className='text-gray-400 text-sm mb-4'>Backend Developer</p>
              <p className='text-gray-300 text-sm'>Ecosystem Integrity Score: 90</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecommendationList