
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const tabs = [
    { id: 'home', label: 'Home', icon: 'ri-home-5-line', path: '/home' },
    { id: 'services', label: 'Services', icon: 'ri-tools-line', path: '/services' },
    { id: 'marketplace', label: 'Market', icon: 'ri-shopping-bag-3-line', path: '/market' },
    { id: 'orders', label: 'Orders', icon: 'ri-file-list-3-line', path: '/orders' },
    { id: 'profile', label: 'Profile', icon: 'ri-user-3-line', path: '/profile' }
  ];

  const pathname = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200/50 px-4 py-2 z-50">
      <div className="grid grid-cols-5 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              onTabChange && onTabChange(tab.id);
              navigate(tab.path);
            }}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-200 ${
              (activeTab ? activeTab === tab.id : pathname.startsWith(tab.path))
                ? 'bg-gradient-to-r from-teal-500 to-indigo-500 text-white'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`${tab.icon} text-lg`}></i>
            </div>
            <span className="text-xs mt-1 font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
