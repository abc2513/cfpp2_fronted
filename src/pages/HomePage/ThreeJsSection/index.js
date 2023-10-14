import React, { useEffect } from 'react';
import Header from '../../../components/Header';
import handleScene from './handleScene';
import { Link } from 'react-router-dom';
export default function ThreeJsSection() {
  const containerRef = React.useRef();
  const canvasRef = React.useRef();
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    handleScene(containerRef, canvasRef, setProgress);
  }, []);
  const infoList = [
    ['基于React的可复用个人网站', '基于Vue的文档管理系统（神舟软件实训）', '基于ThreeJS的简易模型展示', '基于ThreeJS着色器的可视化柏林噪声函数'],
    ['基于Unity开发的2D动作/跑酷游戏', '基于Java的多阶拼图游戏', '基于.NET的桌面图书管理系统'],
  ];
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

        <Header style={{ fontSize: '2.4rem' }}>其他作品</Header>
        <div style={{
          padding: '0 5rem',
          minHeight: '20rem',
        }}>
          <div className='small_title'>Web全栈</div>
          <ul>
            <li>游戏开发社团网站：可以上传文章、上传可在线运行游戏的交流网站</li>
            <li>基于和风天气Api的简易天气网站</li>
          </ul>
          <div className='small_title'>Web前端</div>
          <ul>
            {infoList[0].map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <div className='small_title'>其他</div>
          <ul>
            {infoList[1].map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <div className='small_title' style={{
            color:'var(--primary-color)'
          }}>
            <Link to='/article/work/index'
              target='_blank'>前往作品集→</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
