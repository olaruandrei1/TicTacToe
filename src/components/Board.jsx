import "./Board.css";
import Boxes from "./Boxes.jsx";

const Board = ({ board, onClick }) => {
    return (
        <div className="board-container">
            {board.map((value, index) => {
                return (
                    <Boxes
                        value={value}
                        onClick={() => value === null && onClick(index)}
                    />
                );
            })}
        </div>
    );
};
export default Board;
