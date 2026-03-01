import Hero from './components/Hero';
import CompanyInfo from './components/CompanyInfo';
import HowItWorks from './components/HowItWorks';
import FeaturesShowcase from './components/FeaturesShowcase';
import TargetMarket from './components/TargetMarket';
import SharkTankFinancials from './components/SharkTankFinancials';
import AppDemo from './components/AppDemo';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <CompanyInfo />
      <HowItWorks />
      <FeaturesShowcase />
      <TargetMarket />
      <SharkTankFinancials />
      <AppDemo />
      <Footer />
    </div>
  );
}
