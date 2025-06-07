
import { isValidInput, parseInput, validateDiceRoll, progressPosition, validatePosition } from "../../src/SnakeSLadderGame/InputValidator.js"; // adjust path if needed

describe("Input Validator Tests", () => {
    describe("isValidInput()", () => {
        test("valid input format '12, 4' returns true", () => {
            expect(isValidInput("12, 4")).toBe(true);
        });

        test("invalid input with only one number returns false", () => {
            expect(isValidInput("12")).toBe(false);
        });

        test("invalid input with non-numeric values returns false", () => {
            expect(isValidInput("abc, 4")).toBe(false);
            expect(isValidInput("12, xyz")).toBe(false);
        });

        test("invalid input with extra commas returns false", () => {
            expect(isValidInput("12, 4, 5")).toBe(false);
        });
    });

    describe("parseInput()", () => {
        test("parses input string to numbers", () => {
            expect(parseInput("22, 5")).toEqual({ inputPosition: 22, diceRoll: 5 });
        });

        test("trims spaces correctly", () => {
            expect(parseInput(" 7 , 3 ")).toEqual({ inputPosition: 7, diceRoll: 3 });
        });
        
    });

    describe("validateDiceRoll()", () => {
        test("returns true for dice roll 1", () => {
            expect(validateDiceRoll(1)).toBe(true);
        });

        test("returns true for dice roll 6", () => {
            expect(validateDiceRoll(6)).toBe(true);
        });

        test("returns false for dice roll 0", () => {
            expect(validateDiceRoll(0)).toBe(false);
        });

        test("returns false for dice roll 7", () => {
            expect(validateDiceRoll(7)).toBe(false);
        });
    });

    describe("validatePosition()", () => {
        test("returns true for position 1", () => {
            expect(validatePosition(1)).toBe(true);
        });

        test("returns false for position 100", () => {
            expect(validatePosition(100)).toBe(false);
        });

        test("returns false for position 0", () => {
            expect(validatePosition(0)).toBe(true);
        });

        test("returns false for position 101", () => {
            expect(validatePosition(101)).toBe(false);
        });
    });

    describe("progressPosition()", () => {
        const winningPosition = 100;

        test("returns next position when within winning limit", () => {
            expect(progressPosition(10, 5, winningPosition)).toBe(15);
        });

        test("returns current position when next position overshoots winning position", () => {
            expect(progressPosition(98, 5, winningPosition)).toBe(98);
        });
    });
});
