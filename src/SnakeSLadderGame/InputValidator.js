// function validateLadders(ladders) {
//     for (const [start, end] of Object.entries(ladders)) {
//         if (+start >= +end) {  //comparing the numeric values of start and end
//             throw new Error(`Invalid ladder: start (${start}) must be less than end (${end})`);
//         }
//     }
// }

// function validateSnakes(snakes) {
//     for (const [head, tail] of Object.entries(snakes)) {
//         if (+head <= +tail) { //comparing the numeric values of head and tail
//             throw new Error(`Invalid snake: head (${head}) must be greater than tail (${tail})`);
//         }
//     }
// }

function validateDiceRoll(diceRoll) {
    return diceRoll >= 1 && diceRoll <= 6;
    //console.log("::: You are at position :::", nextPosition);
}

function validatePosition(position) {
    return position >= 0 && position < 100;
}

function progressPosition(currentPosition, diceRoll, winningPosition) {
    const nextPosition = currentPosition + diceRoll;
    //console.log("::: You are at position :::", nextPosition);

    if (nextPosition > winningPosition) {
        console.log(`Here nextPosition ${nextPosition} is greater than current position ${currentPosition}`);
        return currentPosition;
    }
    console.log("::: You are at position :::", nextPosition);

    return nextPosition;
}

//returns true if valid else false
function isValidInput(input) {
    const parts = input.split(",").map(v => v.trim());
    return parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]);
}

function parseInput(input) {
    const [position, dice] = input.split(",").map(v => parseInt(v.trim()));
    return { inputPosition: position, diceRoll: dice };
}

//export { validateLadders, validateSnakes, isValidInput, parseInput };
export { isValidInput, parseInput, validateDiceRoll, progressPosition, validatePosition };
