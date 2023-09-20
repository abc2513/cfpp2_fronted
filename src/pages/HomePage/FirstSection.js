import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import * as filters from 'pixi-filters';
import addRandomScaleAnimate from './utils/addRandomScaleAnimate';
import addRoateAnimate from './utils/addRoateAnimate';

const app = new PIXI.Application({
  width: 1440,
  height: window.innerHeight,
  backgroundColor: 0xAAD6FA,
  forceFXAA: true,//防锯齿
  resolution: window.devicePixelRatio || 1,

});
const container = new PIXI.Container();
app.stage.addChild(container);

container.y = -170;

//创造一个渐变颜色图案的背景



//使用pixi-filters的反射滤镜
const reflectionFilter = new filters.ReflectionFilter({
  mirror: true,
  animating: true,
  boundary: 0.9,
  amplitude: [0, 20],
  waveLength: [70, 100],
  alpha: [0.4, 0.9],
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
      addRoateAnimate(sprite, app, 0.002);
      addRandomScaleAnimate(sprite, app, 0.0003, 0, 0.0001, 0.012);
    },
  },
  {
    name: 'yellowSun',
    url: './assets/yellow_sun.svg',
    x: 877,
    y: -13 + 50,
    afterFunction: (sprite) => {
      //使svg内id为small_sun的元素旋转
      console.log(sprite);
    }
  },
  {
    name: 'largeCircle',
    url: './assets/circle_large.svg',
    x: 409,
    y: -107 + 50,
    afterFunction: (sprite) => {
      addRoateAnimate(sprite, app, 0.0012);

    },
  },
  {
    name: 'smallCircle',
    url: './assets/circle_small.svg',
    x: 1128,
    y: 62 + 50,
    afterFunction: (sprite) => {
      addRoateAnimate(sprite, app, 0.01);

    },
  },

  //鱼群
  {
    name: 'fish_group_1',
    url: './assets/fish_group_1.png',
    x: 176,
    y: 135,
    afterFunction: (sprite) => {
      addRoateAnimate(sprite, app, -0.001);
    }
  },
  {
    name: 'fish_group_2',
    url: './assets/fish_group_2.png',
    x: 143,
    y: 117,
    afterFunction: (sprite) => {
      addRoateAnimate(sprite, app, -0.0015);
    }
  },
  {
    name: 'fish_group_3',
    url: './assets/fish_group_3.png',
    x: 275,
    y: 153,
    afterFunction: (sprite) => {
      addRoateAnimate(sprite, app, -0.0019);
    }
  },

  //山
  getAssetsObject('mountain_0', './assets/mountain_0.png', 0, 720, 0),
  getAssetsObject('mountain_1', './assets/mountain_1.png', 823, 749, 0),

  //云朵

  {
    name: 'cloud_3',
    url: './assets/cloud_3.png',//右边、长
    x: 1010,
    y: 680,
    afterFunction: (sprite) => {
      addRandomScaleAnimate(sprite, app, 0.0003, 8, 0.00003, 0.007);
    }
  },
  {
    name: 'cloud_2',
    url: './assets/cloud_2.png',//小
    x: 408,
    y: 880,
    afterFunction: (sprite) => {
      addRandomScaleAnimate(sprite, app, 0.0006, 13, 0.0004, 0.09);
    }
  },
  {
    name: 'cloud_1',
    url: './assets/cloud_1.png',//左边
    x: 0,
    y: 700,
    afterFunction: (sprite) => {
      addRandomScaleAnimate(sprite, app, 0.0002, 10, 0.00009, 0.05);
    }
  },
  {
    name: 'cloud_4',
    url: './assets/cloud_4.png',//水面上中间
    x: 524,
    y: 893,
    afterFunction: (sprite) => {
      addRandomScaleAnimate(sprite, app, 0.0003, 10, 0.0003, 0.05);
    }

  },



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
      if (item.afterFunction) {
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
    sectionRef.current ?? app.renderer.resize(sectionRef.current.clientWidth, sectionRef.current.clientHeight);
  }, [sectionRef.current?.clientWidth, sectionRef.current?.clientHeight]);

  return (
    <div ref={sectionRef} className='firstSection'></div>
  );
}
