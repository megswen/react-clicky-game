import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
            <img alt={props.name} src={props.image} />
            </div>
            <div className="card-title">
                <p>{props.name}</p>
            </div>
        </div>
    );
}
  
export default CharacterCard;
