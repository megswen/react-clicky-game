import React from 'react';
import './App.css';
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

class Characters extends React.Component {
  state = {
    characters
  }

  render() {
    return (
      this.setState({ characters: this.state.characters })
    );
  }
}

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="text-center title">Characters List</div>
        <CharacterCard 
          image={characters[0].image}
          name={characters[0].name} 
         />
        <CharacterCard 
          image={characters[1].image}
          name={characters[1].name} 
         />
        <CharacterCard 
          image={characters[2].image}
          name={characters[2].name} 
         />
        <CharacterCard 
          image={characters[3].image}
          name={characters[3].name} 
         />
    </>
  );
}

export default App;
