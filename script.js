let monsterCounter = 0;

//function to generate a monster randomly
function monsterSpawn () {
    positionMonster = Math.floor((Math.random() * document.getElementsByClassName("grid-monster").length))
    return positionMonster
}

//If there is no monster on the entire grid generate 1 
if (monsterCounter === 0) {

    const spawn = monsterSpawn()
    console.log(spawn)
    document.getElementsByClassName("grid-monster")[spawn].innerHTML = "MONSTER"

    monsterCounter = 1;

}
