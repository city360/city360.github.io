import * as React from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {DDSLoader} from "three/examples/jsm/loaders/DDSLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {TransformControls} from "three/examples/jsm/controls/TransformControls";
const baseUrl = 'http://rcirkt0a3.hd-bkt.clouddn.com/'
let container;
const gltfloader = new GLTFLoader();
let camera, scene, renderer;

window.URL = window.URL || window.webkitURL || window.mozURL;
function hello(e) {
  const file = e.target.files[0];
  let url = URL.createObjectURL(file);
  console.log(url);
  gltfloader.load(url,(model)=>{
    console.log(model);
    scene.add(model.scene);
  })
}
/**
 * 这个manager看起来是可以复用的
 * @type {LoadingManager}
 */
const manager = new THREE.LoadingManager();
manager.addHandler(/\.dds$/i, new DDSLoader());

const grid = new THREE.GridHelper(5000, 30, 0xffffff, 0xffffff);
grid.material.opacity = 0.8;
grid.material.depthWrite = false;
grid.material.transparent = true;

/**
 * 一个mtl loader
 * @type {MTLLoader}
 */
const loader = new MTLLoader(manager);
container = document.createElement('div');


/**
 * 模型
 */
class UploadModel extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillUnmount() {
    console.log("调用了这个")
  }

  render() {
    return (
        <div>
          <input id="glbfileEle" type="file" onChange={(e)=>{hello(e)}} placeholder="please upload glb file" />
          <div id={"upload"} style={{height:800, width:700}}/>
        </div>
    )
  }


  /**
   * 进行模型的渲染
   */
  componentDidMount() {
    init();
  }
}//end of class


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
 * 初始化
 * @param model_path
 * @param model_name
 */
function init() {

  container = document.createElement('div');
  document.getElementById('upload').appendChild(container)
  camera = new THREE.PerspectiveCamera(450, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(40, 40, 60);

  // scene

  scene = new THREE.Scene();

  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 0.8);
  camera.add(pointLight);
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setClearColor('rgb(213,213,213)', 1.0);
  renderer.setSize(800,700)
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.outputEncoding = THREE.sRGBEncoding;
  scene.add(grid)

  container.appendChild(renderer.domElement);
  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.addEventListener('change', render); // use if there is no animation loop
  orbit.minDistance = 500;
  orbit.maxDistance = 10000;
  orbit.target.set(0, 0, 0);
  orbit.update();
  render();
}



function render() {

  camera.lookAt(scene.position);
  renderer.render(scene, camera);

}

export default UploadModel;
