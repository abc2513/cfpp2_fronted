
import * as PIXI from 'pixi.js';
import * as filters from 'pixi-filters';
import getAssetsList from './getAssetsList';
import { setFirstSectionLoadProgress } from '../../../../actions/userAction';
export default function getFirstSectionCanvasApp(dispatch) {
  const app = new PIXI.Application({
    width: 1440,
    height: 920,
    backgroundColor: 0xAAD6FA,
    forceFXAA: true,//防锯齿
    resolution: window.devicePixelRatio || 1,

  });
  const container = new PIXI.Container();
  const filterContainer = new PIXI.Container();
  const frontContainer = new PIXI.Container();
  app.stage.addChild(frontContainer);
  frontContainer.addChild(filterContainer);
  filterContainer.addChild(container);
  const containers = {
    container,
    filterContainer,
    frontContainer,

  };

  container.y = -205;



  //使用pixi-filters的反射滤镜
  const reflectionFilter = new filters.ReflectionFilter({
    mirror: true,
    animating: true,
    boundary: 0.85,//反射边界
    amplitude: [10, 20],//振幅
    waveLength: [70, 80],//波长
    alpha: [0.4, 1],//透明度
  });

  //使用pixi/filter-glow
  const glowFilter = new filters.GlowFilter({//不知道为啥用了这个滤镜很卡
    // color: 0x00a1d6,
    quality: 1,
    animating: true,
    gain: 0.4,
    angle: 23,
    alpha: 1,
    lacuarity: 5,
  });
  //AdvancedBloomFilter
  const bloomFilter = new filters.AdvancedBloomFilter({
    threshold: 0.1,
    bloomScale: 1,
    brightness: 0.01,
    blur: 1,
  });

  //开启滤镜动画
  app.ticker.add(() => {
    reflectionFilter.time += 0.018;
    // glowFilter.time += 0.018;
  });
  filterContainer.filters = [
    // glowFilter,
    reflectionFilter,
    // bloomFilter,
  ];
  frontContainer.filters = [
    // glowFilter,
  ];


  //资源加载


  const assetsList = getAssetsList(app);

  assetsList.forEach((item) => {
    PIXI.Assets.add(item.name, item.url);
  });

  const sprintList = [];
  PIXI.Assets.load(
    assetsList.map((item) => item.name),
    progress => {
      dispatch(setFirstSectionLoadProgress(progress));
    }
  )
    .then((resources) => {
      assetsList.forEach((item) => {
        const sprite = new PIXI.Sprite(resources[item.name]);
        // sprite.anchor.set(item.anchor || 0.5);
        sprite.x = item.x;
        sprite.y = item.y;
        sprintList.push(sprite);
        if (item.container) {
          containers[item.container].addChild(sprite);
        }
        else {
          container.addChild(sprite);
        }
        if (item.afterFunction) {
          item.afterFunction(sprite);
        }
      });
    });
  return app;
}

