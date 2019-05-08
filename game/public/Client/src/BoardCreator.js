import React from 'react';

var BoardCreator = function(props){
    var p = props;

    var drop = function(e) {
        for(var i = p.board.length - 1; i > 0; i--){
            if(p.board[i][p.c] === 0){
                p.place(i,p.c);
                return;
            }
        }
    }

    let color = "box"
    if(p.r === 0){return(<div className="box dropbox" onClick={drop}>Drop</div>)};
    if(p.board[p.r][p.c] === 1){color = "box red"}
    if(p.board[p.r][p.c] === 10){color = "box yellow"}


    return(<div className={color}></div>)
}



export default BoardCreator;