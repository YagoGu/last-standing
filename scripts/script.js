const game = new Game;
const newAlien = new Alien;
const newPlayer = new Player;

//this function will generate a new alien of there is not one on the battlefield
function alienBorn () {
    if (newAlien.alienExist === false) {
        setTimeout (() => {
            position = newAlien.alienPositon();
            newAlien.alienSpawn(position);
        }, 1000)
    }
}

//this function will check if the alien is alive, is the alien it isn't killed despawn it and create a new one
function checkIfAlienKilled () {
    //console.log(newAlien.alienExist) // testing if exist or not
    if (newAlien.alienExist === true) {
            newAlien.alienDie();
            alienBorn();
            newPlayer.life-=1; //we take one players life because he get hit
            document.getElementById("life-points").innerHTML = newPlayer.life //update life on the html
            if (newPlayer.life === 0) {
                game.gameIsOver = true;
            }
        }
}

//first update of thingies on html
//life
document.getElementById("life-points").innerHTML = newPlayer.life;
//score
document.getElementById("number-total-score").innerHTML = newPlayer.scoreCounter(newPlayer.scoreAlien, newPlayer.scoreFailed)
//enemies killed
document.getElementById("number-aliens-killed").innerHTML = newPlayer.scoreAlien
//shoots failed
document.getElementById("number-shoots-failed").innerHTML = newPlayer.scoreFailed

alienBorn(); //call alien for the first time
setInterval(() => {checkIfAlienKilled();}, 4000) //the alien have 4 seconds of life

document.addEventListener("mouseover", (event) => {
    if(event.target.className === "grid-item grid-alien") {
        //console.log("pepe")//change to a bullseye
    }
})

document.addEventListener("click", (event) => {
    //check if alien is being shooted
    if ((event.target.className === "grid-item grid-alien" && event.target.hasChildNodes()) || event.target.id === "alien") {
        newAlien.alienDie(); //delete de alien if it is shooted
        newPlayer.shoot(); //shoot animation
        alienBorn(); //create alien after it is killed
        newPlayer.scoreAlien += 1; //update score
        document.getElementById("number-aliens-killed").innerHTML = newPlayer.scoreAlien
    }
    //check if you shoot inside the grid but not an alien
    else if (event.target.className === "grid-item grid-alien") {
        newPlayer.shoot(); //shoot animation
        newPlayer.scoreFailed += 1; //update score
        document.getElementById("number-shoots-failed").innerHTML = newPlayer.scoreFailed
    }
    //upgrade score
    document.getElementById("number-total-score").innerHTML = newPlayer.scoreCounter(parseInt(newPlayer.scoreAlien), parseInt(newPlayer.scoreFailed))
})

game.gameLoop();