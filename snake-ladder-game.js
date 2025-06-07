// Snake & Ladder Game

const prompt = require("prompt-sync")({ sigint: true });

let endIndex = 100;

let currentPosition;
let dice;

const ladders = {
    7: 33,
    37: 85,
    51: 72,
    63: 99
}

const snakes = {
    36: 19,
    97: 21,
    65: 35,
    87: 32
}

while (true) {

    let input = prompt("Please enter the current position & dice value (e.g., 22, 3):")
    let values = input.split(",").map(val => val.trim())

    
    currentPosition = parseInt(values[0])
    dice = parseInt(values[1])
    
    if(values[0].toLocaleLowerCase() === "exit"){
        console.log("Game exited.");
        break;
    }

    if (values.length != 2) {
        console.log("invalid input");
        continue;
    }

    console.log(currentPosition, dice);

    if (dice > 6 || dice < 1 || isNaN(dice)) {
        console.log("enter valid dice no from 1 to 6");
        continue;
    }
    if (currentPosition < 0 || currentPosition > 99 || isNaN(currentPosition)) {
        console.log("enter valid position from 0 to 99");
        continue
    }

    currentPosition = snakesAndLadders(currentPosition, dice)

    if(currentPosition === endIndex){
        break;
    }

}

function snakesAndLadders(currentPosition, dice) {

    let newPosition = currentPosition + dice
    if (newPosition > endIndex) {
        console.log(`Cannot move. Position ${newPosition} is beyond 100. Stay at ${currentPosition}.`);
        return currentPosition;
    }

    if (snakes[newPosition]) {
        newPosition = snakes[newPosition]
    }

    if (ladders[newPosition]) {
        newPosition = ladders[newPosition]
    }

    if (newPosition === endIndex) {
        console.log("Yay! you win");
    } else {
        console.log(`you are at position ${newPosition}`)
    }

    return newPosition;

}
