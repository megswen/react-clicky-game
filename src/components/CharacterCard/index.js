import React from "react";
import "./style.css";

class CharacterCard extends React.Component {
    clicker = () => {
        this.props.handleOnClick(this.props.id)
    };

    render() {
        return (
            <>
                <div class="col-lg-2">
                    <div className="card" onClick={this.clicker}>
                        <div className="img-container">
                            <img class="img-fluid" alt={this.props.name} src={this.props.image} />
                        </div>
                    </div>
                </div>
            </>
        );
    };
};
  
export default CharacterCard;
