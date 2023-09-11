import React from 'react';

export default function ThemeProvider(props) {
    const { children,...others } = props;
    // const 
  return (
    <div
        {...others}
    >{children}</div>
  );
}
