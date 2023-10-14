import React from 'react';
import FirstSection from './FirstSection/FirstSection.js';
import './HomePage.scss';
import MainWorkSection from './MainWorkSection';
import InfoSection from './InfoSection';
import ThreeJsSection from './ThreeJsSection/index.js';
export default function HomePage() {
  return (
    <div
      className='HomePage'>
      <InfoSection />
      <FirstSection />
      <MainWorkSection />
      <ThreeJsSection/>
    </div>
  );
}
