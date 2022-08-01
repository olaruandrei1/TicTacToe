import React from "react";
import "./Score.css";

const Score = ({ scores, playX }) => {
    const { scoreX, scoreO } = scores;
    // const player1 = props.player1;
    // const player2 = props.player2;
    return (
        <div className="score-table">
            <span className={`score x-table ${!playX && "inactive"}`}>
                <i className="fa-solid fa-drumstick-bite"></i>&nbsp; for
                {/*{player1}*/} X:
                {scoreX}
            </span>
            <span className={`score o-table ${playX && "inactive"}`}>
                <i className="fa-solid fa-drumstick-bite"></i>&nbsp; for
                {/*{player2}*/} O:
                {scoreO}
            </span>
        </div>
    );
};
export default Score;
