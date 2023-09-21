export default function addRandomScaleAnimate(sprite, app, xRate = 0.0005, xRange = 20, scaleRate = 0.0005, scaleRange = 0.05) {

  //记录原始位置
  sprite.originX = sprite.x;
  sprite.originY = sprite.y;

  //随机生成初始相位
  const randomPhase = Math.random() * Math.PI * 2;

  app.ticker.add(() => {
    //简谐振动
    sprite.x = sprite.originX + xRange * Math.sin(xRate * app.ticker.lastTime + randomPhase);
    sprite.scale.x += scaleRate;
    sprite.scale.y += scaleRate;
    if (sprite.scale.x > 1 + scaleRange || sprite.scale.x < 1 - scaleRange) {
      scaleRate = -scaleRate;
    }
    // if(sprite.x>sprite.originX+xRange||sprite.x<sprite.originX-xRange){
    //     xRate=-xRate;
    // }
  });
}