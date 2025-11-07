
interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showNotifications?: boolean;
  onBack?: () => void;
}

export default function Header({ 
  title = 'FixItX', 
  showBack = false, 
  showNotifications = true,
  onBack 
}: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200/50 px-4 py-3 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <button 
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <i className="ri-arrow-left-line text-lg"></i>
            </button>
          )}
          <h1 className="text-xl font-bold text-slate-800" style={{ fontFamily: '"Pacifico", serif' }}>
            {title}
          </h1>
        </div>
        
        {showNotifications && (
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors relative">
              <i className="ri-notification-3-line text-lg"></i>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">3</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
