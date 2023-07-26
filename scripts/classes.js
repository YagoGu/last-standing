class Alien {
    constructor() {
        this.type = "base"
        this.life = 1
        this.alienExist = false
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
        
        //console.log(position) //testing

        document.getElementsByClassName("grid-alien")[position].appendChild(alien)

        this.alienExist = true;
    }

    //alien timesout
    alienDie() {
        this.alienExist = false;
        document.getElementById("alien").remove();
        
    }
}

class Player {
    constructor() {
        this.damage = 1;
        this.scoreAlien = 0;
        this.scoreFailed = 0;
        this.scoreTotal = 0;
        this.life = 4;
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
        this.scoreTotal = killed*1000 - failed*500;
        return this.scoreTotal;
    }

    //change face on life points
    changeFace () {
        switch (this.life) {
            case 4:
                document.getElementById("doom-guy-face").src = "/src/doom-guy-face-4.png"
                break;
            case 3:
                document.getElementById("doom-guy-face").src = "/src/doom-guy-face-3.png"
                break;
            case 2:
                document.getElementById("doom-guy-face").src = "/src/doom-guy-face-2.png"
                break;
            case 1:
                document.getElementById("doom-guy-face").src = "/src/doom-guy-face-1.png"
                break;
        }
    }
}