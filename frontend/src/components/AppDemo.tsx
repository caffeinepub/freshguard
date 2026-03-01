import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Tab = 'inventory' | 'alerts' | 'recipes';

const foodItems = [
  { name: 'Organic Milk', emoji: '🥛', expiry: 'Mar 3, 2026', daysLeft: 2, status: 'warning' },
  { name: 'Strawberries', emoji: '🍓', expiry: 'Mar 2, 2026', daysLeft: 1, status: 'danger' },
  { name: 'Greek Yogurt', emoji: '🫙', expiry: 'Mar 8, 2026', daysLeft: 7, status: 'good' },
  { name: 'Spinach', emoji: '🥬', expiry: 'Mar 4, 2026', daysLeft: 3, status: 'warning' },
  { name: 'Cheddar Cheese', emoji: '🧀', expiry: 'Mar 15, 2026', daysLeft: 14, status: 'good' },
  { name: 'Leftover Pasta', emoji: '🍝', expiry: 'Mar 1, 2026', daysLeft: 0, status: 'expired' },
];

const alerts = [
  { type: 'danger', emoji: '🚨', title: '1-Day Warning', message: 'Strawberries expire tomorrow! Use them today.', time: '2 min ago' },
  { type: 'warning', emoji: '⚠️', title: '3-Day Warning', message: 'Spinach expires in 3 days. Plan a salad!', time: '1 hr ago' },
  { type: 'warning', emoji: '⚠️', title: '2-Day Warning', message: 'Organic Milk expires in 2 days.', time: '3 hr ago' },
  { type: 'info', emoji: '💨', title: 'Auto-Mist Activated', message: 'Odor detected. Mist cleanser released.', time: '5 hr ago' },
  { type: 'success', emoji: '✅', title: 'Scan Complete', message: 'Greek Yogurt added to inventory.', time: 'Yesterday' },
];

const recipes = [
  {
    emoji: '🍓',
    title: 'Strawberry Smoothie Bowl',
    tag: 'Uses: Strawberries',
    tagColor: 'bg-red-100 text-red-700',
    time: '10 min',
    ingredients: ['Strawberries', 'Banana', 'Greek Yogurt', 'Granola'],
    steps: 'Blend strawberries with banana and yogurt. Pour into bowl, top with granola and fresh berries.',
  },
  {
    emoji: '🥬',
    title: 'Spinach & Cheese Omelette',
    tag: 'Uses: Spinach + Cheddar',
    tagColor: 'bg-green-100 text-green-700',
    time: '15 min',
    ingredients: ['Spinach', 'Cheddar Cheese', 'Eggs', 'Olive Oil'],
    steps: 'Sauté spinach, whisk eggs, pour over spinach, add cheese, fold and serve.',
  },
  {
    emoji: '🥛',
    title: 'Creamy Pasta Bake',
    tag: 'Uses: Milk + Pasta',
    tagColor: 'bg-blue-100 text-blue-700',
    time: '25 min',
    ingredients: ['Leftover Pasta', 'Milk', 'Cheddar Cheese', 'Garlic'],
    steps: 'Mix pasta with milk sauce, top with cheese, bake at 375°F for 20 minutes until golden.',
  },
];

const statusConfig = {
  good: { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500', label: 'Fresh' },
  warning: { bg: 'bg-yellow-100', text: 'text-yellow-700', dot: 'bg-yellow-500', label: 'Soon' },
  danger: { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500', label: '1 Day' },
  expired: { bg: 'bg-gray-100', text: 'text-gray-500', dot: 'bg-gray-400', label: 'Expired' },
};

const alertConfig = {
  danger: 'bg-red-50 border-red-200',
  warning: 'bg-yellow-50 border-yellow-200',
  info: 'bg-blue-50 border-blue-200',
  success: 'bg-green-50 border-green-200',
};

export default function AppDemo() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeTab, setActiveTab] = useState<Tab>('inventory');

  return (
    <section
      id="app-demo"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 bg-white"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand-dark font-semibold text-sm rounded-full mb-4 uppercase tracking-widest">
            📱 App Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4">
            The FreshGuard{' '}
            <span className="text-brand">Companion App</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Track your food, get alerts before things expire, and discover recipes to use what you have.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 justify-center">
          {/* Phone mockup */}
          <div className="flex-shrink-0">
            <div className="relative w-[300px] mx-auto">
              {/* Phone outer frame */}
              <div className="relative bg-charcoal rounded-[3rem] p-3 shadow-2xl border-4 border-gray-700">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-charcoal rounded-full z-20" />
                {/* Screen */}
                <div className="bg-gray-50 rounded-[2.4rem] overflow-hidden h-[580px] flex flex-col">
                  {/* Status bar */}
                  <div className="bg-white px-5 pt-8 pb-2 flex justify-between items-center text-xs text-gray-500 font-semibold">
                    <span>9:41</span>
                    <span>📶 🔋</span>
                  </div>

                  {/* App header */}
                  <div className="bg-white px-4 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🌿</span>
                      <span className="font-black text-charcoal text-base">FreshGuard</span>
                      <span className="ml-auto text-xs bg-brand/10 text-brand-dark px-2 py-0.5 rounded-full font-semibold">Premium</span>
                    </div>
                  </div>

                  {/* Tab bar */}
                  <div className="bg-white flex border-b border-gray-100">
                    {(['inventory', 'alerts', 'recipes'] as Tab[]).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2.5 text-xs font-bold capitalize transition-colors ${
                          activeTab === tab
                            ? 'text-brand border-b-2 border-brand'
                            : 'text-gray-400'
                        }`}
                      >
                        {tab === 'inventory' ? '📦' : tab === 'alerts' ? '🔔' : '🍳'}{' '}
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Content area */}
                  <div className="flex-1 overflow-y-auto">
                    {activeTab === 'inventory' && (
                      <div className="p-3 space-y-2">
                        <p className="text-xs text-gray-400 font-semibold px-1 mb-3">
                          {foodItems.length} items tracked
                        </p>
                        {foodItems.map((item) => {
                          const cfg = statusConfig[item.status as keyof typeof statusConfig];
                          return (
                            <div key={item.name} className="bg-white rounded-2xl p-3 flex items-center gap-3 shadow-sm border border-gray-100">
                              <span className="text-2xl">{item.emoji}</span>
                              <div className="flex-1 min-w-0">
                                <p className="font-bold text-charcoal text-xs truncate">{item.name}</p>
                                <p className="text-gray-400 text-xs">{item.expiry}</p>
                              </div>
                              <span className={`text-xs font-bold px-2 py-1 rounded-full ${cfg.bg} ${cfg.text} flex-shrink-0`}>
                                {cfg.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {activeTab === 'alerts' && (
                      <div className="p-3 space-y-2">
                        <p className="text-xs text-gray-400 font-semibold px-1 mb-3">
                          {alerts.length} notifications
                        </p>
                        {alerts.map((alert, i) => (
                          <div key={i} className={`rounded-2xl p-3 border ${alertConfig[alert.type as keyof typeof alertConfig]}`}>
                            <div className="flex items-start gap-2">
                              <span className="text-lg flex-shrink-0">{alert.emoji}</span>
                              <div className="flex-1 min-w-0">
                                <p className="font-bold text-charcoal text-xs">{alert.title}</p>
                                <p className="text-gray-600 text-xs leading-relaxed mt-0.5">{alert.message}</p>
                                <p className="text-gray-400 text-xs mt-1">{alert.time}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'recipes' && (
                      <div className="p-3 space-y-3">
                        <p className="text-xs text-gray-400 font-semibold px-1 mb-3">
                          Suggested for expiring items
                        </p>
                        {recipes.map((recipe) => (
                          <div key={recipe.title} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">{recipe.emoji}</span>
                              <div>
                                <p className="font-black text-charcoal text-xs">{recipe.title}</p>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${recipe.tagColor}`}>
                                  {recipe.tag}
                                </span>
                              </div>
                              <span className="ml-auto text-xs text-gray-400">⏱ {recipe.time}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {recipe.ingredients.map((ing) => (
                                <span key={ing} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                  {ing}
                                </span>
                              ))}
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">{recipe.steps}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom nav */}
                  <div className="bg-white border-t border-gray-100 px-4 py-2 flex justify-around">
                    {['🏠', '📊', '🔔', '⚙️'].map((icon, i) => (
                      <button key={i} className={`p-2 rounded-xl text-lg ${i === 0 ? 'bg-brand/10' : ''}`}>
                        {icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Home indicator */}
              <div className="w-24 h-1 bg-gray-600 rounded-full mx-auto mt-3" />
            </div>
          </div>

          {/* Feature callouts */}
          <div className="flex-1 space-y-5 max-w-md">
            <h3 className="text-2xl font-black text-charcoal mb-6">
              App Features at a Glance
            </h3>
            {[
              {
                emoji: '📦',
                title: 'Smart Inventory',
                desc: 'Automatically tracks all your food items with expiration dates. Color-coded status makes it instant to see what needs attention.',
                active: activeTab === 'inventory',
                tab: 'inventory' as Tab,
              },
              {
                emoji: '🔔',
                title: 'Proactive Alerts',
                desc: '3-day and 1-day warnings before food expires. Plus real-time notifications when the device detects odors or activates the mist cleanser.',
                active: activeTab === 'alerts',
                tab: 'alerts' as Tab,
              },
              {
                emoji: '🍳',
                title: 'Recipe Suggestions',
                desc: 'AI-powered recipe ideas tailored to your expiring ingredients. Reduce waste and discover new meals at the same time.',
                active: activeTab === 'recipes',
                tab: 'recipes' as Tab,
              },
            ].map((feature) => (
              <button
                key={feature.title}
                onClick={() => setActiveTab(feature.tab)}
                className={`w-full text-left rounded-2xl p-5 border-2 transition-all duration-300 ${
                  feature.active
                    ? 'border-brand bg-brand/5 shadow-md'
                    : 'border-gray-100 bg-white hover:border-brand/30 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    feature.active ? 'bg-brand/20' : 'bg-gray-100'
                  }`}>
                    {feature.emoji}
                  </div>
                  <div>
                    <h4 className={`font-black text-base mb-1 ${feature.active ? 'text-brand-dark' : 'text-charcoal'}`}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
