import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <h4 class="nav-header">Clicky Game</h4>
            <p id="correct-incorrect"></p>
            <p id="score"></p>
            <p id="top-score"></p>
        </nav>
    );
}
  
export default Navbar;

// Needs props