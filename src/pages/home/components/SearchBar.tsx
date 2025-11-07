
import { useState } from 'react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for repair services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-slate-100 border-none rounded-2xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white transition-all duration-200"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
          <i className="ri-search-line text-slate-500 text-lg"></i>
        </div>
      </div>
      
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg">
        <i className="ri-mic-line text-lg"></i>
      </button>
    </div>
  );
}
