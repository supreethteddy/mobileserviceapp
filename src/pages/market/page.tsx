import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function MarketPage() {
  const navigate = useNavigate();
  const [selectedImageIndexByItem, setSelectedImageIndexByItem] = useState<Record<number, number>>({});

  const items = [
    {
      id: 1,
      title: 'iPhone 13 (128 GB)',
      price: '₹39,999',
      condition: 'Excellent',
      image:
        'https://readdy.ai/api/search-image?query=Product%20photo%20of%20iPhone%2013%20on%20clean%20white%20background%2C%20soft%20shadows%2C%20studio%20lighting%2C%20modern%20ecommerce%20style&width=400&height=300&seq=mkt1&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=iPhone%2013%20front%20view%20studio%20photo%20white%20background&width=200&height=200&seq=mkt1a&orientation=squarish',
        'https://readdy.ai/api/search-image?query=iPhone%2013%20back%20view%20studio%20photo%20white%20background&width=200&height=200&seq=mkt1b&orientation=squarish',
        'https://readdy.ai/api/search-image?query=iPhone%2013%20angled%20view%20studio%20photo%20white%20background&width=200&height=200&seq=mkt1c&orientation=squarish'
      ],
      specs: ['128 GB', 'Blue', 'Battery 92%'],
    },
    {
      id: 2,
      title: 'Samsung Galaxy S22',
      price: '₹28,499',
      condition: 'Good',
      image:
        'https://readdy.ai/api/search-image?query=Product%20photo%20Samsung%20Galaxy%20S22%20on%20white%20background%2C%20clean%20ecommerce%20style&width=400&height=300&seq=mkt2&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S22%20front%20studio%20photo%20white%20background&width=200&height=200&seq=mkt2a&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S22%20back%20studio%20photo%20white%20background&width=200&height=200&seq=mkt2b&orientation=squarish',
        'https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S22%20angled%20studio%20photo%20white%20background&width=200&height=200&seq=mkt2c&orientation=squarish'
      ],
      specs: ['256 GB', 'Phantom Black'],
    },
    {
      id: 3,
      title: 'OnePlus 10 Pro',
      price: '₹24,999',
      condition: 'Very Good',
      image:
        'https://readdy.ai/api/search-image?query=Product%20photo%20OnePlus%2010%20Pro%20on%20white%20background%2C%20clean%20ecommerce%20style&width=400&height=300&seq=mkt3&orientation=landscape',
      images: [
        'https://readdy.ai/api/search-image?query=OnePlus%2010%20Pro%20front%20studio%20photo%20white%20background&width=200&height=200&seq=mkt3a&orientation=squarish',
        'https://readdy.ai/api/search-image?query=OnePlus%2010%20Pro%20back%20studio%20photo%20white%20background&width=200&height=200&seq=mkt3b&orientation=squarish',
        'https://readdy.ai/api/search-image?query=OnePlus%2010%20Pro%20angled%20studio%20photo%20white%20background&width=200&height=200&seq=mkt3c&orientation=squarish'
      ],
      specs: ['8 GB / 128 GB', 'Green'],
    },
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
          <h1 className="text-2xl font-bold text-slate-800">Marketplace</h1>
        </div>
        <p className="text-slate-600">Buy and sell verified devices</p>

        <div className="mt-4">
          <div className="relative">
            <input
              placeholder="Search phones, brands, models..."
              className="w-full pl-12 pr-4 py-4 bg-slate-100 border-none rounded-2xl text-slate-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:bg-white transition-all duration-200"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
              <i className="ri-search-line text-slate-500 text-lg"></i>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-6">
          {items.map((item) => {
            const selectedIndex = selectedImageIndexByItem[item.id] ?? 0;
            const mainImage = item.images?.[selectedIndex] ?? item.image;
            return (
            <Card key={item.id} padding="md" shadow="lg" className="hover:shadow-xl transition-all cursor-pointer active:scale-95">
              <div className="flex gap-4">
                <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                  <img src={mainImage} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-800 truncate">{item.title}</div>
                      <div className="text-sm text-slate-500 mt-1">{item.condition}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-teal-600">{item.price}</div>
                    </div>
                  </div>
                  {item.images && item.images.length > 1 && (
                    <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
                      {item.images.map((thumb, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndexByItem((prev) => ({ ...prev, [item.id]: idx }));
                          }}
                          className={`w-10 h-10 rounded-lg overflow-hidden border ${selectedIndex === idx ? 'border-teal-500' : 'border-transparent'} bg-slate-100 flex-shrink-0`}
                          aria-label={`Select image ${idx + 1}`}
                        >
                          <img src={thumb} alt={`${item.title} ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.specs.map((s, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" className="flex-1">
                      Contact Seller
                    </Button>
                    <Button className="flex-1">Buy Now</Button>
                  </div>
                </div>
              </div>
            </Card>
          )})}
        </div>

        <Card padding="lg" shadow="lg" className="mt-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-slate-800">Want to sell your phone?</div>
              <div className="text-slate-600 text-sm">Get an instant AI price estimate.</div>
            </div>
            <Button onClick={() => navigate('/auth')}>Start selling</Button>
          </div>
        </Card>
      </div>
      <div className="h-24" />
    </div>
  );
}


