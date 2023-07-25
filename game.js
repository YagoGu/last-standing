console.log("GAME STARTING")



class Game {
    constructor() {
        this.gameIsOver = false;
    }
    gameLoop() {
        if (this.gameIsOver) {
            console.log('GAME OVER');
            document.body.innerHTML = "<p style='color:blue;font-size:46px;'> You're such a little piece of shit </p>"
        }
        else {
            window.requestAnimationFrame(() => {this.gameLoop()});
        }
    }
}