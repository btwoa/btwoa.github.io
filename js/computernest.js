const loading = document.querySelector('#loader');
const canvas = document.querySelector('.webgl');
const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
if (window.innerWidth < window.innerHeight) {
  if (window.innerWidth < window.innerHeight / 2) {
    sizes.height = window.innerHeight / 3;
  } else {
    sizes.width = window.innerWidth / 1.5;
    sizes.height = window.innerHeight / 1.5;
  }
} else {
  if (window.innerWidth < window.innerHeight / 0.5) {
    sizes.width = window.innerWidth / 2;
    sizes.height = window.innerHeight / 2;
  } else {
    sizes.width = window.innerWidth / 4;
  }
}
const camera = new THREE.PerspectiveCamera(
  window.innerWidth < 1000 ? 20 : 15,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(8, 5, 15);
scene.add(camera);
const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = true;
controls.enablePan = true;
controls.minDistance = 21;
controls.maxDistance = 50;
controls.minPolarAngle = Math.PI / 5;
controls.maxPolarAngle = Math.PI / 2;
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding;
const bakedTexture = textureLoader.load(
  'https://assets.btwoa.com/baked.jpg'
);
bakedTexture.flipY = false;
bakedTexture.encoding = THREE.sRGBEncoding;
const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
const loader = new THREE.GLTFLoader();
loader.load(
  'https://assets.btwoa.com/model.glb',
  (gltf) => {
    const model = gltf.scene;
    model.traverse((child) => (child.material = bakedMaterial));
    scene.add(model);
    scene.position.set(0, 0.2, 0);
    loading.style.display = 'none';
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  }
);
window.addEventListener('resize', () => {
  if (window.innerWidth < window.innerHeight) {
    if (window.innerWidth < window.innerHeight / 2) {
      sizes.height = window.innerHeight / 3;
    } else {
      sizes.width = window.innerWidth / 1.5;
      sizes.height = window.innerHeight / 1.5;
    }
  } else {
    if (window.innerWidth < window.innerHeight / 0.5) {
      sizes.width = window.innerWidth / 2;
      sizes.height = window.innerHeight / 2;
    } else {
      sizes.width = window.innerWidth / 4;
    }
  }
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
const minPan = new THREE.Vector3(-2, -0.5, -2);
const maxPan = new THREE.Vector3(2, 0.5, 2);
const tick = () => {
  controls.update();
  controls.target.clamp(minPan, maxPan);
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();