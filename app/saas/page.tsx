import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';

export default function SaaSTemplate() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}