import React from 'react';
import HeaderItem from './HeaderItem';

export default function CommonHeader() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(to right, var(--primary-color-light), var(--secondary-color-light))',
      display: 'flex',
      height:'5rem',
      alignItems:'center',
      padding:'0 2rem',
      gap:'1rem',
      borderBottom:'1px solid #ccc',
    }}>
      <div>cfPersonWebsite</div>
      <HeaderItem to='/'>Home</HeaderItem>
      <HeaderItem to='/article/page/aryicle'>article</HeaderItem>
      <HeaderItem to='/about'>About</HeaderItem>
    </div>
  );
}
