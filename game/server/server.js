const express = require('express');
const app = express();
const parser = require('body-parser');
const db = require('./controller.js');
const PORT = 3000

app.use(parser.json());
app.use(express.static('../../public'));


app.get("/",(req, res) => {
    db.getAll(res);
});


app.post("/",(req, res) => {
    console.log('POST')
    console.log(req.body.player);
    console.log(req.body.score);
    db.update(req.body.player, req.body.score, res);
});

app.listen(PORT, () => console.log("listenting on PORT", PORT));

