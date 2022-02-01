import setedShipsPos from '../storage/setedShipsPos';
import { plane } from '../helpers/mesh/plane';
import {shoots} from '../storage/gameStarage';
import ground from '../view/ground';

export const checkFieldBorders = (aim, keyCode) => {
    if (keyCode === 'KeyD') {
        if (aim.position.x > 1.5) {
            return false;
        } else {
            return true;
        }
    } else if (keyCode === 'KeyA') {
        if (aim.position.x < -1.5) {
            return false;
        } else {
            return true;
        }
    } else if (keyCode === 'KeyW') {
        if (aim.position.y > 1.5) {
            return false;
        } else {
            return true;
        }
    } else if (keyCode === 'KeyS') {
        if (aim.position.y < -1.5) {
            return false;
        } else {
            return true;
        }
    }
};

export const shoot = (shootPos, player) => {
    let solution = false;
    if (player === 'one') {
        const shoot = `${shootPos.x}:${shootPos.y}`;
        setedShipsPos.secondPlayer.forEach(ship => {
            const shipsPos = [];
            ship[1].forEach(shipPos => shipsPos.push(`${shipPos.x}:${shipPos.y}`));
            if (shipsPos.includes(shoot)) {
                console.log(ship[0], 'hit', shootPos);
                solution = true;
            }
        });
    }
    return solution;
}

export const prevShots = (player) => {
    if (player === 'one') {
        shoots.firs.hit.forEach(pos => {
            const redPlane = plane(0.9, 0.9, {
                color: 0xff0000
            });
            ground.add(redPlane);
            redPlane.position.x = pos.x;
            redPlane.position.y = pos.y;
            redPlane.position.z = pos.z;
        });
        shoots.firs.miss.forEach(pos => {
            const whitePlane = plane(0.9, 0.9, {
                color: 0xffffffff
            });
            whitePlane.position.x = pos.x;
            whitePlane.position.y = pos.y;
            whitePlane.position.z = pos.z;
            ground.add(whitePlane);
        });
    } else if (player === 'two') {

    }
}
