
import Card from '../../../components/base/Card';
import { useNavigate } from 'react-router-dom';

export default function QuickActions() {
  const navigate = useNavigate();
  const actions = [
    {
      id: 'book-repair',
      title: 'Book Repair',
      subtitle: 'Fix your device',
      icon: 'ri-tools-fill',
      gradient: 'from-teal-500 to-cyan-500',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20smartphone%20repair%20service%2C%20modern%20tech%20repair%20tools%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=120&height=120&seq=repair1&orientation=squarish'
    },
    {
      id: 'sell-phone',
      title: 'Sell Phone',
      subtitle: 'Get instant offer',
      icon: 'ri-smartphone-fill',
      gradient: 'from-indigo-500 to-purple-500',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20smartphone%20with%20money%20symbols%2C%20cash%20exchange%20concept%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=120&height=120&seq=sell1&orientation=squarish'
    },
    {
      id: 'buy-phone',
      title: 'Buy Phone',
      subtitle: 'Browse marketplace',
      icon: 'ri-shopping-cart-fill',
      gradient: 'from-orange-500 to-red-500',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20shopping%20cart%20with%20smartphone%2C%20e-commerce%20concept%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=120&height=120&seq=buy1&orientation=squarish'
    },
    {
      id: 'track-order',
      title: 'Track Order',
      subtitle: 'Check status',
      icon: 'ri-map-pin-fill',
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20delivery%20tracking%2C%20location%20pin%20with%20package%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=120&height=120&seq=track1&orientation=squarish'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action) => (
        <Card key={action.id} padding="md" shadow="lg" className="hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95" onClick={() => {
          if (action.id === 'book-repair') navigate('/repair/book');
          if (action.id === 'track-order') navigate('/orders/track');
          if (action.id === 'buy-phone') navigate('/market');
          if (action.id === 'sell-phone') navigate('/auth');
        }}>
          <div className="flex flex-col items-center text-center">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${action.gradient} flex items-center justify-center mb-3 overflow-hidden`}>
              <img 
                src={action.image} 
                alt={action.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">{action.title}</h3>
            <p className="text-sm text-slate-500">{action.subtitle}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
