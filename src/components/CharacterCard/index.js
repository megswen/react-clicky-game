import React from "react";
import "./style.css";

class CharacterCard extends React.Component {
    clicker = () => {
        this.props.handleOnClick(this.props.id)
    };

    render() {
        return (
            <>
                <div class="col-lg card-col">
                    <div className="card" onClick={this.clicker}>
                        <div
                            role="img"
                            aria-label="click item"
                            style={{ backgroundImage: `url("${this.props.image}")` }}
                            className="img-fluid card-image"
                        />
                    </div>
                </div>
            </>
        );
    };
};
  
export default CharacterCard;
