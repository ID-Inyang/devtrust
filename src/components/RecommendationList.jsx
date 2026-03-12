import React from 'react'

const RecommendationList = () => {
  const developers = {
    "Jane Doe": {
      role: "Full Stack Developer",
      integrityScore: 95 // Example score
    },
    "John Smith": {
      role: "Frontend Developer",
      integrityScore: 92 // Example score
    },
    "Alice Johnson": {
      role: "Backend Developer",
      integrityScore: 90 // Example score
    }
  }
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
          {Object.entries(developers).map(([name, details]) => (
            <div key={name} className="developer-card bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">{name}</h3>
              <p className="text-gray-400">{details.role}</p>
              <p className="text-green-500 mt-2">Integrity Score: {details.integrityScore}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
        </div>
      </div>
    </>
  )
}

export default RecommendationList