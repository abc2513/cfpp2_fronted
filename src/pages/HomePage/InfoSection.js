import React from 'react';
import './InfoSection.scss';

export default function InfoSection() {
  const [display, setDisplay] = React.useState(true);
  return (
    <>
      {
        display ?
          <div className='InfoSection' onClick={()=>{
            setDisplay(false);
          }}>
            该网站以桌面优先进行响应式设计，建议在桌面端浏览以获得最佳浏览体验。
          </div> : <></>
      }
    </>
  );
}
