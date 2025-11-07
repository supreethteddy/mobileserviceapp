import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function ProfilePage() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);

  const user = {
    name: 'Sarah Johnson',
    phone: '+91 98765 43210',
    email: 'sarah@example.com',
    avatar:
      'https://i.pravatar.cc/200?img=12',
  };

  useEffect(() => {
    const saved = localStorage.getItem('profileAvatar');
    if (saved) {
      setAvatar(saved);
    }
  }, []);

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result || '');
      setAvatar(dataUrl);
      try {
        localStorage.setItem('profileAvatar', dataUrl);
      } catch {
        // ignore storage errors (e.g., quota)
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-6 px-4">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200"
            aria-label="Go back"
          >
            <i className="ri-arrow-left-line text-lg"></i>
          </button>
          <h1 className="text-2xl font-bold text-slate-800">Profile</h1>
        </div>
        <p className="text-slate-600">Manage your account and preferences</p>

        <Card padding="lg" shadow="lg" className="mt-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100">
              <img src={avatar || user.avatar} alt={user.name} className="w-full h-full object-cover" />
              <button
                onClick={openFileDialog}
                className="absolute right-1 bottom-1 w-7 h-7 rounded-lg bg-white/90 border border-slate-200 flex items-center justify-center text-slate-700 shadow-sm"
                title="Change picture"
                aria-label="Change picture"
              >
                <i className="ri-camera-line text-sm"></i>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleAvatarChange(e.target.files?.[0] || undefined)}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-800 truncate">{user.name}</div>
              <div className="text-slate-600 text-sm">{user.phone}</div>
              <div className="text-slate-500 text-sm truncate">{user.email}</div>
            </div>
            <Button variant="outline" onClick={openFileDialog}>Edit</Button>
          </div>
        </Card>

        <div className="mt-6 space-y-3">
          <Card padding="lg" shadow="md" className="cursor-pointer active:scale-95" onClick={() => navigate('/orders/track')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <i className="ri-file-list-3-line text-lg"></i>
                </div>
                <div>
                  <div className="font-medium text-slate-800">My Orders</div>
                  <div className="text-sm text-slate-500">Track current orders</div>
                </div>
              </div>
              <i className="ri-arrow-right-s-line text-slate-400"></i>
            </div>
          </Card>

          <Card padding="lg" shadow="md" className="cursor-pointer active:scale-95">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <i className="ri-map-pin-user-line text-lg"></i>
                </div>
                <div>
                  <div className="font-medium text-slate-800">Addresses</div>
                  <div className="text-sm text-slate-500">Manage saved locations</div>
                </div>
              </div>
              <i className="ri-arrow-right-s-line text-slate-400"></i>
            </div>
          </Card>

          <Card padding="lg" shadow="md" className="cursor-pointer active:scale-95">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
                  <i className="ri-shield-check-line text-lg"></i>
                </div>
                <div>
                  <div className="font-medium text-slate-800">Privacy & Security</div>
                  <div className="text-sm text-slate-500">Control your data</div>
                </div>
              </div>
              <i className="ri-arrow-right-s-line text-slate-400"></i>
            </div>
          </Card>
        </div>

        <div className="mt-6">
          <Button variant="ghost" fullWidth onClick={() => navigate('/auth')}>
            Sign out
          </Button>
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
}


