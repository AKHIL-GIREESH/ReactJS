import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import * as THREE from "three"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild( renderer.domElement );



const boxGeometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshPhongMaterial({ color : "#fff"})
const mesh = new THREE.Mesh(boxGeometry,material)

const light = new THREE.DirectionalLight("#fff",1)
light.position.set(0,0,5)

//console.log(scene,camera,renderer,boxGeometry,material,mesh)

scene.add(mesh).add(light)

camera.position.z = 5
renderer.render(scene,camera)

const animate = () => {
  requestAnimationFrame(animate)
  renderer.render(scene,camera)
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01
}

//animate()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
