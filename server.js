const express = require('express');
const run = require("./pre.js");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const corsOptions = {
    origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

app.post('/search', async (req, res) => {
    try {
        const loc = req.body.loc;
        const mood = req.body.mood;
        const budget = req.body.budget;
        console.log(req.body.mood);
        const text = await run(mood, budget, loc);
        const jtext = JSON.parse(text);
        console.log(jtext.vacation_spots[0].name);
        
        res.send(jtext);
    } catch {
        console.log('err');
        res.send({error: "There was a problem parsing the response, please try again"});
    }
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});