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
        this.score = 0;
    }

    //shoot
    shoot() {
        //gif thingie
        document.getElementById("shotgun").style.marginLeft = "-2vw"
        document.getElementById("shotgun").style.maxWidth = "140%"
        document.getElementById("shotgun").style.maxHeight = "105%"
        document.getElementById("shotgun").src = "/src/shotgun.gif"
        setTimeout (() => {
            document.getElementById("shotgun").style.maxWidth = "130%"
            document.getElementById("shotgun").src = "/src/shotgun.png"
        }, 500)
        
    }
}