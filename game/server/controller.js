const connection = require('./connection')

var getAll = function (res) {
    connection.query('SELECT * FROM scoreboard', (err, data) => {
        if (err) {
            res.send(err).status(500);
        } else {
            res.send(data).status(200);
        }
    })
};


var update = function (player, score, res) {
    connection.query(`UPDATE scoreboard SET score=${score} WHERE player="${player}"`, (err) => {
        if (err) {
            res.status(500).end();
        } else {
            res.status(200).end();
        }
    })
};


module.exports = {
    getAll : getAll,
    update : update
}



