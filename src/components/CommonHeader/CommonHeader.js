import React, { useEffect } from 'react';
import HeaderItem from './HeaderItem';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
export default function CommonHeader() {
  const selector = (state) => {
    return {
      catalogue: state.catalogueStage,
    };
  };
  const {
    catalogue,
  } = useSelector(selector);
  const [logoUrl, setLogoUrl] = React.useState('/cfpp_l.png');
  useEffect(() => {
    //监听屏幕宽度
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 400) {
        setLogoUrl('/cfpp_small.png');
      } else {
        setLogoUrl('/cfpp_l.png');
      }
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      // backgroundImage: 'linear-gradient(to right, var(--primary-color-light), var(--secondary-color-light))',
      backgroundColor: '#333',
      display: 'flex',
      height: '5rem',
      alignItems: 'center',
      padding: '0 2rem',
      gap: '2rem',
      // borderBottom:'1px solid var(--line-color)',
    }}>
      <NavLink to='/'
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%'

        }}>
        {
          logoUrl === '/cfpp_l.png' ?
            <img src='/cfpp_l.png' alt='logo'
              style={{
                // width: '23rem'
                maxHeight: '100%',
                width: 'auto'
              }}
              className='logo-img'
            /> :
            <img src='/cfpp_small.png' alt='logo'
              style={{
                // width: '23rem'
                maxHeight: '100%',
                width: 'auto'
              }}
              className='logo-img'
            />
        }
      </NavLink>
      {Object.keys(catalogue).map((item, index) => {
        return <HeaderItem key={index} to={`/article/${item}/index`}>{catalogue[item].title}</HeaderItem>;
      })}
    </div>
  );
}
