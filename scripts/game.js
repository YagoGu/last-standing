console.log("GAME STARTING")

function highScoreScreenGenerator() {
    let highScore = document.getElementById("number-total-score").innerHTML
    let aliensKilled = document.getElementById("number-aliens-killed").innerHTML
    let shootsFailed = document.getElementById("number-shoots-failed").innerHTML

    let highScoreScreen = `
        <h1 class="score" id="gameOver">GAME OVER</h1>
        <h2 class="score" id="highScore">High score: ${highScore} points</h2>
        <h2 class="score" id="aliensKilled">Aliens Killed: ${aliensKilled} x 1000 = +${aliensKilled*1000} points</h2>
        <h2 class="score" id="shootsFailed">Failed Shoots: ${shootsFailed} x 500 = -${shootsFailed*500} points</h2>
        <button class= "score" id="btn-restart">RE-START</button>
    `;
    return highScoreScreen
}

function gameScreenGenerator () {
    let gameScreen = `
        <div class="grid-item grid-alien" id="gridP1"></div>
        <div class="grid-item grid-alien" id="gridP2"></div>
        <div class="grid-item grid-alien" id="gridP3"></div>
        <div class="grid-item grid-alien" id="gridP4"></div>
        <div class="grid-item grid-alien" id="gridP5"></div>
        <div class="grid-item grid-alien" id="gridP6"></div>
        <div class="grid-item grid-alien" id="gridP7"></div>
        <div class="grid-item grid-alien" id="gridP8"></div>
        <div class="grid-item grid-alien" id="gridP9"></div>
        <div class="grid-item grid-score">
            <div id="watch">
                <p>H.S. <b id="number-total-score"></b></p>
                <p>A.K. <b id="number-aliens-killed"></b></p>
                <p>F.S. <b id="number-shoots-failed"></b></p>
            </div>
        </div>
        <div class="grid-item grid-player"><img src="/src/shotgun.png" alt="shotgun" id="shotgun"></div>
        <div class="grid-item grid-life">
            <p>Life: <b id="life-points"></b></p>
            <img src="/src/doom-guy-face-4" alt="doom-guy-face" id="doom-guy-face">
        </div>
    `
    return gameScreen;
}

class Game {
    constructor() {
        this.gameIsOver = false;
        this.gameStart = false;
    }
    gameLoop() {
        if (this.gameIsOver && this.gameStart) {
            console.log('GAME OVER');
            const scoreScreenShow = highScoreScreenGenerator();
            document.getElementById("scoreScreen").innerHTML = scoreScreenShow
            document.getElementById("scoreScreen").style.display = "grid"
            document.getElementById("grid").style.display = "none"
            //If we click the btn-restart we will change desplayed elements, change the control variable and call again the loop
            document.addEventListener("click", (event) => {
                if (event.target.id === "btn-restart") {
                    document.getElementById("scoreScreen").style.display = "none"
                    document.getElementById("grid").style.display = "grid"
                    this.gameIsOver = false;
                    window.requestAnimationFrame(() => {this.gameLoop()})
                }
            })
        }
        else {
            window.requestAnimationFrame(() => {this.gameLoop()});
        }
    }
}