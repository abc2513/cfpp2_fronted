import React from 'react';
import FirstSection from './FirstSection';
import './HomePage.scss';
import MainWorkSection from './MainWorkSection';
import InfoSection from './InfoSection';
export default function HomePage() {
  return (
    <div
      className='HomePage'>
        <InfoSection/>
      <FirstSection />
      <MainWorkSection/>
    </div>
  );
}
