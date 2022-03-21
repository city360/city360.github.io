import React from "react";
import * as THREE from 'three';

import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {DDSLoader} from "three/examples/jsm/loaders/DDSLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

let container;

let camera, scene, renderer;

let mouseX = 0, mouseY = 0;

let object;
let rayCaster = new THREE.Raycaster();


/**
 * 模型
 */
class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {model_path: props.model_path, model_name: props.model_name}
  }

  render() {
    return (
        <div id={"model"}/>
    )
  }

  /**
   * 进行模型的渲染
   */
  componentDidMount() {
    init(this.state.model_path, this.state.model_name);
    animate()
  }
}

function init(model_path, model_name) {

  container = document.createElement('div');
  document.getElementById('model').appendChild(container);

  camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(40, 40, 60);

  // scene

  scene = new THREE.Scene();

  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 0.8);
  camera.add(pointLight);
  scene.add(camera);

  // models

  function onProgress(xhr) {

    if (xhr.lengthComputable) {

      const percentComplete = xhr.loaded / xhr.total * 100;
      console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');

    }

  }

  function onError() {
  }

  /**
   * 这个manager看起来是可以复用的
   * @type {LoadingManager}
   */
  const manager = new THREE.LoadingManager();
  manager.addHandler(/\.dds$/i, new DDSLoader());

  /**
   * 下面这一段很重要，第100行代码可以直接在场景当中加入这个模型
   * @type {MTLLoader}
   */
  const loader = new MTLLoader(manager);
  loader.setPath(model_path);
  loader.load(model_name + '.mtl', (materials) => {
    materials.preload();
    const objLoader = new OBJLoader(manager);
    objLoader.setMaterials(materials);
    objLoader.setPath(model_path);
    objLoader.load(model_name + '.obj', (object) => {
      object.position.y = 0;
      object.position.x = 0;
      object.position.z = 0;
      scene.add(object);
    }, onProgress, onError)
  })

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setClearColor('rgb(213,213,213)', 1.0);
  renderer.setSize(document.getElementById("model-box").offsetWidth, document.getElementById("model-box").offsetWidth*0.7)
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  const grid = new THREE.GridHelper(5000, 30, 0xffffff, 0xffffff);
  grid.material.opacity = 0.8;
  grid.material.depthWrite = false;
  grid.material.transparent = true;
  scene.add(grid)


  container.appendChild(renderer.domElement);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render); // use if there is no animation loop
  controls.minDistance = 400;
  controls.maxDistance = 10000;
  controls.target.set(0, 0, 0);
  controls.update();

  window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  console.log(document.getElementById("model-box").offsetWidth)
  renderer.setSize(document.getElementById("model-box").offsetWidth, document.getElementById("model-box").offsetWidth*0.75)
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {

  camera.lookAt(scene.position);

  renderer.render(scene, camera);

}

export default Model;
