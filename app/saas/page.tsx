import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';

export default function SaaSTemplate() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}