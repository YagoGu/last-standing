const game = new Game
const newAlien = new Alien

setInterval(() => {
    if (newAlien.alienCounter === false) {
        position = newAlien.alienPositon();
        newAlien.alienSpawn(position);
    }
    
}, 250);

setInterval(() => {     
    newAlien.alienDie()
}, 4000);

document.addEventListener("click", (event) => {
    //checkn shoots
    console.log(event.target.className.split(" ")[0]);
    if (event.target.className  || event.target.id === "alien") {
        newAlien.alienDie()
    }
})

game.gameLoop()


// position.addEventListener("click", () => {console.log("shoot");})