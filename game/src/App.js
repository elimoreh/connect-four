import React from 'react';
import './App.css';
import gridView from './gridView.js'
import Board from './Board.js'
import GameChecker from './GameChecker.js'


class App extends React.Component {
  constructor(props){
    super(props);

    
    this.state = {
      board : gridView(),
      next : 1,
      rscore : 0,
      yscore : 0
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

  reset(){
    this.setState ({
      board : gridView(),
      next : 1
    })
  }

  render () {
  return (<div>
              <div className="container">
                <h1>Connect Four</h1>
                <Board board={this.state.board} place={this.place.bind(this)}/>
                <GameChecker board={this.state.board} reset={this.reset.bind(this)}/>
                <div>Red: {this.state.rscore}  Yellow: {this.state.yscore}</div>
            </div>
         </div>         
    );
  }
}

export default App;
