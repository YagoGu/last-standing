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
    //check if shooted
    if ((event.target.className.split(" ")[0] === "grid-item" && event.target.hasChildNodes()) || event.target.id === "alien") {
        newAlien.alienDie()
    }
})

game.gameLoop()


// position.addEventListener("click", () => {console.log("shoot");})