//import { validateLadders, validateSnakes } from './InputValidator.js';
import { progressPosition } from './InputValidator.js';

class GameBoard {
    #ladders = {
        7: 33,
        37: 85,
        51: 72,
        63: 99
    };

    #snakes = {
        36: 19,
        97: 21,
        65: 35,
        87: 32
    };

    #WINNING_POSITION = 100;

    //validate() {
        //  validateLadders(this.ladders);
        //  validateSnakes(this.snakes);
    //}

    getWinningPosition() {
        return this.#WINNING_POSITION;
    }

    calculateNewPosition(currentPosition, diceRoll) {
        // if (diceRoll < 1 || diceRoll > 6) {
        //     throw new Error("Dice roll must be between 1 and 6.");
        // }

        // let nextPosition = currentPosition + diceRoll;
        // console.log("::: next position :::", nextPosition)

        // if (nextPosition > this.WINNING_POSITION) {
        //     console.log(`Here nextPosition ${nextPosition} is greater than current position ${currentPosition}`)
        //     return currentPosition;
        // }

        let nextPosition = progressPosition(currentPosition, diceRoll, this.getWinningPosition());

        if (this.#ladders[nextPosition]) {
            console.log(`🪜 Ladder! Climb from ${nextPosition} to ${this.#ladders[nextPosition]}`);
            nextPosition = this.#ladders[nextPosition];
        } else if (this.#snakes[nextPosition]) {
            console.log(`🐍 Snake! Slide from ${nextPosition} to ${this.#snakes[nextPosition]}`);
            nextPosition = this.#snakes[nextPosition];
        }

        return nextPosition;
    }
}

//module.exports = GameBoard;

export default GameBoard;
