import React from 'react';
import Hero from '@/modules/landing-page/components/sections/Hero';
import About from '@/modules/landing-page/components/sections/About';
import Services from '@/modules/landing-page/components/sections/Services';
import Testimonials from '@/modules/landing-page/components/sections/Testimonials';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
