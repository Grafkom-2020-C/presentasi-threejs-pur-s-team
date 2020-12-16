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

var dl = new THREE.DirectionalLight(
    { color: 0xFFFFFF, intensity: 100 }
);
dl.position.set(0,1,0);
dl.castShadow = true;
scene.add(dl);

var aL = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(aL);


//Grid helper
// let gr = new THREE.GridHelper(100, 20, 0xfafafa, 0xfafafa);
// gr.position.set(0, -0.5, 0);
// scene.add(gr);

//Sphere
let pGeo = new THREE.SphereGeometry(3,30,30);

//Bentuk hujan 
// let kTitik = [];
// let jlm = 100;

// let pGeo = new THREE.Geometry();

// for (var i=0; i<jlm; i++){
//     for (var j=0; j<jlm; j++){
//         // for (var k=0; k<jlm; k++){                                                                                      //untuk membuat bentuk segi4
//         const titik = {
//             // posisi : new THREE.Vector3(Math.random()*(i-jlm/2),Math.random()*(k-jlm/2),Math.random()*(j-jlm/2)),         //untuk membuat bentuk segi4
//             posisi : new THREE.Vector3(i-jlm/2,30,j-jlm/2),
//             velocity : new THREE.Vector3(0,-Math.random()*0.2,0)
//         };
//         kTitik.push(titik);
//         pGeo.vertices.push(titik.posisi);
//         // }
//     }
// }

//Texture
// let texture = new THREE.TextureLoader().load('assets/raindrop-3.png');

//Point Particles
let pMat = new THREE.PointsMaterial({
    size : 0.3,
    color: 0x56FA2C
    
    //Untuk texture
    // map: texture,
    // transparent: true,
    // depthTest: false
});
let partikel = new THREE.Points(pGeo,pMat);
scene.add(partikel);

//Orbit Controls
let controls = new THREE.OrbitControls(camera, renderer.domElement);

//Resize
window.addEventListener('resize', function(){
    renderer.setSize(this.window.innerWidth, this.window.innerHeight);
    camera.aspect = this.window.innerWidth/this.window.innerHeight;
    camera.updateProjectionMatrix();
})

//Draw Scene
function drawScene(){

    partikel.rotation.x +=0.01;
    partikel.rotation.y +=0.01;
    partikel.rotation.z +=0.01;
    // partikel.position.y +=0.01;
    
    //Efek gerak hujan
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
