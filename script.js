// Basic Three.js Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xff0055, 1);
pointLight.position.set(10,10,10);
scene.add(pointLight);

// Dynamic Sphere (3D Motion)
const geometry = new THREE.SphereGeometry(2, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: 0xff0055,
  metalness: 0.5,
  roughness: 0.2
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 10;

// GSAP animation
gsap.to(sphere.rotation, { y: "+=6.28", repeat: -1, duration: 20, ease: "linear" });

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Resize handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
