// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;






// import React from 'react';
// import RollDice from './RollDice'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas)

// function App() {
// return (
// 	<div>
// 	<RollDice />
// 	</div>
// );
// }

// export default App;



import React from "react";
import  {Game}  from "./Game.js";
import { Interface } from "./Interface";
import { AIresult } from "./AIresult";
import { YourResult } from "./YourResult";
import { Ranking } from "./Ranking";
import "./App.css";
// import Music from "./Music.js";

class App extends React.Component {
  draws = [];
  losses = [];
  wins = [];
  state = {
    games: 0,
    yourChoice: "",
    AIChoice: null,
    one:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
    two:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
    three:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
    four:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
    five:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
    six:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg"
  };
  AIChoice = () => {
    this.setState({
      AIChoice: Math.floor(Math.random() * 6) + 1
    });
  };

  startGame = () => {
    this.setState({
      yourChoice: Math.floor(Math.random() * 6) + 1,
      games: this.state.games + 1
    });

    this.AIChoice();
  };

  clearState = () => {
    this.losses = [];
    this.wins = [];
    this.draws = [];
    this.setState({
      yourChoice: "",
      AIChoice: null,
      games: 0
    });
  };

  render() {
    return (
      <div className="cover">
        <Interface
          games={this.state.games}
          clearState={this.clearState}
          startGame={this.startGame}
          yourChoice={this.state.yourChoice}
          AIChoice={this.state.AIChoice}
        />
        <div className="effects">
          <YourResult allstates={this.state} />
          <AIresult allstates={this.state} />
          {/* <Music /> */}
        </div>
        <Game results={this.state} />
        <Ranking
          wins={this.wins}
          losses={this.losses}
          draws={this.draws}
          yourChoice={this.state.yourChoice}
          AIChoice={this.state.AIChoice}
        />
      </ div>
    );
  }
}

export default App;
