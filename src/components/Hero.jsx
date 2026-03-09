import React from 'react'
import SearchBar from './SearchBar'
import { CheckCircle } from "lucide-react";
import RecommendationList from './RecommendationList';

const Hero = () => {
    const stats = [
        { text: "1.2M+ Profiles Analyzed",  },
        { text: "Real-time Analysis",  },
        { text: "100% Verified Repositories",  },
    ];
  return (
    <>
        <div className="hero flex flex-col items-center justify-center h-screen text-center ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full z-0"></div>
            <div className="hero-content flex flex-col items-center">
                <div className="text-[#164dd9] bg-[#0e1c37] p-4 border-none rounded-xl inline-block px-4 py-1 mb-4">
                    <p className='font-bold text-sm'>NOW IN BETA: AUTOMATED VERIFICATION</p>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Build and Verify <br /> Developer Credibility</h1>
                    <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        The ultimate platform for data-driven developer verification, deep repo analysis, and verified trust scores.
                    </p>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="stats mt-8 space-x-4">
                <div className="gap-5 flex  items-start">
                    {stats.map((item, index) => (
                    <div key={index} className="stat flex items-center gap-1">
                    <CheckCircle className="w-5 h-4 text-green-500" />
                    <p className='text-sm text-brandGray'>{item.text}</p>
                    </div>
                    ))}
                </div>
            </div>
            <RecommendationList />
        </div>
    </>
  )
}

export default Hero