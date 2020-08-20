import React from 'react';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    characters,
    currentCount: 0,
    highScore: 0
  }
 
  componentWillMount() {
    this.randomizeCards();
  }

  increaseScore = () => {
    this.setState({ currentCount: this.state.currentCount + 1 })
  }

  resetScore = () => {
    this.setState({ currentCount: 0 })
  }

  // Function to change highScore state to highest score
  setHighScore = () => {
    let newHighScore = this.state.currentCount;
    if (this.state.currentCount > this.state.highScore) {
      this.setState({ highScore: newHighScore })
      //this.restartGame();
    }
  }

  // Function to reset characters clicked to false
  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return (
      this.setState({ characters: resetData })
    );
  };

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
    return people;
  }
  
  // Function to restart the game
  restartGame = () => { 
    this.setHighScore();
    this.resetScore();
    this.randomizeCards();
    this.resetData(characters);
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
        <Wrapper>
        <Navbar 
          score={this.state.currentCount}
          highScore={this.state.highScore}
        />
          <div className="card-container">
            <div className="row">
              {this.state.characters.map((characters, index) => {
                return (
                  <div id='cardItem col-lg-3'>
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
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default App;
