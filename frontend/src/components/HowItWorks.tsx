import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    step: '01',
    emoji: '🌬️',
    title: 'Absorbs Odors',
    description:
      'The active carbon filter naturally absorbs food odors, keeping your fridge smelling fresh 24/7 without chemicals.',
  },
  {
    step: '02',
    emoji: '🔬',
    title: 'Detects Spoilage',
    description:
      'The built-in ethylene gas sensor continuously monitors the air and detects gases released by spoiling produce.',
  },
  {
    step: '03',
    emoji: '📷',
    title: 'Scans Expiry Dates',
    description:
      'The integrated barcode scanner reads product barcodes and automatically logs expiration dates to your app.',
  },
  {
    step: '04',
    emoji: '📲',
    title: 'Alerts & Auto-Cleanses',
    description:
      'The Bluetooth chip sends real-time alerts to your phone, and automatically releases a mist cleanser when bad smells are detected.',
  },
];

export default function HowItWorks() {
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
            ⚡ How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal">
            4 Steps to a{' '}
            <span className="text-brand">Smarter Fridge</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`relative bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-xl hover:border-brand/30 transition-all duration-300 hover:-translate-y-1`}
              style={{
                transitionDelay: isVisible ? `${i * 120}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
              }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-3xl">
                    {step.emoji}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black text-brand uppercase tracking-widest">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-charcoal mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {/* Step number watermark */}
              <div className="absolute top-4 right-6 text-6xl font-black text-gray-50 select-none pointer-events-none">
                {step.step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
