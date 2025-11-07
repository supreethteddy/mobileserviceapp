import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { useNavigate } from 'react-router-dom';

export default function ServicesPage() {
  const navigate = useNavigate();

  const categories = [
    { id: 'screen', title: 'Screen Repair', icon: 'ri-smartphone-line', gradient: 'from-pink-500 to-rose-500' },
    { id: 'battery', title: 'Battery', icon: 'ri-battery-2-charge-line', gradient: 'from-amber-500 to-orange-500' },
    { id: 'water', title: 'Water Damage', icon: 'ri-water-flash-line', gradient: 'from-cyan-500 to-sky-500' },
    { id: 'diagnostic', title: 'Diagnostics', icon: 'ri-stethoscope-line', gradient: 'from-violet-500 to-indigo-500' },
  ];

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
          <h1 className="text-2xl font-bold text-slate-800">Services</h1>
        </div>
        <p className="text-slate-600">Choose a service to get started</p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {categories.map((cat) => (
            <Card key={cat.id} padding="lg" shadow="lg" className="hover:shadow-xl transition-all cursor-pointer active:scale-95" onClick={() => navigate('/repair/book')}>
              <div className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${cat.gradient} text-white flex items-center justify-center mb-3`}>
                  <i className={`${cat.icon} text-xl`}></i>
                </div>
                <div className="font-semibold text-slate-800">{cat.title}</div>
              </div>
            </Card>
          ))}
        </div>

        <Card padding="lg" shadow="lg" className="mt-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-slate-800">Not sure what’s wrong?</div>
              <div className="text-slate-600 text-sm">Book a diagnostic and a pro will help.</div>
            </div>
            <Button onClick={() => navigate('/repair/book')}>Book Repair</Button>
          </div>
        </Card>
      </div>
      <div className="h-24" />
    </div>
  );
}


