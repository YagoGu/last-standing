let monsterCounter = 0;

//function to generate a monster randomly
function monsterSpawn () {
    positionMonster = Math.floor((Math.random() * document.getElementsByClassName("grid-monster").length))
    return positionMonster
}

//If there is no monster on the entire grid generate 1 
setInterval(() => {
    //monster time generator
    if (monsterCounter === 0) {
        const spawn = monsterSpawn()
        const monster = document.createElement("img")
        //set atributtes for monster
        monster.id="monster"
        monster.src="/src/monster.gif"
        monster.style.width = "60%"
        console.log(spawn) //testing
        document.getElementsByClassName("grid-monster")[spawn].appendChild(monster)
        //document.getElementsByClassName("grid-monster")[spawn].innerHTML = "MONSTER"
    
        monsterCounter = 1;
    }
    //monster time live
    setTimeout(() => {
        document.getElementById("monster").remove();
        monsterCounter = 0;
    }, 5000)
}, 3000);
