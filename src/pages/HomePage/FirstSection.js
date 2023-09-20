import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import * as filters from 'pixi-filters';

const app = new PIXI.Application({
  width: 1440,
  height: window.innerHeight,
  backgroundColor: 0xAAD6FA,
  forceFXAA: true,//防锯齿
  resolution: window.devicePixelRatio || 1,

});
const container = new PIXI.Container();
app.stage.addChild(container);

container.y=-170;

//创造一个渐变颜色图案的背景



//使用pixi-filters的反射滤镜
const reflectionFilter = new filters.ReflectionFilter({
  mirror: true,
  animating: true,
  boundary: 0.9,
  amplitude: [0,20],
  waveLength: [60,100],
  alpha: [0.4,0.9],
});
app.stage.filters = [reflectionFilter];
//开启反射滤镜动画
app.ticker.add(() => {
  reflectionFilter.time += 0.018;
});


//资源加载
function getAssetsObject(name, url, x, y, anchor) {
  return {
    name,
    url: url,
    x,
    y,
    anchor
  };
}
const assetsList = [
  //黄色和白色太阳
  {
    name: 'whiteSun',
    url: './assets/white_sun.svg',
    x: 105,
    y: 10,
    afterFunction: (sprite) => {
      //旋转动画
      sprite.anchor.set(0.5);
      sprite.x+=sprite.width/2;
      sprite.y+=sprite.height/2;
      app.ticker.add(() => {
        sprite.rotation += 0.0012;
      });

    },
  },
  {
    name: 'yellowSun',
    url: './assets/yellow_sun.svg',
    x: 409,
    y: -1,
  },

  
  //山
  getAssetsObject('mountain_0', './assets/mountain_0.png',0,720,0),
  getAssetsObject('mountain_1', './assets/mountain_1.png',823,749,0),
  
  //云朵
  getAssetsObject('cloud_0', './assets/cloud_0.png',0, 552,0),
  getAssetsObject('cloud_1', './assets/cloud_3.png', 1000,654,0),
  getAssetsObject('cloud_2', './assets/cloud_2.png', 428,880,0),
  getAssetsObject('cloud_3', './assets/cloud_1.png',118,772,0),
  getAssetsObject('cloud_4', './assets/cloud_4.png', 524,903,0),


];
assetsList.forEach((item) => {
  PIXI.Assets.add(item.name, item.url);
});

const sprintList = [];
PIXI.Assets.load(
  assetsList.map((item) => item.name),
  progress => { console.log(progress); }
)
  .then((resources) => {
    assetsList.forEach((item) => {
      const sprite = new PIXI.Sprite(resources[item.name]);
      // sprite.anchor.set(item.anchor || 0.5);
      sprite.x = item.x;
      sprite.y = item.y;
      sprintList.push(sprite);
      container.addChild(sprite);
      if(item.afterFunction){
        item.afterFunction(sprite);
      }
    });
  });



export default function FirstSection() {
  const sectionRef = useRef();

  useEffect(() => {
    //清除上一次的canvas
    sectionRef.current.innerHTML = '';
    sectionRef.current.appendChild(app.view);
  }, []);
  //firstSection宽高变化时，canvas宽高也变化
  useEffect(() => {
    sectionRef.current??app.renderer.resize(sectionRef.current.clientWidth, sectionRef.current.clientHeight);
  }, [sectionRef.current?.clientWidth, sectionRef.current?.clientHeight]);
  
  return (
    <div ref={sectionRef} className='firstSection'></div>
  );
}
