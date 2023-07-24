const game = new Game
const newAlien = new Alien
let position;


setInterval(() => {
    if (newAlien.alienCounter === false) {
        position = newAlien.alienPositon();
        newAlien.alienSpawn(position);
    }
    
}, 500);

setInterval(() => {            
    newAlien.alienDie()
}, 3000);

game.gameLoop()