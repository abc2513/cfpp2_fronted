import React from 'react';

export default function LoadProgress(props) {
  const { progress = 0.5 } = props;
  return (
    <div
      style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '.5rem',
        opacity:progress===1?0:1,
        transition:'opacity 2s',
      }}>
      <div style={{
        width: '40vw',
        height: '.5rem',
        borderRadius: '1000rem',
        backgroundColor: '#bbb',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress * 100}%`,
          height: '100%',
          backgroundColor: '#00a1d6',
          transition: 'width .5s',
        }}></div>
      </div>
      <div
        style={{
          fontSize: '1.5rem',
          color: '#555',
        }}>{progress!==1?'加载资源中':'加载完成'} {Math.round(progress*1000) /10}%</div>
    </div>
  );
}
