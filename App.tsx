import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import StitchingService from './components/StitchingService';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import StyleJudge from './components/StyleJudge';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCollections />
        <StitchingService />
        <WhyChooseUs />
        <Testimonials />
        <StyleJudge />
      </main>
      <Footer />
    </div>
  );
};

export default App;