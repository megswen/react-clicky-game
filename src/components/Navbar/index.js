import React from "react";
import "./style.css";

class Navbar extends React.Component {
    // Function for Navbar

    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <h4 class="nav-header">Clicky Game</h4>
                    <p id="correct-incorrect"></p>
                    <p id="score">Score: {this.state.currentCount}</p>
                    <p id="top-score">Top Score: {this.state.highScore}</p>
                </nav>
            </>
        );
    };
};
  
export default Navbar;
