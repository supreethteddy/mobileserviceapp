
import { useState } from 'react';
import Header from './components/Header';
import Navigation from '../../components/feature/Navigation';
import SearchBar from './components/SearchBar';
import QuickActions from './components/QuickActions';
import NearbyServices from './components/NearbyServices';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="pt-20 pb-24 px-4">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            Hi, Sarah! 👋
          </h1>
          <p className="text-slate-600">What can we help you fix today?</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h2>
          <QuickActions />
        </div>

        {/* Nearby Services */}
        <NearbyServices />
      </div>

      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
