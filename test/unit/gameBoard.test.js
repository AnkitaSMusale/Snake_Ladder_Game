// test/GameBoard.test.js
import GameBoard from "../../src/SnakeSLadderGame/GameBoard.js";

describe("GameBoard Tests", () => {
  let game;

  beforeEach(() => {
    game = new GameBoard();
  });

  test("getWinningPosition returns 100", () => {
    expect(game.getWinningPosition()).toBe(100);
  });

  test("Normal move: position 10 + dice 3 = 13", () => {
    expect(game.calculateNewPosition(10, 3)).toBe(13);
  });

  test("Ladder climb: from 7 to 33", () => {
    expect(game.calculateNewPosition(6, 1)).toBe(33);
  });

  test("Ladder climb: from 37 to 85", () => {
    expect(game.calculateNewPosition(36, 1)).toBe(85);
  });

  test("Ladder climb: from 51 to 72", () => {
    expect(game.calculateNewPosition(50, 1)).toBe(72);
  });

  test("Ladder climb: from 63 to 99", () => {
    expect(game.calculateNewPosition(62, 1)).toBe(99);
  });

  test("Snake slide: from 36 to 19", () => {
    expect(game.calculateNewPosition(35, 1)).toBe(19);
  });

  test("Snake slide: from 97 to 21", () => {
    expect(game.calculateNewPosition(96, 1)).toBe(21);
  });

  test("Snake slide: from 65 to 35", () => {
    expect(game.calculateNewPosition(64, 1)).toBe(35);
  });

  test("Snake slide: from 87 to 32", () => {
    expect(game.calculateNewPosition(86, 1)).toBe(32);
  });

  test("Exact winning position: 97 + 3 = 100", () => {
    expect(game.calculateNewPosition(97, 3)).toBe(100);
  });

  test("Overshooting winning position: 98 + 4 returns 98", () => {
    expect(game.calculateNewPosition(98, 4)).toBe(98);
  });

  test("Overshooting winning position: 99 + 2 returns 99", () => {
    expect(game.calculateNewPosition(99, 2)).toBe(99);
  });

  test("Move to position with ladder overrides snake scenario", () => {
    // Based on your ladders and snakes, test a move that lands on ladder square after move
    // For example, from 45 + 6 = 51 ladder to 72
    expect(game.calculateNewPosition(45, 6)).toBe(72);
  });
});
