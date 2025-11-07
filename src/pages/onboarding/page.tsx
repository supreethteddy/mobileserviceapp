
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/base/Button';

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: 'Fix Your Device',
      subtitle: 'Professional repair services at your doorstep',
      description: 'Connect with certified technicians and get your devices fixed quickly and reliably.',
      image: 'https://readdy.ai/api/search-image?query=3D%20illustration%20of%20smartphone%20repair%20service%2C%20professional%20technician%20fixing%20mobile%20phone%2C%20modern%20repair%20tools%2C%20clean%20workspace%2C%20vibrant%20teal%20and%20indigo%20colors%2C%20friendly%20and%20professional%20atmosphere%2C%20high-quality%203D%20rendering%2C%20isometric%20perspective%2C%20detailed%20and%20realistic&width=300&height=400&seq=onboard1&orientation=portrait'
    },
    {
      title: 'Sell Your Phone',
      subtitle: 'Get instant AI-powered price estimates',
      description: 'Upload a photo and get an accurate valuation using our advanced AI technology.',
      image: 'https://readdy.ai/api/search-image?query=3D%20illustration%20of%20AI%20phone%20valuation%2C%20smartphone%20with%20price%20tag%20and%20AI%20brain%20icon%2C%20money%20symbols%2C%20futuristic%20technology%20concept%2C%20vibrant%20teal%20and%20indigo%20gradient%20colors%2C%20clean%20modern%20design%2C%20high-quality%203D%20rendering%2C%20professional%20look&width=300&height=400&seq=onboard2&orientation=portrait'
    },
    {
      title: 'Buy & Marketplace',
      subtitle: 'Discover quality pre-owned devices',
      description: 'Browse our curated marketplace of verified phones and electronics with warranty.',
      image: 'https://readdy.ai/api/search-image?query=3D%20illustration%20of%20online%20marketplace%2C%20multiple%20smartphones%20and%20devices%2C%20shopping%20cart%2C%20e-commerce%20concept%2C%20vibrant%20colors%2C%20modern%20design%2C%20clean%20background%2C%20professional%203D%20rendering%2C%20isometric%20view%2C%20high%20quality%20details&width=300&height=400&seq=onboard3&orientation=portrait'
    }
  ];

  const nextSlide = () => {
    const isLastSlide = currentSlide >= slides.length - 1;
    if (isLastSlide) {
      navigate('/auth');
      return;
    }
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const skipToEnd = () => {
    setCurrentSlide(slides.length - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Skip Button */}
      <div className="flex justify-end p-4">
        <button 
          onClick={skipToEnd}
          className="text-slate-500 font-medium px-4 py-2 rounded-xl hover:bg-slate-200 transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm">
          {/* Image */}
          <div className="w-80 h-96 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text Content */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl font-medium text-teal-600 mb-4">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-teal-500 to-indigo-500 w-8' 
                    : 'bg-slate-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {currentSlide > 0 && (
              <Button 
                variant="outline" 
                onClick={prevSlide}
                className="flex-1"
              >
                Back
              </Button>
            )}
            
            <Button 
              onClick={nextSlide}
              fullWidth={currentSlide === 0}
              className={currentSlide > 0 ? 'flex-1' : ''}
            >
              {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
