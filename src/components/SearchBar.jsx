import React from 'react'
import { Search, ArrowRight } from "lucide-react";

const SearchBar = () => {
  return (
    <div>
        <div className="search-bar flex items-center justify-center mt-8 bg-[#0f172a] px-3 py-2 border border-[#62727e] rounded-lg">
          <Search className="w-6 text-gray-600" />
            <input 
                type="text" 
                placeholder="Search for a developers by Github handle..." 
                className="search-input w-[500px] pl-2 text-brandGray bg-[#0f172a] border-none focus:outline-none"
            />
            <button className="search-button text-center w-[110px] bg-buttonBlue text-white px-4 py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex space-x-2 items-center justify-center">
                Verify
                <ArrowRight className="pl-2 w-6 h-6 text-white" />
            </button>
        </div>
    </div>
  )
}

export default SearchBar