import React from 'react';
import './ArticleSider.scss';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import ArticleSiderFolder from './ArticleSiderFolder';
export default function ArticleSider() {
  const { page, article } = useParams();
  const {
    catalogue,
  } = useSelector(state => {
    return {
      catalogue: state.catalogueStage
    };
  });
  const [siderExpanded, setSiderExpanded] = React.useState(true);
  return (
    <div
      style={{
        borderRight: '1px solid var(--line-color)',
        width: siderExpanded ? '27rem' : '5rem',
        overflowX: 'hidden',
        overflowY: 'auto',
        transition: 'all .6s',
        paddingBottom:'4rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '.5rem',
          width: '27rem',
          gap: '.5rem',
          '--sider-open': siderExpanded ? 1 : 0,
        }}
      >
        <div
        style={{
          
          width: siderExpanded ? '100%' : '4rem',
          overflow: 'hidden',
          backgroundColor: 'var(--secondary-color-light)',
          borderRadius: '1000rem',
          transition: 'all .6s',
          
        }}>
          <div
            style={{
              display: 'flex',
              transition: 'all .6s',
              alignItems: 'center',
              gap: '1.5rem',
              width: '26rem',
              
            }}>
            <button onClick={() => { setSiderExpanded(!siderExpanded); }}
              style={{
                width: '4rem',
                height: '4rem',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: 'var(--secondary-color)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className='article-sider-button'
            >
              <div className='hamburger'> </div>
            </button>
            <div
            style={{
              opacity: siderExpanded ? '1' : '0',
              transition: 'all .6s',
              flex:1,
              lineHeight:'4rem'
            }}
            >
              <NavLink
              style={{
                display:'block',
                fontSize:'1.8rem'
              }}
              to={`/article/${page}/index`}>
              {catalogue[page] ? catalogue[page].title : null}
              </NavLink>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
            padding: '0 .5rem',
          }}>
          {
            catalogue[page] ? Object.keys(catalogue[page].folders).map((folderKey, index) => (
              <ArticleSiderFolder
                folder={catalogue[page].folders[folderKey]}
                folderKey={folderKey}
                siderExpanded={siderExpanded}
              />
            )) : null
          }
        </div>
      </div>
    </div>
  );
}
