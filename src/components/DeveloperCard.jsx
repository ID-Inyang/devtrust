import React from 'react'
import assets from '../assets/assets';

const DeveloperCard = () => {
const developers = [
  {
    id: 1,
    name: "AishaK_Dev",
    image: assets.AishaK,
    specialty: "Machine Learning",
    status: "Verified"
  },
  {
    id: 2,
    name: "ChenDev",
    image: assets.Chen,
    specialty: "System Architecture",
    status: "Top Contributor"
  },
  {
    id: 3,
    name: "ID. Inyang",
    image: assets.ID,
    specialty: "Full Stack Developer",
    status: "Verified"
  },
    {
    id: 4,
    name: "Javier",
    image: assets.Javier,
    specialty: "AI Researcher",
    status: "Verified"
  }
];
  return (
    <>
      <div className='w-full max-w-7xl mx-auto px-4 '>
        <div className="flex items-center justify-between mb-6 mt-10 left border-b border-gray-700 pb-4 gap-10">
          <div className=" flex flex-col items-start gap-2">
              <h2 className='text-2xl font-bold text-white mb-'>Featured Trusted Developers</h2>
              Hand-picked developers with the highest ecosystem integrity scores.
          </div>
          <div className="right">
              <a className="text-blue-500">View All &gt;</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {developers.map((dev) => (
          <div key={dev.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all">
            <img 
              src={dev.image} 
              alt={dev.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-xl">{dev.name}</h3>
                <span className="text-xs bg-blue-600 px-2 py-1 rounded-full text-white">
                  {dev.status}
                </span>
              </div>
              <p className="text-slate-400 text-sm">{dev.specialty}</p>
              
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-medium transition">
                View GitHub Data
              </button>
            </div>
          </div>
        ))}
      </div>
        <div className="mt-10">
        </div>
      </div>
    </>
  )
}

export default DeveloperCard;