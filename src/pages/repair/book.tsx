import { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { useNavigate } from 'react-router-dom';

interface RepairFormData {
  deviceBrand: string;
  deviceModel: string;
  issueType: string;
  preferredTime: string;
  serviceType: 'pickup' | 'walkin';
  address: string;
  notes: string;
}

export default function BookRepairPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RepairFormData>({
    deviceBrand: '',
    deviceModel: '',
    issueType: '',
    preferredTime: '',
    serviceType: 'pickup',
    address: '',
    notes: '',
  });

  const isSubmitDisabled =
    !formData.deviceBrand || !formData.deviceModel || !formData.issueType;

  const handleChange = (field: keyof RepairFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (isSubmitDisabled) return;
    // In a real app, submit to backend here
    console.log('Repair booking submitted', formData);
    navigate('/home');
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
          <h1 className="text-2xl font-bold text-slate-800">Book a Repair</h1>
        </div>
        <p className="text-slate-600">Tell us about your device and issue.</p>
      </div>

      <Card padding="lg" shadow="lg" className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Device Brand
          </label>
          <input
            value={formData.deviceBrand}
            onChange={(e) => handleChange('deviceBrand', e.target.value)}
            placeholder="e.g., Apple, Samsung, OnePlus"
            className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Device Model
          </label>
          <input
            value={formData.deviceModel}
            onChange={(e) => handleChange('deviceModel', e.target.value)}
            placeholder="e.g., iPhone 13, Galaxy S23"
            className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Issue
          </label>
          <select
            value={formData.issueType}
            onChange={(e) => handleChange('issueType', e.target.value)}
            className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white"
          >
            <option value="">Select issue</option>
            <option value="screen">Screen damage</option>
            <option value="battery">Battery replacement</option>
            <option value="water">Water damage</option>
            <option value="diagnostic">Diagnostics</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Preferred Time
            </label>
            <input
              type="datetime-local"
              value={formData.preferredTime}
              onChange={(e) => handleChange('preferredTime', e.target.value)}
              className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Service Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleChange('serviceType', 'pickup')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  formData.serviceType === 'pickup'
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                Pickup
              </button>
              <button
                onClick={() => handleChange('serviceType', 'walkin')}
                className={`px-4 py-3 rounded-xl font-medium transition-all ${
                  formData.serviceType === 'walkin'
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                Walk-in
              </button>
            </div>
          </div>
        </div>

        {formData.serviceType === 'pickup' && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Pickup Address
            </label>
            <textarea
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              rows={3}
              placeholder="Address with landmarks"
              className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Additional Notes
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            rows={3}
            placeholder="Anything else we should know?"
            className="w-full px-4 py-3 bg-slate-100 border-none rounded-xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="outline" className="flex-1" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button className="flex-1" onClick={handleSubmit} disabled={isSubmitDisabled}>
            Confirm Booking
          </Button>
        </div>
      </Card>
    </div>
  );
}


