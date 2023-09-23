import { useEffect, useRef } from 'react';
import LoadProgress from './LoadProgress';
import { useDispatch, useSelector } from 'react-redux';
import getFirstSectionCanvasApp from './constant/getFirstSectionCanvasApp';


export default function FirstSection() {
  const canvasContainerRef = useRef();
  const dispatch = useDispatch();
  const { firstSectionLoadProgress } = useSelector(state => state.userStage);
  useEffect(() => {
    const app = getFirstSectionCanvasApp(dispatch);
    //清除上一次的canvas
    canvasContainerRef.current.childNodes.forEach((item) => {
      if (item.tagName === 'CANVAS') {
        canvasContainerRef.current.removeChild(item);
      }
    });
    canvasContainerRef.current.appendChild(app.view);
  }, []);
  //不知道为啥，不加这段代码，只用css控制canvas宽高，内部的内容能正常显示
  //firstSection宽高变化时，canvas宽高也变化
  // useEffect(() => {
  //   canvasContainerRef.current ?? app.renderer.resize(canvasContainerRef.current.clientWidth, canvasContainerRef.current.clientHeight);
  // }, [canvasContainerRef.current?.clientWidth, canvasContainerRef.current?.clientHeight]);

  return (
    <div className='firstSection'
    >
      <div className='firstSection-canvasContainer' ref={canvasContainerRef}
        style={{
          opacity: firstSectionLoadProgress === 1 ? 1 : 0,
          transition: 'opacity 2s',
        }}>

      </div>
      <div className='firstSection-container'>
        <div
          style={{ fontSize: '3rem', }}>
          学
          <span style={{ fontSize: '6rem' }}>Web</span>
          前端的
          <span style={{ fontSize: '4rem' }}>小陈</span>
        </div>
        <div style={{}}>
          长风破浪会有时，直挂云帆济沧海
        </div>
        <div style={{ fontSize: '1.4rem', color: '#555' }}>
          陈帆 
          
          Email:******@qq.com WeChat:********
          {/* Email:2513151911@qq.com WeChat:SailingNorth */}
        </div>
        <div style={{ fontSize: '1.4rem', color: '#555' }}>
          GitHub: <a href='https://github.com/abc2513'>https://github.com/abc2513</a>
        </div>
        <LoadProgress progress={firstSectionLoadProgress} />
      </div>
    </div>
  );
}
