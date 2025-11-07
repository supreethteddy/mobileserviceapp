import { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { useNavigate } from 'react-router-dom';

interface TrackingEvent {
  id: string;
  title: string;
  description: string;
  time: string;
  completed: boolean;
}

export default function TrackOrderPage() {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState('');
  const [phone, setPhone] = useState('');
  const [events, setEvents] = useState<TrackingEvent[] | null>(null);

  const mockFetch = () => {
    // Simulated tracking data
    const data: TrackingEvent[] = [
      { id: 'placed', title: 'Order Placed', description: 'We received your request', time: '10:00 AM', completed: true },
      { id: 'assigned', title: 'Technician Assigned', description: 'Expert has accepted the job', time: '10:15 AM', completed: true },
      { id: 'enroute', title: 'En route', description: 'Technician is on the way', time: '10:35 AM', completed: true },
      { id: 'repair', title: 'Repair in Progress', description: 'Working on your device', time: '11:00 AM', completed: false },
      { id: 'done', title: 'Completed', description: 'Your device is ready', time: '-', completed: false },
    ];
    setEvents(data);
  };

  const onTrack = () => {
    if (!orderId && phone.length !== 10) return;
    mockFetch();
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-24">
      <div className="pt-6 pb-4">
        <div className="flex items-center gap-3 mb-1">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200"
            aria-label="Go back"
          >
            <i className="ri-arrow-left-line text-lg"></i>
          </button>
          <h1 className="text-2xl font-bold text-slate-800">Track Order</h1>
        </div>
        <p className="text-slate-600">Enter your Order ID or phone number</p>
      </div>

      <Card padding="lg" shadow="lg" className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Order ID</label>
          <input
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="e.g., FIX-2025-12345"
            className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">+91</div>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit number"
              className="w-full pl-14 pr-4 py-3 bg-slate-100 border-none rounded-xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white"
              maxLength={10}
              inputMode="numeric"
            />
          </div>
        </div>
        <Button fullWidth onClick={onTrack} disabled={!orderId && phone.length !== 10}>
          Track
        </Button>
      </Card>

      {events && (
        <Card padding="lg" shadow="lg" className="mt-6">
          <div className="font-semibold text-slate-800 mb-4">Status Timeline</div>
          <div className="relative pl-6">
            <div className="absolute top-1 left-3 bottom-1 w-px bg-slate-200" />
            <div className="space-y-5">
              {events.map((ev, idx) => (
                <div key={ev.id} className="relative">
                  <div
                    className={`absolute left-[-3px] top-1 w-3 h-3 rounded-full ${
                      ev.completed ? 'bg-teal-500' : 'bg-slate-300'
                    }`}
                  />
                  <div className="ml-2">
                    <div className="flex items-center justify-between">
                      <div className={`font-medium ${ev.completed ? 'text-slate-800' : 'text-slate-600'}`}>{ev.title}</div>
                      <div className="text-xs text-slate-500">{ev.time}</div>
                    </div>
                    <div className="text-sm text-slate-500">{ev.description}</div>
                    {idx < events.length - 1 && <div className="h-0.5 bg-slate-100 my-3" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}


