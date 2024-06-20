const express = require('express');
const run = require("./pre.js");
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/search', async (req, res) => {
    try {
        const loc = req.body.loc;
        const mood = req.body.mood;
        const budget = req.body.budget;
        console.log(req.body.mood);
        const text = await run(mood, budget, loc);
        const jtext = JSON.parse(text);
        // console.log(jtext.vacation_spots[0].name);
        // res.send(jtext);
        res.render('forg', {vacation: jtext.vacation_spots});
    } catch {
        res.send("There was a problem parsing the response, please try again");
    }
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});