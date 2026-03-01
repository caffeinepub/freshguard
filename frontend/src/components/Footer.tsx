export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'freshguard-app');

  return (
    <footer className="bg-charcoal text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-2xl">🌿</span>
              <span className="text-2xl">🧊</span>
            </div>
            <div>
              <span className="text-xl font-black">Fresh<span className="text-brand">Guard</span></span>
              <p className="text-gray-400 text-xs">Stay Fresh. Stay Smart. Waste Nothing.</p>
            </div>
          </div>

          {/* Team */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-1">FreshGuard Inc. — Leadership Team</p>
            <p className="text-gray-500 text-xs">Jordan Ellis · Maya Chen · Marcus Webb</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {year} FreshGuard Inc. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{' '}
            <span className="text-brand text-base">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-light transition-colors font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
