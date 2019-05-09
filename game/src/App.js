import React from 'react';
import './App.css';
import gridView from './gridView.js'
import Board from './Board.js'
import GameChecker from './GameChecker.js'
import ScoreBoard from './ScoreBoard.js'
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);

    
    this.state = {
      board : gridView(),
      next : 1,
      status : 'newgame'
    }
  }

  place(row, col){
    let newBoard = this.state.board.slice();
    newBoard[row][col] = this.state.next;
    let newNext = (this.state.next === 1) ? 10 : 1;
    this.setState({
      board : newBoard,
      next : newNext,
    })
  }

  newScore(winner){
  let score = (winner === "Red") ? (this.state.rscore + 1) : (this.state.yscore + 1);
  console.log(winner, score, winner, this.state.rscore)
  axios.post('http://localhost:3000/', {
    player : winner,
    score : score
  })
    this.scorecheck();
  }

  reset(){
    this.setState ({
      board : gridView(),
      next : 1,
      status : 'newgame'
    })
  }

  scorecheck() {
    if (this.state.status === 'newgame') {
      axios.get('http://localhost:3000/')

        .then((response) => {
          this.setState({
            yscore: response.data[1].score,
            rscore: response.data[0].score
          });
        })

        this.setState ({
          status : 'inprogress',
        })
    }
  }

  render () {
  return (<div>
              <div className="container">
                <h1>Connect Four</h1>
                <Board board={this.state.board} place={this.place.bind(this)}/>
                <GameChecker board={this.state.board} reset={this.reset.bind(this)} newScore={this.newScore.bind(this)}/>
                <ScoreBoard scorecheck={this.scorecheck.bind(this)} yscore={this.state.yscore} rscore={this.state.rscore}/>
            </div>
         </div>         
    );
  }
}

export default App;
