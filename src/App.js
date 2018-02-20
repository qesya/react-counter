import React from 'react';
import './App.css';

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {score: 0};
    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this);

  }

  incrementScore() {
    this.setState({
      score: this.state.score + 1
    });
  }
 
  decrementScore() {
    this.setState({
      score: this.state.score - 1
    });
  }

 render() {
   return (
     <div className="App">
       <h2>Counter</h2>
       <h1>{this.state.score}</h1>
       <button onClick={this.incrementScore}> + </button>
       <button onClick={this.decrementScore}> - </button>
     </div>
   );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Score />
//       </div>
//     );
//   }
// }

export default Score;
