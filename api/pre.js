const { GoogleGenerativeAI } = require("@google/generative-ai");
const prompt = require('prompt-sync')();
const api = process.env.GEM_API_KEY;

const fs = require('fs');
const genAI = new GoogleGenerativeAI(api);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});



async function run(mood, budget, loc) {
    const prompt = `I want you to suggest me 6 vacation spots (around the world) based on my mood and budget.
    My mood: ${mood}, budget (in indian rupees): ${budget}, my current location: ${loc}.
    I want the response to be a json with the names of the places, a description about each, ways to travel to the location, stay options (hotels and resorts) at the location, a budget plan and a hyperlink to a website about that place from the internet (make sure the link is working currently).
    This is how i want the structure of the json to be: {"vacation_spots":[{"name":<name of the place>, "description":<the description>, "travel":<travel options>, "stay":<hotels or resort options>, "budget":<avg budget in INR>, "link":<website link>}, <and 5 more>]}.
    There shud be no other text or formatting other than the json output, especially the json formatter text ('''json''') shouldnt be there. the output should be plain string`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
}

module.exports = run;