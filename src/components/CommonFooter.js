import React from 'react';

export default function CommonFooter() {
  return (
    <div
      style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--line-color)',
        backgroundImage: 'linear-gradient(to right, var(--primary-color-light), var(--secondary-color-light))',
        display: 'flex',
        minHeight: '5rem',
      }}
    >CommonFooter</div>
  );
}
