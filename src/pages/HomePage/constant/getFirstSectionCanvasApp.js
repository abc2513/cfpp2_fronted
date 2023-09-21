
import * as PIXI from 'pixi.js';
import * as filters from 'pixi-filters';
import getAssetsList from './getAssetsList';
import { setFirstSectionLoadProgress } from '../../../actions/userAction';
export default function getFirstSectionCanvasApp(dispatch) {
  const app = new PIXI.Application({
    width: 1440,
    height: window.innerHeight,
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
    boundary: 0.85,
    amplitude: [0, 20],
    waveLength: [70, 80],
    alpha: [0.3, 0.9],
  });
  filterContainer.filters = [reflectionFilter];
  //开启反射滤镜动画
  app.ticker.add(() => {
    reflectionFilter.time += 0.018;
  });


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

