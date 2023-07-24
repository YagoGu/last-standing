class Alien {
    constructor() {
        this.type = "base"
        this.life = 1
        this.alienCounter = false
    }

    //search for a random position
    alienPositon() {
        const alienPosition = Math.floor((Math.random() * document.getElementsByClassName("grid-alien").length))
        return alienPosition
    }

    //generate alien
    alienSpawn(position) {
        const alien = document.createElement("img")
        alien.id="alien"
        alien.src="/src/alien.gif"
        alien.style.width = "60%"
        
        console.log(position) //testing

        document.getElementsByClassName("grid-alien")[position].appendChild(alien)

        this.alienCounter = true;
    }

    //alien timesout
    alienDie() {
        document.getElementById("alien").remove();
        this.alienCounter = false;
    }
}