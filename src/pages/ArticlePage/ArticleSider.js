import React from 'react';

export default function ArticleSider() {
  const [siderExpanded, setSiderExpanded] = React.useState(true);
  return (
    <div
      style={{
        borderRight: '1px solid #ccc',
        minWidth: siderExpanded?'25rem':'5rem',
        display:'flex',
        flexDirection:'column',
      }}
    >ArticleSider
      <button onClick={()=>{setSiderExpanded(!siderExpanded);}}>
        {siderExpanded ? '收起' : '展开'}
      </button>
    </div>
  );
}
