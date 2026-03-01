import { useScrollAnimation } from '../hooks/useScrollAnimation';

const team = [
  {
    name: 'Jordan Ellis',
    title: 'CEO',
    role: 'Product Vision & Strategy',
    emoji: '🎯',
    color: 'bg-emerald-50 border-emerald-200',
    badge: 'bg-brand text-white',
  },
  {
    name: 'Maya Chen',
    title: 'CTO',
    role: 'Hardware & Software Engineering',
    emoji: '⚙️',
    color: 'bg-teal-50 border-teal-200',
    badge: 'bg-brand-dark text-white',
  },
  {
    name: 'Marcus Webb',
    title: 'COO',
    role: 'Operations & Manufacturing',
    emoji: '🏭',
    color: 'bg-green-50 border-green-200',
    badge: 'bg-charcoal text-white',
  },
];

export default function CompanyInfo() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 bg-white"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand-dark font-semibold text-sm rounded-full mb-4 uppercase tracking-widest">
            🌿 About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            FreshGuard <span className="text-brand">Inc.</span>
          </h2>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand/5 to-brand-dark/10 rounded-3xl p-8 border border-brand/20">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic">
              "To eliminate food waste and promote healthier, smarter kitchens through innovative 
              technology that keeps food fresh longer and keeps families informed."
            </p>
            <p className="mt-4 text-brand-dark font-semibold">— Our Mission</p>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-charcoal text-center mb-10">
            👥 Meet the Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`rounded-3xl border-2 p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${member.color}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl mb-4">{member.emoji}</div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${member.badge}`}>
                  {member.title}
                </span>
                <h4 className="text-xl font-black text-charcoal mb-2">{member.name}</h4>
                <p className="text-gray-600 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
