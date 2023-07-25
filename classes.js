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

class Player {
    constructor() {
        this.damage = 1;
        this.scoreAlien = 0;
        this.scoreFailed = 0;
        this.scoreTotal = 0;
    }

    //shoot
    shoot() {
        //gif thingie
        document.getElementById("shotgun").style.height = "102%"
        document.getElementById("shotgun").src = "/src/shotgun.gif"
        setTimeout (() => {
            document.getElementById("shotgun").src = "/src/shotgun.png"
        }, 500)
        
    }

    //points counter
    scoreCounter (killed, failed) {
        this.scoreTotal = killed*1000 - failed*100;
        return this.scoreTotal;
    }

}