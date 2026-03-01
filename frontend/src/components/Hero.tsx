import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollToDemo = () => {
    document.getElementById('app-demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFinancials = () => {
    document.getElementById('financials')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.png')" }}
      />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-brand-light opacity-20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-brand opacity-10 blur-3xl" />

      <div
        className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand shadow-brand-glow">
            <span className="text-3xl">🌿</span>
          </div>
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-dark shadow-brand-glow">
            <span className="text-3xl">🧊</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-charcoal tracking-tight ml-2">
            Fresh<span className="text-brand">Guard</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-semibold text-brand-dark mb-4 tracking-wide uppercase">
          Smart Fridge System
        </p>

        {/* Slogan */}
        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
          Stay Fresh.{' '}
          <span className="text-brand">Stay Smart.</span>{' '}
          <span className="text-brand-dark">Waste Nothing.</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The world's first all-in-one smart fridge filter that combines odor absorption, 
          ethylene gas detection, expiration tracking, and auto-mist cleansing — all in one device.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToFinancials}
            className="px-8 py-4 bg-brand hover:bg-brand-dark text-white font-bold text-lg rounded-full shadow-brand-glow transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            🦈 See the Pitch
          </button>
          <button
            onClick={scrollToDemo}
            className="px-8 py-4 bg-white hover:bg-gray-50 text-brand-dark font-bold text-lg rounded-full border-2 border-brand shadow-md transition-all duration-300 hover:scale-105"
          >
            📱 View App Demo
          </button>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: '$3.3M', label: 'Valuation' },
            { value: '344%', label: 'Markup' },
            { value: '$1.2M', label: 'Year 1 Projection' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-md border border-brand/20">
              <div className="text-2xl font-black text-brand">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-brand rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
