import React from 'react';
import ArticleSiderItem from './ArticleSiderItem';

export default function ArticleSiderFolder(props) {
  const [folderExpanded, setFolderExpanded] = React.useState(true);
  const {
    folder={
      articles:{},
    },
    folderKey,
    siderExpanded,
  }=props;
  return (
    <div
    style={{
      borderBottom:'1px solid var(--line-color)',
      // borderRadius:folderExpanded?'1rem':none,
      // backgroundColor:folderExpanded?'var(--primary-color-light)':'transparent',
    }}>
      <div 
      style={{
        display:'flex',
        alignItems:'center',
        cursor:'pointer',
        borderRadius: '1000rem',
        transition:'all .6s',
      }}
      className='folder-header'
      onClick={()=>{
        setFolderExpanded(!folderExpanded);
      }}>
        <div style={{width:'3rem',height:'3rem'}}>
          <svg height='100%' width='100%' viewBox='0 0 90 90' style={{
            transform: folderExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition:'all .6s',
          }}>
            {/* 半圆path */}
            <path
              d='M 15 30
              A 30 30 0 0 1 75 30
              l -30 60
              z
              '
              fill='var(--secondary-color)'
              stroke='var(--secondary-color)'
              strokeWidth='1'
            />
          </svg>
        </div>
        <div style={{
          // fontWeight:'800',
          color:'var(--secondary-color-dark)',
          fontSize:'1.8rem',
          opacity:siderExpanded?'1':'0',
          transition:'all .6s',
        }}
        className='folder-title'
        >{folder.title}</div>
      </div>
      <div
      style={{
        height:folderExpanded?Object.keys(folder.articles).length*3+'rem':'0',
        overflow:'hidden',
        opacity:folderExpanded?'1':'0',
        transition:'all .6s',
      }}
      >
        {
          folder.articles?Object.keys(folder.articles).map((articleKey, index) => (
            <ArticleSiderItem
            articleObject={folder.articles[articleKey]}
            articleKey={articleKey}
            siderExpanded={siderExpanded}
            />
          )):null
        }
      </div>
    </div>
  );
}
