import './App.css'
import React from 'react';
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import CompanyLogo from './components/CompanyLogo';
import PurposeSection from './components/PurposeSection';
import FeaturesSection from './components/FeaturesSection';
import ScheduleSection from './components/ScheduleSection';
import MoniterSection from './components/MoniterSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialSection';
import NewsLetterSection from './components/NewsLetterSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
    <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/10 rounded-full blur-[80px] -z-10'></div>
    <div className='overflow-hidden '>
    <Navbar />
    <Hero />
    <CompanyLogo />
    <PurposeSection />
    <FeaturesSection />
    <ScheduleSection />
    <MoniterSection />
    <PricingSection />
    <ServicesSection />
    <TestimonialSection/>
    <NewsLetterSection/>
    <Footer/>
      </div>
    </main >
  );
};

export default App;
