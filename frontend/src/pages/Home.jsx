import React, { useEffect, useState } from 'react';
import Navbar from '../components/Home/Navbar';
import HeroSection from '../components/Home/HeroSection';
import FeatureSection from '../components/Home/FeatureSection';
import Footer from '../components/layout/Footer';
import openNotificationWithIcon from '../utils/notification';
import { useLocation } from 'react-router-dom';

const Home = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const session = queryParams.get('session');

  useEffect(() => {
    if (session === 'expired') {
      openNotificationWithIcon('warning', 'Su sesión ha expirado, por favor vuelva a iniciar sesión.', '', 5);
    }
  }, [session]);

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
