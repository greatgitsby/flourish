import ChristmasBanner from './components/ChristmasBanner';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
      <ChristmasBanner />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <InstagramSection />
      <ContactSection />
    </main>
  );
}
