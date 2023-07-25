const game = new Game;
const newAlien = new Alien;
const newPlayer = new Player;

function alienApear () {
    if (newAlien.alienExist === false) {
        setTimeout (() => {
            position = newAlien.alienPositon();
            newAlien.alienSpawn(position);
        }, 1000)
    }
}

function checkIfAlienKilled () {
    console.log(newAlien.alienExist) // testing if exist or not
    if (newAlien.alienExist === true) {
            newAlien.alienDie();
            alienApear();
        }
}

alienApear();
setInterval(() => {checkIfAlienKilled();}, 4000)

document.addEventListener("click", (event) => {
    //check if alien is being shooted
    if ((event.target.className.split(" ")[0] === "grid-item" && event.target.hasChildNodes()) || event.target.id === "alien") {
        newAlien.alienDie();
        newPlayer.shoot();
        alienApear();
        newPlayer.scoreAlien += 1;
        document.getElementById("number-zombies-killed").innerHTML = newPlayer.scoreAlien
        // setTimeout(() => {newAlien.alienDie();}, 4000);
        // clearInterval(despawn)
        // despawn = setInterval(() => {newAlien.alienDie();}, 5000);
    }
    //check if you shoot inside the grid but not an alien
    else if (event.target.className.split(" ")[0]+" "+event.target.className.split(" ")[1] === "grid-item grid-alien") {
        newPlayer.shoot();
        newPlayer.scoreFailed += 1;
        document.getElementById("number-shoots-failed").innerHTML = newPlayer.scoreFailed
    }
    // testing console.log(event.target.className.split(" ")[0]+" "+event.target.className.split(" ")[1])
    document.getElementById("number-total-score").innerHTML = newPlayer.scoreCounter(parseInt(newPlayer.scoreAlien), parseInt(newPlayer.scoreFailed))
})

game.gameLoop();


// position.addEventListener("click", () => {console.log("shoot");})