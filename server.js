const express = require('express');
const run = require("./pre.js");
const prompt = require('prompt-sync')();
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/search', async (req, res) => {
    
    try {
        const mood = req.body.mood;
        const budget = req.body.budget;
        console.log(req.body.mood);
        
        const text = await run(mood, budget);
        const jtext = JSON.parse(text);
        res.send(jtext);
        console.log(jtext.vacation_spots[0].name);
    } catch {
        res.send("there was a problem in parsing the response, please try again");
    }
    
    
})

app.listen(3000, () => {
    
    console.log(`http://localhost:3000`);
});

