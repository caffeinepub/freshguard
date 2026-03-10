import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const partners = [
    {
      name: "Frigidaire",
      logo: "/assets/generated/frigidaire-logo.dim_200x80.png",
      description: "Trusted appliance partner",
    },
    {
      name: "Whirlpool",
      logo: "/assets/generated/whirlpool-logo.dim_200x80.png",
      description: "Global home appliance leader",
    },
    {
      name: "KitchenAid",
      logo: "/assets/generated/kitchenaid-logo.dim_200x80.png",
      description: "Premium kitchen innovation",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white border-t border-brand/10"
    >
      <div
        className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand font-semibold text-sm rounded-full uppercase tracking-widest mb-4">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-charcoal mb-3">
            Our <span className="text-brand">Partners</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            FreshGuard is proud to partner with the world's most recognized
            appliance brands.
          </p>
        </div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center gap-4 p-8 rounded-2xl border border-brand/15 bg-gray-50 hover:bg-brand/5 hover:border-brand/30 hover:shadow-brand-glow transition-all duration-300 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-14 max-w-[160px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-charcoal text-lg">
                  {partner.name}
                </p>
                <p className="text-sm text-gray-400 mt-0.5">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider tagline */}
        <p className="text-center text-sm text-gray-400 mt-10 font-medium tracking-wide">
          Designed to integrate seamlessly with the appliances you already
          trust.
        </p>
      </div>
    </section>
  );
}
