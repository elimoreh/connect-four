import React from 'react'

var GameChecker = function (props){
    let board = props.board;
    let winner;
    let clen = board[0].length;
    let rlen = board.length;


    let hCheck = function(r,c){
        if(c < clen - 3){
        var sum = board[r][c] + board[r][c +1] + board[r][c +2] + board[r][c + 3];
        if(sum === 4 || sum === 40) { return sum; }
        }
    }

    let vCheck = function(r,c){
        if(r < rlen - 3){
        var sum = board[r][c] + board[r+1][c] + board[r+2][c] + board[r+3][c];
        if(sum === 4 || sum === 40) { return sum; }
        }
    }

    let dCheck = function(r,c){
        if(r < rlen - 3 && c < clen - 3){
        var sum = board[r][c] + board[r+1][c+1] + board[r+2][c+2] + board[r+3][c+3];
        if(sum === 4 || sum === 40) { return sum; }
        }
    }

    let mdCheck = function(r,c){
        if(r > 3 && c < clen - 3 ){
        var sum = board[r][c] + board[r-1][c+1] + board[r-2][c+2] + board[r-3][c+3];
        if(sum === 4 || sum === 40) { return sum; }
        }
    }

    for(var r = 1; r < board.length; r++){
        for(var c = 0; c < board[r].length; c++){
            if(hCheck(r,c)){winner = hCheck(r,c)}
            if(vCheck(r,c)){winner = vCheck(r,c)}
            if(dCheck(r,c)){winner = dCheck(r,c)}
            if(mdCheck(r,c)){winner = mdCheck(r,c)}
        }
    }
   
    
    if(winner){
        winner = (winner === 4) ? "Red" : "Yellow";
        setTimeout(()=> props.reset(), 2000)
        return(<div>{`${winner} has won the game!`}</div>);
    }


    return(<div></div>)
}


export default GameChecker