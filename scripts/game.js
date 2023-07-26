console.log("GAME STARTING")

function highScoreScreenGenerator() {
    let highScore = document.getElementById("number-total-score").innerHTML
    let aliensKilled = document.getElementById("number-aliens-killed").innerHTML
    let shootsFailed = document.getElementById("number-shoots-failed").innerHTML

    let highScoreScreen = `
        <div class="score" id="gameOver">GAME OVER</div>
        <div class="score" id="highScore">High score: ${highScore} points</div>
        <div class="score" id="aliensKilled">Aliens Killed: ${aliensKilled} x 1000 = +${aliensKilled*1000} points</div>
        <div class="score" id="shootsFailed">Failed Shoots: ${shootsFailed} x 500 = -${shootsFailed*500} points</div>
        <button class= "score" id="btn-restart">RE-START</button>
    `;
    return highScoreScreen
}

class Game {
    constructor() {
        this.gameIsOver = false;
    }
    gameLoop() {
            if (this.gameIsOver) {
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