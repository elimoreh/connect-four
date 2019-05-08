import React from 'react';
import BoardCreator from "./BoardCreator.js"

var Board = function(props){
    var p = props;
    var boardMap = []
        for(var r = 0; r < p.board.length; r++){
            for(var c = 0; c < p.board[r].length; c++){
                boardMap.push(<BoardCreator place={p.place} board={p.board} r={r} c={c} /> )
            }
        }
    return (<div className="board">{boardMap}</div>)
}


export default Board;