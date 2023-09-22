import addRandomScaleAnimate from "../utils/addRandomScaleAnimate";
import addRoateAnimate from "../utils/addRoateAnimate";

function getAssetsObject(name, url, x, y, anchor) {
  return {
    name,
    url: url,
    x,
    y,
    anchor
  };
}
export default function getAssetsList(app) {
  return [
    //bg
    {
      name: 'bg',
      url: './assets/bg.jpg',
      x: 0,
      y: 200,
    },
    //黄色和白色太阳
    {
      name: 'whiteSun',
      url: './assets/white_sun.svg',
      x: 75,
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
      name: 'fish_group_1_2',
      url: './assets/fish_group_1.png',
      x: 166,
      y: 135,
      afterFunction: (sprite) => {
        addRoateAnimate(sprite, app, -0.002);
      }
    },
    {
      name: 'fish_group_2',
      url: './assets/fish_group_2.png',
      x: 143,
      y: 117,
      afterFunction: (sprite) => {
        addRoateAnimate(sprite, app, -0.0020);
      }
    },
    {
      name: 'fish_group_2_2',
      url: './assets/fish_group_2.png',
      x: 150,
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
    {
      name: 'fish_group_3_2',
      url: './assets/fish_group_3.png',
      x: 260,
      y: 153,
      afterFunction: (sprite) => {
        addRoateAnimate(sprite, app, -0.0010);
      }
    },
    {
      name: 'fishes_mini',
      url: './assets/fishes_mini.png',
      x: 626,
      y: 853,
      afterFunction: (sprite) => {
        addRoateAnimate(sprite, app, -0.001);
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
        addRandomScaleAnimate(sprite, app, 0.0007, 18, 0.00008, 0.015);
      }
    },
    {
      name: 'cloud_2',
      url: './assets/cloud_2.png',//小
      x: 408,
      y: 880,
      afterFunction: (sprite) => {
        addRandomScaleAnimate(sprite, app, 0.0007, 20, 0.0011, 0.1);
      }
    },
    {
      name: 'cloud_1',
      url: './assets/cloud_1.png',//左边
      x: 0,
      y: 700,
      afterFunction: (sprite) => {
        addRandomScaleAnimate(sprite, app, 0.001, 20, 0.0002, 0.05);
      }
    },
    {
      name: 'cloud_4',
      url: './assets/cloud_4.png',//中大
      x: 254,
      y: 503,
      afterFunction: (sprite) => {
        addRandomScaleAnimate(sprite, app, 0.0009, 20, 0.0003, 0.05);
      }
    },
    {
      name: 'cloud_5',
      url: './assets/cloud_5.png',
      x: 300,
      y: 700,
      afterFunction: (sprite) => {
        addRandomScaleAnimate(sprite, app, 0.0009, 20, 0.0003, 0.05);
      }
    },
    {
      name: 'cloud_6',
      url: './assets/cloud_6.png',
      x: 900,
      y: 500,
      afterFunction: (sprite) => {
        addRandomScaleAnimate(sprite, app, 0.0009, 20, 0.0003, 0.05);
      }
    },
    {
      name: 'cloudy',
      url: './assets/cloudy.png',
      x: -8,
      y: 468,
      afterFunction: (sprite) => {
        addRandomScaleAnimate(sprite, app, 0.001, 60, 0.0002, 0.05);
      }
    },
    {
      name: 'cloudy_2',
      url: './assets/cloudy_2.png',
      x: 0,
      y: 400,
      afterFunction: (sprite) => {
        addRandomScaleAnimate(sprite, app, 0.001, 60, 0.0002, 0.05);
      }

    },

    //陆地
    {
      name: 'land_l',
      url: './assets/land_l.png',
      x: 0,
      y: 795,
      container:'frontContainer',
    },
    {
      name: 'land_r',
      url: './assets/land_r.png',
      x: 1080,
      y: 852,
      container:'frontContainer',
    },


  ];
}