import React from 'react';

var gridView = function(){
    var grid = []
    for(var i = 0; i < 7; i++){
        grid.push(Array(8).fill(0));
    }
    return grid;
};


export default gridView