console.log("GAME STARTING")



class Game {
    constructor() {
        this.gameIsOver = false;
    }
    gameLoop() {
        let highScore = document.getElementById("number-total-score").innerHTML
        let aliensKilled = document.getElementById("number-zombies-killed").innerHTML
        let shootsFailed = document.getElementById("number-shoots-failed").innerHTML
        if (this.gameIsOver) {
            console.log('GAME OVER');
            document.body.innerHTML = `
            <div style="color:blue;font-size:46px;">${highScore}</div>
            <div style="color:blue;font-size:46px;">${aliensKilled}</div>
            <div style="color:blue;font-size:46px;">${shootsFailed}</div>
            `
        }
        else {
            window.requestAnimationFrame(() => {this.gameLoop()});
        }
    }
}