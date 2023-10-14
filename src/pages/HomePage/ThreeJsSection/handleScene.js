import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'lil-gui';
import addDebugFolder from './utils/addDebugFolder';
import updateAllMaterials from './utils/updateAllMaterials';

import Stats from 'three/examples/jsm/libs/stats.module.js';
export default function handleScene(containerRef, canvasRef,setProgress) {
  const size = {
    width: 1440,
    height: 920,
  };
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, size.width / size.height, 0.1, 1000);
  camera.position.set(-2.2, 1.7, -3);
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.current,
    shadowMap: true,
    alpha: true,
    //抗锯齿
    antialias: true,
  });
  //开启阴影
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;

  // renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
  renderer.setSize(size.width, size.height);
  // canvasRef.current.appendChild(renderer.domElement);

  const axesHelper = new THREE.AxesHelper(5);
  // scene.add(axesHelper);

  //加载glb文件
  const loader = new GLTFLoader();
  loader.load(
    './assets/country.glb',
    (glb) => {
      console.log('加载成功');
      scene.add(glb.scene);
      console.log(glb.scene);
      updateAllMaterials(scene);
      renderer.render(scene, camera);
      setProgress(1);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      setProgress(xhr.loaded / xhr.total);
    },
    (error) => {
      console.log('加载失败');
    }
  );

  //debugGUI
  const debug = false;
  const gui = debug ? new GUI() : {
    addFolder: () => ({
      open: () => { },
      add: () => { },
      addFolder: () => ({
        open: () => { },
        add: () => { },
      }),
    })
  };
  // const stats = new Stats();
  // containerRef.current.appendChild(stats.dom);
  // stats.dom.style.position = 'absolute';
  // stats.showPanel(1);

  //camera
  addDebugFolder(scene, gui, camera);
  //添加光源

  //环境光
  const ambient = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambient);
  addDebugFolder(scene, gui, ambient);

  //半球光
  const hemisphereLight = new THREE.HemisphereLight(0x0000ff, 0xff0000, 0.2);
  hemisphereLight.position.set(0.6, 1.2, 3);
  scene.add(hemisphereLight);
  addDebugFolder(scene, gui, hemisphereLight);

  //平行光
  const directionalLight = new THREE.DirectionalLight(0xccffee, 0.4);
  directionalLight.position.set(1.2, 2.3, 2.1);
  scene.add(directionalLight);
  directionalLight.castShadow = true;
  addDebugFolder(scene, gui, directionalLight);

  directionalLight.lookAt(0, 0, 0);

  //点光源
  const pointLight = new THREE.PointLight(0xffeebb, 0.7);
  pointLight.position.set(-0.1, 0.7, -0.3);
  // pointLight.castShadow = true;
  scene.add(pointLight);

  //添加轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  //只允许水平旋转
  controls.maxPolarAngle = Math.PI * 2 / 5;
  controls.minPolarAngle = Math.PI * 1 / 5;
  //禁止缩放
  controls.enableZoom = false;
  //触发绘制
  controls.addEventListener('change', () => {
    renderer.render(scene, camera);
    // stats.update();
  });





  // const animate = function () {

  //   directionalLight.lookAt(0, 0, 0);
  //   controls.update();
  //   renderer.render(scene, camera);
  //   requestAnimationFrame(animate);

  // };
  // animate();
  renderer.render(scene, camera);
};