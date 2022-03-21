import React from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SelectVariants from "./SelectVariants";
// import {Button, Container} from "@mui/material";
import {Paper} from "@mui/material";
import * as THREE from 'three';
import {alpha, styled} from "@mui/material/styles";
import {AppBar, Button, Container, Toolbar} from "@mui/material";

import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {DDSLoader} from "three/examples/jsm/loaders/DDSLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import ImgMediaCard from "./ImgMediaCard";
import StandardImageList from "./StandardImageList";
import CardList from "./CardList";
import BackToTop from "./model-lib/BackToTop";
// import {alpha, styled} from "@mui/material/styles";

let container;

let camera, scene, renderer;

let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let object;
let rayCaster = new THREE.Raycaster();

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

  const manager = new THREE.LoadingManager();
  manager.addHandler(/\.dds$/i, new DDSLoader());

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
  renderer.setSize(document.getElementById("model-box").offsetWidth, document.getElementById("model-box").offsetWidth*0.75)
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
  controls.minDistance = 600;
  controls.maxDistance = 10000;
  controls.target.set(0, 0, 0);
  controls.update();

  window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  console.log(document.getElementById("model-box").offsetWidth)
  // renderer.setSize(window.innerWidth * 5 / 8, window.innerHeight * 3 / 4);
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


const MyButton = styled(Button)(({theme}) => ({
  // position: 'relative',
  float:'right',
  // position:''
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.68),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.86),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(25),
    width: 'auto',
  },
}));
class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {model_path: props.model_path, model_name: props.model_name}
  }

  render() {
    return (
        <Container>
          <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  maxWidth:700,
                  maxHeight:900,
                },
              }}
          >
            <Paper id={"model-paper"} elevation={3} sx={{borderRadius:5}} >
                <Box id={"model-box"} sx={{ display: 'flex', alignItems: 'flex-end' ,padding:'15px 20px'}}>
                  <ModeEditIcon sx={{ color: 'action.active', mr: 1, my: 0.5 , display:'flex'}} />
                  <Typography
                      variant="h5"
                      noWrap
                      component="div"
                      sx={{mr: 2, display:'flex'}}
                  >
                    模型编辑器
                  </Typography>
                  <SelectVariants minWidth={240}/>
                  <Button variant="contained" size="large" sx={{margin:'0 0 10px 10px', display:'flex'}}>保存</Button>
                </Box>
                <div id="model">
                </div>
            </Paper>
            <Paper elevation={3} sx={{borderRadius:5}}>
              <Box id={"model-lib"} sx={{ display: 'flex', alignItems: 'flex-end' ,padding:'15px 20px'}}>
                <SelectVariants minWidth={160}/>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{mr: 2, display:'flex'}}
                >
                  模型库
                </Typography>
              </Box>
              <Container sx={{overflow:'hidden'}}>
                <CardList/>
              </Container>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display:'flex',margin:'5px 10px'}}
                    >
                      总造价: 2000rmb
                      <Button variant={"outlined"} size={"medium"} style={{color:'#8d6e63', border:'1px solid #8d6e63', marginLeft:100}}>置入</Button>
                    </Typography>
            </Paper>
          </Box>
        </Container>
       )
  }

  componentDidMount() {
    init(this.state.model_path, this.state.model_name);
    animate()
  }
}

export default Model;
