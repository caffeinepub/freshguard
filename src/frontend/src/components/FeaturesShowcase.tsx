import { useScrollAnimation } from "../hooks/useScrollAnimation";

const features = [
  {
    emoji: "🌿",
    title: "Active Carbon Filter",
    description:
      "Naturally absorbs and neutralizes food odors using activated carbon technology — no sprays, no chemicals, just clean air.",
    color: "from-emerald-50 to-green-50 border-emerald-200",
    iconBg: "bg-emerald-100",
  },
  {
    emoji: "🔬",
    title: "Ethylene Gas Sensor",
    description:
      "Detects ethylene gas emitted by ripening and spoiling produce, giving you early warning before food goes bad.",
    color: "from-teal-50 to-cyan-50 border-teal-200",
    iconBg: "bg-teal-100",
  },
  {
    emoji: "📷",
    title: "Barcode Scanner",
    description:
      "Scan product barcodes to automatically log expiration dates. No manual entry — just scan and forget.",
    color: "from-green-50 to-lime-50 border-green-200",
    iconBg: "bg-green-100",
  },
  {
    emoji: "📡",
    title: "Bluetooth Notifications",
    description:
      "Connects to your smartphone via Bluetooth to send real-time alerts about food freshness and expiration warnings.",
    color: "from-sky-50 to-blue-50 border-sky-200",
    iconBg: "bg-sky-100",
  },
  {
    emoji: "💨",
    title: "Auto-Mist Cleanser",
    description:
      "Automatically releases a food-safe mist cleanser when bad odors are detected, keeping your fridge hygienic.",
    color: "from-violet-50 to-purple-50 border-violet-200",
    iconBg: "bg-violet-100",
  },
];

export default function FeaturesShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 bg-white"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand-dark font-semibold text-sm rounded-full mb-4 uppercase tracking-widest">
            🛠️ Device Features
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">
            Everything in <span className="text-brand">One Device</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Five powerful technologies packed into a single sleek unit that fits
            in any fridge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`rounded-3xl border-2 bg-gradient-to-br p-7 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default ${feature.color}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms, box-shadow 0.3s ease`,
              }}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center text-3xl mb-5`}
              >
                {feature.emoji}
              </div>
              <h3 className="text-lg font-black text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Product image card */}
          <div className="rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-brand/5 to-brand-dark/10 p-4 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <img
              src="/assets/generated/product-device.dim_600x600.png"
              alt="FreshGuard Device"
              className="w-full max-w-[220px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
