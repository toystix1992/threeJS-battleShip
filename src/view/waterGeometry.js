import {PlaneGeometry, Vector2} from 'three';
import { Water } from 'three/examples/jsm/objects/Water2';

const params = {
    color: '#9096df',
    scale: 4,
    flowX: 1,
    flowY: 1
};

const waterGeometry = new PlaneGeometry(20, 20);
const water = new Water(waterGeometry, {
    color: params.color,
    scale: params.scale,
    flowDirection: new Vector2(params.flowX, params.flowY),
    textureWidth: 1024,
    textureHeight: 1024
});
water.position.y = 1;
water.rotation.x = Math.PI * - 0.5;

export default water;
