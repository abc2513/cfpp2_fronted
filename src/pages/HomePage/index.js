import React from 'react';
import FirstSection from './FirstSection';
import './HomePage.scss';
import MainWorkSection from './MainWorkSection';
export default function HomePage() {
  return (
    <div
      className='HomePage'>
      <FirstSection />
      <MainWorkSection/>
    </div>
  );
}
