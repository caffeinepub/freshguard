import { useScrollAnimation } from "../hooks/useScrollAnimation";

const expenses = [
  { label: "Factory/Warehouse Rental", amount: "$6,500" },
  { label: "Utilities", amount: "$1,000" },
  { label: "Advertising & Marketing", amount: "$4,000" },
  { label: "Employee Salaries (4 employees)", amount: "$20,000" },
];

const projections = [
  { year: "Year 1", revenue: "$975K", profit: "$340K", color: "border-brand" },
  {
    year: "Year 2",
    revenue: "$3.6M",
    profit: "Est. $1.26M",
    color: "border-yellow-400",
  },
];

export default function SharkTankFinancials() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="financials"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 bg-charcoal relative overflow-hidden"
    >
      {/* Spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-dark/10 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-brand/20 text-brand font-semibold text-sm rounded-full mb-4 uppercase tracking-widest border border-brand/30">
            🦈 Shark Tank Pitch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            The Investment Opportunity
          </h2>
          <p className="text-gray-400 text-lg">
            FreshGuard Inc. — Series A Funding Round
          </p>
        </div>

        {/* Main Ask Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-10 text-white text-center mb-10 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="text-5xl mb-4">💰</div>
            <p className="text-white/70 text-lg font-semibold uppercase tracking-widest mb-2">
              We Are Asking
            </p>
            <div className="text-6xl md:text-7xl font-black mb-3">$325,000</div>
            <div className="text-2xl font-bold text-white/90 mb-6">
              for{" "}
              <span className="text-yellow-300 text-3xl font-black">12.5%</span>{" "}
              equity
            </div>
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur rounded-2xl border border-white/30">
              <span className="text-white/70 text-sm font-semibold">
                Company Valuation:{" "}
              </span>
              <span className="text-white font-black text-xl">
                $2.6 Million
              </span>
            </div>
          </div>
        </div>

        {/* Unit Economics + App */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Unit Economics */}
          <div className="bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-7">
            <h3 className="text-white font-black text-xl mb-5 flex items-center gap-2">
              📦 Unit Economics
            </h3>
            <div className="space-y-4">
              {[
                {
                  label: "Cost to Manufacture (COGS)",
                  value: "$18 / unit",
                  highlight: false,
                },
                {
                  label: "Retail Price",
                  value: "$69.99 / unit",
                  highlight: true,
                },
                {
                  label: "Gross Margin per Unit",
                  value: "$51.99",
                  highlight: true,
                },
                { label: "Markup", value: "289%", highlight: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-gray-400 text-sm">{item.label}</span>
                  <span
                    className={`font-black text-lg ${item.highlight ? "text-brand" : "text-white"}`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* App Revenue */}
          <div className="bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-7">
            <h3 className="text-white font-black text-xl mb-5 flex items-center gap-2">
              📱 App Revenue Model
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400 text-sm">App Download</span>
                <span className="font-black text-lg text-white">Free</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400 text-sm">
                  Premium Subscription
                </span>
                <span className="font-black text-lg text-brand">
                  $3.99 / month
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400 text-sm">
                  Target Conversion Rate
                </span>
                <span className="font-black text-lg text-white">35%</span>
              </div>
              <div className="mt-4 p-4 bg-brand/10 rounded-2xl border border-brand/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  🔓 Premium unlocks advanced recipe suggestions, multi-fridge
                  support, and detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Expenses */}
        <div className="bg-white/5 backdrop-blur rounded-3xl border border-white/10 p-7 mb-6">
          <h3 className="text-white font-black text-xl mb-5 flex items-center gap-2">
            📊 Monthly Operating Expenses
          </h3>
          <div className="space-y-3">
            {expenses.map((expense) => (
              <div
                key={expense.label}
                className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
              >
                <span className="text-gray-400 text-sm">{expense.label}</span>
                <span className="font-bold text-white">{expense.amount}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4 mt-2">
              <span className="text-white font-black text-lg">
                Total Monthly Expenses
              </span>
              <span className="font-black text-2xl text-red-400">$31,500</span>
            </div>
          </div>
        </div>

        {/* Sales & Projections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white/5 backdrop-blur rounded-3xl border border-yellow-400/30 p-6 text-center">
            <div className="text-3xl mb-2">📈</div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
              Current Sales
            </p>
            <p className="text-white font-black text-2xl">$142,000</p>
            <p className="text-gray-500 text-xs mt-1">First 6 months</p>
          </div>
          {projections.map((proj) => (
            <div
              key={proj.year}
              className={`bg-white/5 backdrop-blur rounded-3xl border-2 ${proj.color} p-6 text-center`}
            >
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                {proj.year} Revenue
              </p>
              <p className="text-white font-black text-2xl">{proj.revenue}</p>
              <p className="text-brand text-sm font-bold mt-1">
                Profit: {proj.profit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
