import { useScrollAnimation } from '../hooks/useScrollAnimation';

const demographics = [
  { emoji: '👨‍👩‍👧‍👦', label: 'Health-Conscious Families', desc: 'Families who prioritize fresh, healthy food for their loved ones' },
  { emoji: '💼', label: 'Busy Professionals', desc: 'Time-pressed individuals who need smart solutions to reduce waste' },
  { emoji: '📅', label: 'Ages 25–50', desc: 'Tech-savvy adults who embrace smart home technology' },
  { emoji: '🛒', label: '$150+/Month on Groceries', desc: 'Households with significant grocery spend who want to protect their investment' },
];

export default function TargetMarket() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 bg-section-alt"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand-dark font-semibold text-sm rounded-full mb-4 uppercase tracking-widest">
            🎯 Target Market
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">
            Who We Serve
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Millions of households are losing money to food waste every year. We're here to fix that.
          </p>
        </div>

        {/* Demographics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {demographics.map((item, i) => (
            <div
              key={item.label}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand/30 transition-all duration-300 flex items-start gap-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
              }}
            >
              <div className="text-4xl flex-shrink-0">{item.emoji}</div>
              <div>
                <h4 className="font-black text-charcoal text-lg mb-1">{item.label}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* UVP Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand to-brand-dark p-10 text-white text-center shadow-brand-glow">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
              What Makes FreshGuard Stand Out
            </h3>
            <p className="text-lg md:text-xl font-semibold text-white/90 max-w-3xl mx-auto leading-relaxed">
              The <span className="underline decoration-white/60 underline-offset-4">only device</span> that{' '}
              <strong>COMBINES</strong> odor absorption + gas detection + expiration tracking + 
              auto-mist cleanse — all in <strong>one unit</strong>.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {['Odor Absorption', 'Gas Detection', 'Expiry Tracking', 'Auto-Mist Cleanse'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-bold border border-white/30">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
