import { useState, useEffect } from 'react';
import Footer from './Footer';

interface StorePageProps {
  onBack: () => void;
}

const PRICE_PER_UNIT = 79.99;

const features = [
  {
    emoji: '🌿',
    title: 'Active Carbon Odor Filter',
    description: 'Eliminates fridge odors at the source with premium activated carbon technology.',
  },
  {
    emoji: '🔬',
    title: 'Ethylene Gas Sensor',
    description: 'Detects spoilage-causing ethylene gas and alerts you before food goes bad.',
  },
  {
    emoji: '📷',
    title: 'Barcode Expiry Scanner',
    description: 'Scans product barcodes to automatically track expiration dates in the app.',
  },
  {
    emoji: '📲',
    title: 'Smart Bluetooth Alerts',
    description: 'Sends real-time notifications to your phone when food is nearing expiry.',
  },
  {
    emoji: '💧',
    title: 'Auto-Mist Cleansing System',
    description: 'Releases a fine antimicrobial mist to keep your fridge fresh and bacteria-free.',
  },
];

export default function StorePage({ onBack }: StorePageProps) {
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const total = (PRICE_PER_UNIT * quantity).toFixed(2);

  const handleDecrement = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const handleIncrement = () => {
    setQuantity((q) => Math.min(99, q + 1));
  };

  const handleAddToCart = () => {
    setCartMessage(`✅ Added ${quantity} × FreshGuard Filter${quantity > 1 ? 's' : ''} to cart!`);
    setShowConfirmation(true);
  };

  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        setShowConfirmation(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showConfirmation]);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Nav bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-brand/20 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-brand-dark hover:text-brand font-semibold transition-colors group"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform inline-block">←</span>
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl">🌿</span>
            <span className="text-xl">🧊</span>
            <span className="font-black text-charcoal text-lg">
              Fresh<span className="text-brand">Guard</span>
            </span>
          </div>
          <div className="w-28" /> {/* spacer */}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero product section */}
        <section className="bg-hero-gradient py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-brand opacity-10 blur-2xl scale-110" />
                  <img
                    src="/assets/generated/filter-product.dim_600x600.png"
                    alt="FreshGuard Active Carbon Filter"
                    className="relative z-10 w-full max-w-sm rounded-3xl shadow-brand-glow object-cover"
                    onError={(e) => {
                      // Fallback to product device image if filter image not found
                      (e.target as HTMLImageElement).src = '/assets/generated/product-device.dim_600x600.png';
                    }}
                  />
                  {/* Badge */}
                  <div className="absolute -top-4 -right-4 z-20 bg-brand text-white text-xs font-black px-3 py-1.5 rounded-full shadow-brand-glow uppercase tracking-wide">
                    New
                  </div>
                </div>
              </div>

              {/* Product info */}
              <div>
                <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">
                  FreshGuard Inc.
                </p>
                <h1 className="text-4xl md:text-5xl font-black text-charcoal mb-4 leading-tight">
                  Active Carbon<br />
                  <span className="text-brand">Smart Filter</span>
                </h1>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  The world's first 5-in-1 smart fridge filter. Eliminate odors, detect spoilage, 
                  track expiry dates, receive smart alerts, and keep your fridge fresh automatically.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-5xl font-black text-charcoal">${PRICE_PER_UNIT}</span>
                  <span className="text-gray-400 line-through text-xl">$129.99</span>
                  <span className="bg-brand/10 text-brand-dark font-bold text-sm px-3 py-1 rounded-full">
                    38% OFF
                  </span>
                </div>

                {/* Quantity selector */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-charcoal font-semibold">Quantity:</span>
                  <div className="flex items-center border-2 border-brand/30 rounded-full overflow-hidden">
                    <button
                      onClick={handleDecrement}
                      className="w-10 h-10 flex items-center justify-center text-brand-dark font-bold text-xl hover:bg-brand/10 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-black text-charcoal text-lg">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="w-10 h-10 flex items-center justify-center text-brand-dark font-bold text-xl hover:bg-brand/10 transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-500 text-sm">
                    Total: <span className="font-bold text-charcoal">${total}</span>
                  </span>
                </div>

                {/* Add to cart button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full sm:w-auto px-10 py-4 bg-brand hover:bg-brand-dark text-white font-black text-lg rounded-full shadow-brand-glow transition-all duration-300 hover:scale-105 hover:shadow-xl mb-4"
                >
                  🛒 Add to Cart — ${total}
                </button>

                {/* Confirmation toast */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    showConfirmation ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex items-center gap-3 bg-brand/10 border border-brand/30 text-brand-dark font-semibold px-5 py-3 rounded-2xl">
                    <span className="text-xl">🎉</span>
                    <span>{cartMessage}</span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {['🚚 Free Shipping', '🔄 30-Day Returns', '🛡️ 1-Year Warranty'].map((badge) => (
                    <span
                      key={badge}
                      className="text-sm text-gray-500 font-medium flex items-center gap-1"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-3">
                5 Devices. <span className="text-brand">One Filter.</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                Everything you need to keep your food fresh, tracked, and safe — built into a single smart device.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group bg-section-alt hover:bg-brand/5 border border-transparent hover:border-brand/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-brand-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.emoji}
                  </div>
                  <h3 className="font-black text-charcoal text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}

              {/* CTA card */}
              <div className="bg-brand-gradient rounded-2xl p-6 flex flex-col justify-between text-white">
                <div>
                  <div className="text-4xl mb-4">🌿</div>
                  <h3 className="font-black text-xl mb-2">Ready to go fresh?</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Join thousands of households reducing food waste with FreshGuard.
                  </p>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="mt-6 w-full py-3 bg-white text-brand-dark font-black rounded-full hover:bg-gray-50 transition-colors shadow-md"
                >
                  Order Now — ${PRICE_PER_UNIT}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Specs section */}
        <section className="py-16 px-6 bg-section-alt">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-charcoal text-center mb-10">
              Product <span className="text-brand">Specifications</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Dimensions', value: '4.5" × 3.2" × 1.8"' },
                { label: 'Connectivity', value: 'Bluetooth 5.0' },
                { label: 'Battery Life', value: 'Up to 6 months' },
                { label: 'Filter Lifespan', value: '3 months (replaceable)' },
                { label: 'App Compatibility', value: 'iOS 14+ / Android 10+' },
                { label: 'Warranty', value: '1 Year Limited' },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between bg-white rounded-xl px-6 py-4 border border-brand/10"
                >
                  <span className="text-gray-500 font-medium">{spec.label}</span>
                  <span className="font-bold text-charcoal">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-6 bg-charcoal text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl mb-4">🧊</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Stop Wasting Food.<br />
              <span className="text-brand">Start Saving Money.</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              The average household wastes $1,500/year on spoiled food. FreshGuard pays for itself in weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleAddToCart}
                className="px-10 py-4 bg-brand hover:bg-brand-dark text-white font-black text-lg rounded-full shadow-brand-glow transition-all duration-300 hover:scale-105"
              >
                🛒 Add to Cart — ${PRICE_PER_UNIT}
              </button>
              <button
                onClick={onBack}
                className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
