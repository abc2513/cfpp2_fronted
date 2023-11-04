import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderItem.scss';
export default function HeaderItem(props) {
  const {
    children = 'a',
    to = '/',
  } = props;
  return (
    <NavLink to={to}  className='HeaderItem'
    // target='_blank'
    >
      {children}
    </NavLink>
  );
}
