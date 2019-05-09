import React from 'react';
import axios from 'axios';

 var ScoreBoard = function(props){
    props.scorecheck();
    return (<div> Yellow : {props.yscore}  Red: {props.rscore} </div>);
 }


export default ScoreBoard;