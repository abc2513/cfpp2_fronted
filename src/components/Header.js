import React from 'react';
import './Header.scss';
export default function Header(props) {
  const { children, style,boxStyle } = props;
  return (
    <div
    style={{
      dpisplay: 'flex',
      justifyContent: 'start',
      ...boxStyle
    }}
    className='header-component-container'>
      <div className='title-divder'></div>
      <div
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          backgroundImage: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
          '-webkit-background-clip': 'text',
          color: 'transparent',
          width: 'fit-content',
          textShadow: '0px 0px 10px var(--primary-color-light)',
          ...style
        }}
        className='header-component'
      >{children}</div>
      <div className='title-divder'></div>
    </div>
  );
}
