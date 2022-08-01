import { useState } from "react";
import "./App.css";
import Board from "./components/Board.jsx";
import Score from "./components/Score.jsx";

function App() {
    // const playerX = prompt("Please enter your name: ", "Your will play with X");
    // const playerO = prompt("Please enter your name: ", "Your will play with O");
    const winCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const [board, setBoard] = useState(Array(9).fill(null));
    const [playX, setPlayX] = useState(true);
    const [scores, setScores] = useState({ scoreX: 0, scoreO: 0 });
    const [gameOver, setGameOver] = useState(false);

    const handleOnClick = (currentIndex) => {
        const updateBoard = board.map((value, index) => {
            if (index === currentIndex) {
                return playX === true ? "X" : "O";
            } else {
                return value;
            }
        });

        const winnerWinnerChickenDinner = checkWinner(updateBoard);
        if (winnerWinnerChickenDinner) {
            if (winnerWinnerChickenDinner === "X") {
                let { scoreX } = scores;
                scoreX += 1;
                setScores({ ...scores, scoreX });
            } else {
                let { scoreO } = scores;
                scoreO += 1;
                setScores({ ...scores, scoreO });
            }
        }
        setBoard(updateBoard);
        setPlayX(!playX);
    };

    const checkWinner = (board) => {
        for (let i = 0; i < winCases.length; i++) {
            const [x, y, z] = winCases[i];
            if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                setGameOver(true);
                return board[x];
            }
        }
    };

    const resetBoard = () => {
        setGameOver(false);
        setBoard(Array(9).fill(null));
    };

    return (
        <div className="App">
            <div className="header-title">
                <p className="paragraph-title">
                    Who will eat chicken at dinner ?!🍗
                </p>
            </div>

            <Board
                board={board}
                onClick={gameOver ? resetBoard : handleOnClick}
            />
            <button className="reset-btn" onClick={resetBoard}>
                <i className="fa-solid fa-arrows-rotate fa-2xl"></i>
            </button>
            <Score
                scores={scores}
                playX={playX}
                // player={playerX}
                // player2={playerO}
            />
        </div>
    );
}

export default App;
