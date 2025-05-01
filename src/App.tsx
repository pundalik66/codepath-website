import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ContactSection from './sections/ContactSection';
import PrivacySection from './sections/PrivacySection';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;