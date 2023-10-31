import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function ArticleSiderItem(props) {
  const {
    articleObject,
    articleKey,
    siderExpanded
  } = props;
  const { page, article } = useParams();
  return (
    <div
      className='article-sider-item'
      style={{
        backgroundColor: articleKey === article ? 'var(--primary-color)' : '',
        borderRadius: '1000rem',
        width: siderExpanded ? '100%' : '3rem',
        overflow: 'hidden',
        transition: 'all .6s',
        color: articleKey === article ? 'var(--primary-color-light)' : 'inherit',
      }}>
      <NavLink
        to={`/article/${page}/${articleKey}`}
        style={{
          display: 'flex',
          padding: '0 1.2rem',
          gap: '.5rem',
          alignItems: 'center',
          transition: 'all .6s',
          lineHeight: '3rem',
          width: '24rem'
        }}>
        <div
          style={{
            height: '.5rem',
            width: '.5rem',
            backgroundColor: articleKey === article ? 'var(--secondary-color-light)' : 'var(--secondary-color)',
            borderRadius: '50%',
          }}
        > </div>
        <div
          style={{
            opacity: siderExpanded ? '1' : '0',
            transition: 'all .6s',
          }}>
          {articleObject.title}
        </div>
      </NavLink>
    </div>
  );
};
