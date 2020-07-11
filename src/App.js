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

  componentWillMount() {
    // restartGame();
    this.randomizeCards();

  }

  increaseScore = () => {
    this.setState({ currentCount: this.state.currentCount + 1 })
  }

  resetScore = () => {
    this.setState({ currentCount: 0 })
  }

  // Function to change highScore state to highest score
  getHighScore = () => {
    let newHighScore = this.state.currentCount;
    if (this.state.currentCount > this.state.highScore) {
      this.setState({ highScore: newHighScore })
      //this.restartGame();
    }
  }

  // Function to randomize rendered characters
  randomizeCards = () => {
    let people = this.state.characters;
    let i = people.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = people[i];
      people[i] = people[j];
      people[j] = temp;
      i--;
    }
    return (
      this.setState({ characters: people })
    );
  }

  // Function to set all character's "clicked" back to false
  clickedToFalse = () => {

  }

  // shuffleData = data => {
  //   let i = data.length - 1;
  //   while (i > 0) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   const temp = data[i];
  //   data[i] = data[j];
  //   data[j] = temp;
  //   i--;
  //   }
  //   return data;
  // };
  
  
  
  // Function to restart the game
  restartGame = () => { 
    this.getHighScore();
    this.resetScore();
    this.randomizeCards();
    this.clickedToFalse();
  }

  // Function to increase score when a new character is clicked, or reset the score to 0 and update the top score if a character is clicked twice
  clicker = id => {
    const selected = this.state.characters.filter(characters => characters.id === id);
    if(selected[0].clicked === false) {
      this.increaseScore();
      this.randomizeCards();
      selected[0].clicked = true;
    } else {
      this.restartGame();
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
          <div className="row">
            {this.state.characters.map((characters, index) => {
              return (
                <div id='cardItem' className="col-lg-3">
                  <CharacterCard 
                    key={index}
                    id={characters.id}
                    name={characters.name}
                    image={characters.image} 
                    clicked={characters.clicked}
                    handleOnClick={this.clicker}
                   />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
