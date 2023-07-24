const newAlien = new Alien
let position;

setInterval(() => {
    if (newAlien.alienCounter === 0) {
        const position = newAlien.alienPositon();
        newAlien.alienSpawn(position);
        newAlien.alienCounter +=1;
    }
}, 3000);

setInterval(() => { 
    newAlien.alienDie()
    newAlien.alienCounter = 0;
}, 5000);
