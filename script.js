const game = new Game
const newAlien = new Alien
let position;


setInterval(() => {
    if (newAlien.alienCounter === false) {
        position = newAlien.alienPositon();
        newAlien.alienSpawn(position);
    }
    
}, 1000);

setInterval(() => {            
    newAlien.alienDie()
}, 5000);

game.gameLoop()