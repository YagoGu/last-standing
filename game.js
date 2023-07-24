console.log("GAME STARTING")


class Game {
    constructor() {
        this.lives = 4;
        this.gameIsOver = false;
        this.counter = 0;
    }
    gameLoop() {
        if (this.gameIsOver) {
            console.log('GAME OVER');
        }

        else {
            window.requestAnimationFrame(() => {this.gameLoop()});
        }
    }
}