import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const gltfloader = new GLTFLoader().setPath('./models/');
var patternModel = await gltfloader.loadAsync('pattern2.glb');
var model = patternModel.scene.children[0];
model.scale.set(2, 2, 25);
model.position.set(0, 0, -3)
model.rotation.set(Math.PI / 2, Math.PI / 2, 0);
scene.add(model);

const light = new THREE.AmbientLight("#ffffff", 3);
scene.add(light);

const gm = new THREE.PlaneGeometry(1, 1);
const map1 = new THREE.TextureLoader().load('pattern 2.png');
const spriteMat1 = new THREE.MeshBasicMaterial({ map: map1, color: "#ffffff" });
const sprite1 = new THREE.Mesh(gm, spriteMat1);
sprite1.scale.set(99, 3.2, 1);
sprite1.position.set(8.2, 4.2, 0);
scene.add(sprite1);

const loader = new GLTFLoader();
let mixer;
var sphere;
loader.load("models/globe.glb", (gltf) => {
    sphere = gltf.scene;
    mixer = new THREE.AnimationMixer(sphere);
    gltf.animations.forEach((animation) => {
        const action = mixer.clipAction(animation);
        action.play();

    });
    sphere.scale.set(1,1,1);
    scene.add(sphere);
});

scene.background = new THREE.Color("#000000");

camera.position.set(0, 2, 5);
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.0003;
    if (model.position.x <= 21.9) {
        model.position.x += 0.01;
    }
    else {
        model.position.x = 0;
    }
    if (mixer)
        mixer.update(clock.getDelta());
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / this.window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})