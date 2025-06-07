# 🐍 Snake & Ladder Console Game

A simple command-line implementation of the classic **Snake & Ladder** board game using **Node.js**.

## 🎯 Objective

Roll the dice to move across the board from position 0 to 100.  
Ladders move you up, snakes pull you down.  
The first player to land **exactly on 100** wins.

## 🛠 Setup Instructions

### 1. Clone the Repository

git clone https://github.com/your-username/snake-ladder-game.git
cd snake-ladder-game

### 2. Install Dependencies

npm install
npm install prompt-sync
npm install --save-dev jest

(jest – for unit testing (as a dev dependency).)
(prompt-sync – for reading user input)

To ensure you have Node.js installed:

node -v

### 3. Run the Game

node src/game.js

### 4. Run the test cases - Unit tests are written for the game logic and validation logic inside utils.test.js.

open bash -> npm test

Note : to run the test cases - ensure your have updated the script in your package.json file as : "test": "jest" 

### 🎲 Game Rules

- Start from position 0
- Enter a dice value (1–6) and your current position
- If the new position is a ladder base, you climb up
- If the new position is a snake's head, you slide down
- You must land exactly on 100 to win
- If the dice roll overshoots 100, you stay in place
file 
### 🪜 Ladders
From	To
7	33
37	85
51	72
63	99

### 🐍 Snakes
From	To
36	19
65	35
87	32
97	21

### Assumptions
- Single-player game
- Inputs are provided via console
- Type exit to quit the game
