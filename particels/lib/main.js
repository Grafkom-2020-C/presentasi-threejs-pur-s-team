var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    45,
    innerWidth / innerHeight,
    1,
    1000
);
var renderer = new THREE.WebGLRenderer(
    { antialias: true }
);

renderer.setSize(innerWidth,innerHeight);
camera.position.z = 10;
camera.position.y = 5;

document.body.appendChild(renderer.domElement);

var directionalLight = new THREE.DirectionalLight(
    { color: 0xFFFFFF, intensity: 100 }
);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);

var ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

// let cubeMesh = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshPhongMaterial( { color: 0xff0000 })
// );
// scene.add(cubeMesh);

// let gr = new THREE.GridHelper(100, 20, 0xfafafa, 0xfafafa);
// gr.position.set(0, -0.5, 0);
// scene.add(gr);

let pGeo = new THREE.SphereGeometry(3,30,30);
// let kTitik = [];
// let jlm = 100;

// let pGeo = new THREE.Geometry();

// for (var i=0; i<jlm; i++){
//     for (var j=0; j<jlm; j++){
//         // for (var k=0; k<jlm; k++){
//         const titik = {
//             // posisi : new THREE.Vector3(Math.random()*(i-jlm/2),Math.random()*(k-jlm/2),Math.random()*(j-jlm/2)),
//             posisi : new THREE.Vector3(i-jlm/2,30,j-jlm/2),
//             velocity : new THREE.Vector3(0,-Math.random()*0.2,0)
//         };
//         kTitik.push(titik);
//         pGeo.vertices.push(titik.posisi);
//         // }
//     }
// }


let pMat = new THREE.PointsMaterial({
    size : 0.3,
    color: 0x56FA2C
});
let partikel = new THREE.Points(pGeo,pMat);
scene.add(partikel);

let controls = new THREE.OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', function(){
    renderer.setSize(this.window.innerWidth, this.window.innerHeight);
    camera.aspect = this.window.innerWidth/this.window.innerHeight;
    camera.updateProjectionMatrix();
})
function drawScene(){

    partikel.rotation.x +=0.01;
    partikel.rotation.y +=0.01;
    partikel.rotation.z +=0.01;
    // partikel.position.y +=0.01;
    
    // kTitik.forEach( (titik)=>{
    //     if (titik.posisi.y <0){
    //         titik.posisi.y = 30;
    //     }
    //     titik.posisi.add(titik.velocity)
    // });
    // partikel.geometry.verticesNeedUpdate = true;
    renderer.render(scene,camera);
    requestAnimationFrame(drawScene);
}

drawScene();