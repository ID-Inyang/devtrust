import React from 'react'

const RecommendationList = () => {
  return (
    <>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <div className="flex items-center justify-between mb-6 mt-10 gap-10">
          <div className="left flex flex-col items-start gap-2">
              <h2 className='text-2xl font-bold text-white mb-'>Featured Trusted Developers</h2>
              Hand-picked developers with the highest ecosystem integrity scores.
            </div>
            <div className="right">
              <a className="text-blue-500">View All &gt;</a>
            </div>
          </div>
      </div>
    </>
  )
}

export default RecommendationList