import prompt from "prompt-sync";
//import GameBoard from "./GameBoard";
import GameBoard from "./GameBoard.js"; //
import { isValidInput, parseInput, validateDiceRoll, validatePosition } from "./InputValidator.js";

class SnakeAndLadderSimulator {
  #board = null;

  constructor() {
    this.#board = new GameBoard();
  }

  run() {
    const readInput = prompt({ sigint: true });

    while (true) {
      const input = readInput(
        "Please enter current position & dice value (e.g., 22, 4) or type 'exit' to quit: "
      );

      if (input.toLowerCase() === "exit") {
        console.log("Game ended.");
        break;
      }

      if (!isValidInput(input)) {
        console.log("Invalid input. Please try again.");
        continue;
      }

      const { inputPosition, diceRoll } = parseInput(input);

      if (!validatePosition(inputPosition)) {
        console.log("Position must be between 1 and 99. Please try again.");
        continue;
      }

      if (!validateDiceRoll(diceRoll)) {
        console.log("Dice roll must be between 1 and 6. Please try again.");
        continue;
      }

      if (inputPosition === this.#board.getWinningPosition()) {
        console.log("Invalid Input! Position cannot be 100 or more");
        continue;
      }

      try {
        const newPosition = this.#board.calculateNewPosition(
          inputPosition,
          diceRoll
        );

        if (newPosition === this.#board.getWinningPosition()) {
          console.log("Yay! You win.");
          break;
        }

        console.log(`You will be at position: ${newPosition}`);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
  }
}

export default SnakeAndLadderSimulator;
