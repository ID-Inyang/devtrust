import React from 'react'
import { FaGithub, FaCode, FaUsers } from "react-icons/fa";

const TrustSection = () => {
const size = 26;
const trustItems = [
  {
    icon: <FaGithub size={size} />,
    title: "GitHub Analysis",
    description: "We analyze commit history, PR quality, and contribution frequency to verify real-world activity."
  },
  {
    icon: <FaCode size={size} />,
    title: "Code Complexity",
    description: "Deep metrics on cyclomatic complexity, maintainability indexes, and test coverage across public repos."
  },
  {
    icon: <FaUsers size={size} />,
    title: "Social Proof",
    description: "Validated peer reviews and endorsements from other verified developers in the ecosystem."
  }
];

  return (
    <>  
        <div className="bg-[#101727] border-b border-gray-700">
            <div className='w-full max-w-7xl mx-auto px-4 py-12'>
                <div className="">
                    <h2 className="text-3xl font-bold  text-white mb-8">Why Trust Matters</h2>
                    <p className="text-brandGray">Our multi-layered verification process ensures accuracy and transparency in developer skills and project history.</p>
                </div>
                <div className="trust-section grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    {trustItems.map((item, index) => (
                        <div key={index} className="card flex flex-col mt-10 gap-4 bg-[#0f172a] rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all">
                        <div className="icon text-[#1148c1] w-[3.5rem] rounded-lg bg-[#0e1c3e] p-4">{item.icon}</div>
                        <h3 className='font-bold text-lg' >{item.title}</h3>
                        <p className='text-brandGray'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default TrustSection