import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Nav/Nav';
import JumboTron from './components/JumboTron/JumboTron';
import Card from './components/Card/Card';
import Wrapper from './components/Wrapper';
import characters from './characters.json';

function shuffleCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  //Set initial state
  state = {
    characters,
    score: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };
  
  //Click function from Card component
  handleClick = id => {
    console.log(id)
    //If this Card does not exist in clicked array (this.state.clicked)...
    if (this.state.clicked.indexOf(id) === -1) {
      //Run handleIncrement function
      this.handleIncrement();
      //Change state to push id into clicked array
      this.setState({
        clicked: this.state.clicked.concat(id)
      });
      console.log(this.state)
    }
    else {
      this.handleReset();
    }
  }

  //This function will handle correct guesses
  handleIncrement = () => 
  {
    const updatedScore = this.state.score + 1;
    //Update State to show score and mark if card is right or wrong.
    this.setState({
      score: updatedScore,
      rightWrong: "Correct"
    });
    this.handleShuffle();
    //If score is greater than high score. Update state for top score.
    if (updatedScore >= this.state.topScore) {
      this.setState({
        topScore: updatedScore
      })
    }
    else if (updatedScore === 12) {
      this.setState({ rightWrong: "You win!" })
    }
  }

  //This function will handle incorrect guesses
  handleReset = () => {
    //Set all state values except for top score back to original values
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      rightWrong: "Wrong",
      clicked: []
    });
    this.handleShuffle();
  };
  
  handleShuffle = () => {
    let shuffledCharacters = shuffleCharacters(characters);
    this.setState({ characters: shuffledCharacters });
  };

  render() {
    return (
    <div>
      <NavBar
        rightWrong={this.state.rightWrong}
        score={this.state.score}
        topScore={this.state.topScore}
      />
      <JumboTron/>
      <Wrapper>
        {characters.map(character =>(
          <Card 
            key={character.id}
            id={character.id}
            name={character.name} 
            image={character.image}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;