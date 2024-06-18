const express = require('express');
const run = require("./pre.js");
const prompt = require('prompt-sync')();

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/search', async (req, res) => {
    const mood = "happy";
    const budget = "30000";
    const text = await run(mood, budget);

    res.send(JSON.parse(text));
    console.log(JSON.parse(text));
})

app.listen(3000, () => {
    
    console.log(`http://localhost:3000`);
});

