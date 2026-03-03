import { useState } from 'react';
import Hero from './components/Hero';
import CompanyInfo from './components/CompanyInfo';
import HowItWorks from './components/HowItWorks';
import FeaturesShowcase from './components/FeaturesShowcase';
import TargetMarket from './components/TargetMarket';
import SharkTankFinancials from './components/SharkTankFinancials';
import AppDemo from './components/AppDemo';
import Footer from './components/Footer';
import StorePage from './components/StorePage';
import SharkVotePage from './components/SharkVotePage';
import Partners from './components/Partners';
import AppSidebar from './components/AppSidebar';
import MenuButton from './components/MenuButton';

type Page = 'home' | 'store' | 'vote';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = (target: Page) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Persistent sidebar + menu button across all pages */}
      <MenuButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((v) => !v)} />
      <AppSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentPage={page}
        onNavigate={navigate}
      />

      {page === 'store' && <StorePage onBack={() => navigate('home')} />}
      {page === 'vote' && <SharkVotePage onBack={() => navigate('home')} />}

      {page === 'home' && (
        <div className="min-h-screen bg-white font-sans">
          <section id="hero">
            <Hero onBuyFilter={() => navigate('store')} onVote={() => navigate('vote')} />
          </section>
          <section id="company-info">
            <CompanyInfo />
          </section>
          <section id="how-it-works">
            <HowItWorks />
          </section>
          <FeaturesShowcase />
          <Partners />
          <TargetMarket />
          <section id="financials">
            <SharkTankFinancials />
          </section>
          <AppDemo />
          <Footer />
        </div>
      )}
    </>
  );
}
