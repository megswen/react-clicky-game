import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <h4 className="nav-header">Freaks & Geeks Clicky Game</h4>
                <div className="score-box">
                    <p className="score" id="score">Score: {props.score}</p>
                    <p className="top-score" id="top-score">Top Score: {props.highScore}</p>
                </div>
            </nav>
        </>
    );
};
  
export default Navbar;
