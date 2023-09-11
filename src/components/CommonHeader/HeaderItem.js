import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function HeaderItem(props) {
  const {
    children = 'a',
    to = '/',
  } = props;
  return (
      <NavLink to={to} style={{
        display: 'flex',
        minWidth: '10rem',
        backgroundColor: 'var(--secondary-color-light)',
        height: '3rem',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '1000rem',
      }}>
        {children}
      </NavLink>
  );
}
