const { GoogleGenerativeAI } = require("@google/generative-ai");
const prompt = require('prompt-sync')();
const fs = require('fs');
const api = process.env.GEM_API_KEY;

const genAI = new GoogleGenerativeAI(api);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const mood = prompt("mood: ");
const budget = prompt("budget: ");

async function run(mood, budget) {
    const prompt = `I want you to suggest me 5 vacation spots based on my mood and budget.
My mood: ${mood}, budget (in indian rupees): ${budget}.
I want the response to be a json with the names of the places and a brief description about each.
There shud be no other text or formatting other than the json output`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    fs.writeFile('output.txt', text, 'utf8', (error) => {
        console.log("meh");
    })
}

run(mood, budget);