import scene from "./scene";
import camera from "./camera";
import mesh from "./mesh";
import Renderer from "./renderer";
import Utils from "./utils";

scene.add(mesh);

const renderer = new Renderer(scene, camera);

renderer.animation(() => {
  renderer.render(scene, camera);
});

new Utils({
  scene,
  camera,
  renderer,
});
