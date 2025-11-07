
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';
import Card from '../../components/base/Card';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phoneNumber.length === 10) {
      setShowOtp(true);
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      // Handle OTP verification
      console.log('OTP verified');
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2" style={{ fontFamily: '"Pacifico", serif' }}>
            FixItX
          </h1>
          <p className="text-slate-600">
            {isLogin ? 'Welcome back!' : 'Join the community'}
          </p>
        </div>

        <Card padding="lg" shadow="lg" glassmorphism>
          <div className="space-y-6">
            {/* Toggle Login/Signup */}
            <div className="flex bg-slate-100 rounded-xl p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                  isLogin 
                    ? 'bg-white text-slate-800 shadow-sm' 
                    : 'text-slate-600'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                  !isLogin 
                    ? 'bg-white text-slate-800 shadow-sm' 
                    : 'text-slate-600'
                }`}
              >
                Sign Up
              </button>
            </div>

            {!showOtp ? (
              <>
                {/* Phone Number Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <span className="text-slate-600">🇮🇳</span>
                      <span className="text-slate-600">+91</span>
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full pl-20 pr-4 py-4 bg-slate-50 border-none rounded-xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white transition-all duration-200"
                      maxLength={10}
                    />
                  </div>
                </div>

                {/* Send OTP Button */}
                <Button 
                  onClick={handleSendOtp}
                  fullWidth
                  disabled={phoneNumber.length !== 10}
                >
                  Send OTP
                </Button>
              </>
            ) : (
              <>
                {/* OTP Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Enter OTP
                  </label>
                  <p className="text-sm text-slate-500 mb-4">
                    We've sent a 6-digit code to +91 {phoneNumber}
                  </p>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP"
                    className="w-full px-4 py-4 bg-slate-50 border-none rounded-xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white transition-all duration-200 text-center text-lg tracking-widest"
                    maxLength={6}
                  />
                </div>

                {/* Verify OTP Button */}
                <Button 
                  onClick={handleVerifyOtp}
                  fullWidth
                  disabled={otp.length !== 6}
                >
                  Verify & Continue
                </Button>

                {/* Resend OTP */}
                <div className="text-center">
                  <button className="text-teal-600 font-medium text-sm">
                    Didn't receive code? Resend
                  </button>
                </div>
              </>
            )}

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">or continue with</span>
              </div>
            </div>

            {/* Google Login */}
            <Button variant="outline" fullWidth>
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-google-fill text-lg"></i>
              </div>
              Continue with Google
            </Button>

            {/* Continue as Guest */}
            <Button variant="ghost" fullWidth onClick={() => navigate('/home')}>
              Continue as guest
            </Button>

            {/* Terms */}
            <p className="text-xs text-slate-500 text-center leading-relaxed">
              By continuing, you agree to our{' '}
              <a href="#" className="text-teal-600 underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-teal-600 underline">Privacy Policy</a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
