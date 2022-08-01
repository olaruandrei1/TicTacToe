import "./Boxes.css";

const Boxes = ({ value, onClick }) => {
    const takeStyle = value === "X" ? "box x" : "box o";
    return (
        <button className={takeStyle} onClick={onClick}>
            {value}
        </button>
    );
};
export default Boxes;
