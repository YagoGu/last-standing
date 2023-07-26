console.log("GAME STARTING")



class Game {
    constructor() {
        this.gameIsOver = false;
    }
    gameLoop() {
        let highScore = document.getElementById("number-total-score").innerHTML
        let aliensKilled = document.getElementById("number-aliens-killed").innerHTML
        let shootsFailed = document.getElementById("number-shoots-failed").innerHTML
        if (this.gameIsOver) {
            console.log('GAME OVER');
            document.body.innerHTML = `
            <main id="scoreScreen">
                <div class="score" id="gameOver">GAME OVER</div>
                <div class="score" id="highScore">High score: ${highScore} points</div>
                <div class="score" id="aliensKilled">Aliens Killed: ${aliensKilled} x 1000 = +${aliensKilled*1000} points</div>
                <div class="score" id="shootsFailed">Failed Shoots: ${shootsFailed} x 500 = -${shootsFailed*500} points</div>
                <button class= "score" id="btn-restart">RE-START</button>
            <main>
            `
        }
        else {
            window.requestAnimationFrame(() => {this.gameLoop()});
        }
    }
}