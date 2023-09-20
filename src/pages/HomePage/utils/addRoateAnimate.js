export default function addRoateAnimate(sprite,app,rate=0.0012) {
  //旋转动画
  sprite.anchor.set(0.5);
  sprite.x+=sprite.width/2;
  sprite.y+=sprite.height/2;
  app.ticker.add(() => {
    sprite.rotation +=rate;
  });
}