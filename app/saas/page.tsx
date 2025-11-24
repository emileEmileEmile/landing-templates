import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import Stats from '@/components/sections/Stats';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/sections/ScrollToTop';
import PageLoader from '@/components/sections/PageLoader';

export default function SaaSTemplate() {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <SocialProof />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FinalCTA />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}