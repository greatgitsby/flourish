import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main className="pt-20">
      <HeroSection />
      <ProductsSection />
      <AboutSection id="about" />
      <InstagramSection />
      <ContactSection id="contact" />
    </main>
  );
}
