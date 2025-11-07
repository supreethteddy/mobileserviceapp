
import Card from '../../../components/base/Card';

export default function NearbyServices() {
  const services = [
    {
      id: 1,
      name: 'TechFix Pro',
      rating: 4.8,
      reviews: 234,
      distance: '0.5 km',
      specialties: ['iPhone', 'Samsung', 'OnePlus'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20electronics%20repair%20shop%20storefront%2C%20clean%20professional%20interior%20with%20repair%20workstations%2C%20bright%20lighting%2C%20organized%20tools%20and%20equipment%2C%20contemporary%20design%2C%20welcoming%20atmosphere%2C%20high-quality%20photography%2C%20realistic%20style%2C%20professional%20service%20center%20aesthetic&width=300&height=200&seq=shop1&orientation=landscape',
      price: '₹299',
      time: '30 min'
    },
    {
      id: 2,
      name: 'Mobile Care Center',
      rating: 4.6,
      reviews: 189,
      distance: '1.2 km',
      specialties: ['Xiaomi', 'Vivo', 'Oppo'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20mobile%20phone%20repair%20workshop%2C%20technician%20working%20on%20smartphone%2C%20modern%20repair%20equipment%2C%20clean%20organized%20workspace%2C%20professional%20lighting%2C%20high-tech%20environment%2C%20realistic%20photography%20style%2C%20service%20quality%20focus&width=300&height=200&seq=shop2&orientation=landscape',
      price: '₹249',
      time: '45 min'
    },
    {
      id: 3,
      name: 'QuickFix Solutions',
      rating: 4.9,
      reviews: 312,
      distance: '2.1 km',
      specialties: ['All Brands', 'Tablets', 'Laptops'],
      image: 'https://readdy.ai/api/search-image?query=Advanced%20electronics%20repair%20facility%2C%20multiple%20repair%20stations%2C%20professional%20technicians%2C%20modern%20equipment%2C%20clean%20white%20interior%2C%20organized%20tool%20displays%2C%20premium%20service%20center%2C%20realistic%20photography%2C%20professional%20atmosphere&width=300&height=200&seq=shop3&orientation=landscape',
      price: '₹199',
      time: '25 min'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">Nearby Services</h2>
        <button className="text-teal-500 font-medium text-sm">View All</button>
      </div>
      
      <div className="space-y-3">
        {services.map((service) => (
          <Card key={service.id} padding="md" shadow="md" className="hover:shadow-lg transition-all duration-200 cursor-pointer">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-slate-800 truncate">{service.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <i className="ri-star-fill text-yellow-400 text-sm"></i>
                        <span className="text-sm font-medium text-slate-700">{service.rating}</span>
                        <span className="text-sm text-slate-500">({service.reviews})</span>
                      </div>
                      <span className="text-sm text-slate-500">• {service.distance}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-600">{service.price}</div>
                    <div className="text-xs text-slate-500">{service.time}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {service.specialties.slice(0, 2).map((specialty, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">
                      {specialty}
                    </span>
                  ))}
                  {service.specialties.length > 2 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">
                      +{service.specialties.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
