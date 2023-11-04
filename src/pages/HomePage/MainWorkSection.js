import React from 'react';
import './MainWorkSection.scss';
import Header from '../../components/Header';
import {NavLink,Link} from 'react-router-dom';
function getImgObject(src = '', alt = '', position = [0, 0], size = [1, 1]) {
  return {
    src,
    alt,
    position,
    size,
  };
}
const imgObjectList = [
  getImgObject('./picture/natours.png', 'natours', [4, 6], [3, 3]),
  getImgObject('./picture/weily.png', 'weily特刊管理系统', [1, 1], [3, 4]),
  getImgObject('./picture/cfpp.png', '个人网页', [3, 2], [3, 4]),
  getImgObject('./picture/文档管理.png', '文档管理系统', [2, 4], [3, 4]),
  getImgObject('./picture/开发社团.png', '游戏开发社团网站', [1, 6], [3, 3]),
  getImgObject('./picture/unity.png', 'Unity-2D游戏', [6, 5], [3, 4]),
  getImgObject('./picture/交通系统.png', '智能交通系统', [6, 1], [3, 3]),
  getImgObject('./picture/perlin.png', 'perlin', [5, 3], [3, 4]),
];
const baseInfoList = [
  '熟练掌握JS，熟悉ES6+的特性、JS设计模式；接触过TS',
  '熟悉CSS3中的现代css属性；熟悉CSS模块化、预处理器Sass',
  '熟悉React18；接触过Vue2、Webpack5',
  '了解浏览器工作原理、前端性能优化、前端工程化等知识',
  '接触过ChartJS、PixiJS、ThreeJS等前端库',
  '了解NodeJS的基本使用，能够使用Express+MySQL开发后端服务',
  '有敏捷开发Web项目经验，有良好的团队协作能力',
];
const baseWorkList = [
  '大一：基于小熊派开发板的智能校园交通系统',
  '大二：雪原信息分析系统（就餐/社交推荐系统）',
];
export default function MainWorkSection() {
  return (
    <div className='MainWorkSection'>

      <Header line={true} style={{padding:'0 4rem'}}>个人情况</Header>
      <div className='MainWorkSection-container'>
        <div className='textContainer'>
          <Header style={{fontSize:'2.4rem'}}> 个人简介</Header>
          <div>
            <div>哈尔滨工业大学软件工程本科生，热爱前端开发，乐于学习实践Web前端技术</div>
            <ul > {baseInfoList.map((item, index) => (<li>{item}</li>))} </ul>
          </div>
          <Header style={{fontSize:'2.4rem'}} boxStyle={{marginTop:'1.6rem'}}>项目经历</Header>
          <div className='small_title'>正式项目</div>
          <ul> <li>大二~大三：Weily特刊管理系统。在HIT三十余人（前端十余人）的项目团队中，担任前端副组长</li>  </ul>
          <div className='small_title'>团队项目</div>
          <ul>
            {baseWorkList.map(item => (<li>{item}</li>))}
          </ul>
          <div className='small_title' style={{
            color:'var(--primary-color)'
          }}>
            <Link to='/article/work/index'
              target='_blank'>前往作品集→</Link>
          </div>
        </div>
        <div className='imageContainer'>
          {
            imgObjectList.map(item => (
              <div className='imgScaleContainer'
                style={{
                  gridArea: `${item.position[0]} / ${item.position[1]} / ${item.position[0] + item.size[0]} / ${item.position[1] + item.size[1]}`,
                  position: 'relative',
                }}
              >
                <img alt='img' src={item.src} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
