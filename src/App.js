import React from 'react';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends React.Component {
  state = {
    characters, 
    currentCount: 0,
    highScore: 0
  };

  increaseScore = () => {
    this.setState({ currentCount: this.state.currentCount + 1 })
  }

  resetScore = () => {
    this.setState({ currentCount: 0 })
  }

  // Function to change highScore state to highest score
  getHighScore = () => {

  }

  // Function to randomize rendered characters and restart the game
  restartGame = () => {

  }

  // Function to increase score when a new character is clicked, or reset the score to 0 and update the top score if a character is clicked twice
  clicker = id => {
    const selected = this.state.characters.filter(characters => characters.id === id);
    if(selected[0].clicked === false) {
      this.increaseScore();
      selected[0].clicked = true;
    } else {
      this.resetScore();
      // restartGame();
    }
  };

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <h4 class="nav-header">Clicky Game</h4>
            <p id="correct-incorrect"></p>
            <p id="score">Score: {this.state.currentCount}</p>
            <p id="top-score">Top Score: {this.state.highScore}</p>
        </nav>
        <div class="jumbotron"></div>
        <div className="text-center title">Freaks and Geeks</div>
        <div className="card-container"> 
          {this.state.characters.map((characters, index) => {
            return <CharacterCard 
              key={index}
              id={characters.id}
              species={characters.species}
              image={characters.image} 
              clicked={characters.clicked}
              handleOnClick={this.clicker}
            />
          })}
        </div>
      </>
    );
  }
}

export default App;
