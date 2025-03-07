import React, { useEffect, useState } from 'react';
import Navbar from '../components/Home/Navbar';
import HeroSection from '../components/Home/HeroSection';
import FeatureSection from '../components/Home/FeatureSection';
import Footer from '../components/layout/Footer';

const Home = () => {

  return (
    
    <div className='bg-slate-100 dark:bg-neutral-900'>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-12 px-6">
        <HeroSection />
        <FeatureSection />
        <Footer /> 
      </div>
    </div>
  );
};

export default Home;
