import React from 'react';
import HeaderItem from './HeaderItem';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
export default function CommonHeader() {
  const selector=(state)=>{
    return{
      catalogue:state.catalogueStage,
    };
  };
  const {
    catalogue,
  }=useSelector(selector);
  

  return (
    <div style={{
      backgroundImage: 'linear-gradient(to right, var(--primary-color-light), var(--secondary-color-light))',
      display: 'flex',
      height:'5rem',
      alignItems:'center',
      padding:'0 2rem',
      gap:'2rem',
      borderBottom:'1px solid var(--line-color)',
    }}>
      <NavLink to='/'
      style={{
        display:'block'
      }}>
      <img src='/cfpp.png' alt='logo' style={{
        width:'23rem'
      }}
      className='logo-img'
      />
      </NavLink>
      <HeaderItem to='/about'>About</HeaderItem>
      {Object.keys(catalogue).map((item,index)=>{
        return <HeaderItem key={index} to={`/article/${item}/index`}>{catalogue[item].title}</HeaderItem>;
      })}
    </div>
  );
}
