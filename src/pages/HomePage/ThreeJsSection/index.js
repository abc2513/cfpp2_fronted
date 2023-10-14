import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import handleScene from './handleScene';
export default function ThreeJsSection() {
  const containerRef = React.useRef();
  const canvasRef = React.useRef();
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    handleScene(containerRef, canvasRef, setProgress);
  }, []);
  return (
    <div className='ThreeJsSection'
    >

      <div
        ref={containerRef}
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <canvas ref={canvasRef}
          style={{
            opacity: progress >= 1 ? 1 : 0,
          }}></canvas>
        {/* <div style={{
          height:'100%',
          width:'100%',
          position:'absolute',
        }}>
          <div style={{
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50%,-50%)',
            color:'white',
            fontSize:'20px',
          }}>
            {progress.toFixed(2)}%
          </div>
        </div> */}
      </div>
      <div className='TextContainer'>

        <Header style={{ fontSize: '2.4rem' }}>其他内容</Header>
        <div style={{
          padding: '0 2rem',
          minHeight: '20rem',
        }}>
        <div className='small_title'>emmm</div>
        <ul> <li>这里写点什么好呢</li>  </ul>
        </div>
      </div>
    </div>
  );
}
