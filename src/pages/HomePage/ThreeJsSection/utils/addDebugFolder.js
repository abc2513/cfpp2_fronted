import * as THREE from 'three';
export default function (scene, gui, object, config = {}) {
  const folder = gui.addFolder(config.name || object.type);
  folder.open();
  if (object.position) {
    const positionFolder = folder.addFolder('position');
    positionFolder.add(object.position, 'x', -3, 3);
    positionFolder.add(object.position, 'y', -3, 3);
    positionFolder.add(object.position, 'z', -3, 3);
    positionFolder.open();
  }
  if(config.rotation){
    const rotationFolder = folder.addFolder('rotation');
    rotationFolder.add(object.rotation, 'x', -3, 3);
    rotationFolder.add(object.rotation, 'y', -3, 3);
    rotationFolder.add(object.rotation, 'z', -3, 3);
    rotationFolder.open();
  }
  //light
  if(object.type.includes('Light')){
    const lightFolder = folder.addFolder('Light');
    lightFolder.add(object, 'intensity', 0, 2);
    lightFolder.open();

  
  }
  //lightHelper
  // if(object.type==='DirectionalLight'){
  //   const lightHelper = new THREE.DirectionalLightHelper(object, 5);
  //   scene.add(lightHelper);
  //   folder.add(lightHelper, 'visible').name('lightHelper');
  // }
  // if(object.type==='PointLight'){
  //   const lightHelper = new THREE.PointLightHelper(object, 5);
  //   scene.add(lightHelper);
  //   folder.add(lightHelper, 'visible').name('lightHelper');
  // }
  // if(object.type==='SpotLight'){
  //   const lightHelper = new THREE.SpotLightHelper(object, 5);
  //   scene.add(lightHelper);
  //   folder.add(lightHelper, 'visible').name('lightHelper');
  // }
  // if(object.type==='HemisphereLight'){
  //   const lightHelper = new THREE.HemisphereLightHelper(object, 5);
  //   scene.add(lightHelper);
  //   folder.add(lightHelper, 'visible').name('lightHelper');
  // }


}