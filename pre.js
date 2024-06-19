const { GoogleGenerativeAI } = require("@google/generative-ai");
const prompt = require('prompt-sync')();
const fs = require('fs');
const api = process.env.GEM_API_KEY;

const genAI = new GoogleGenerativeAI(api);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});



async function run(mood, budget) {
    const prompt = `I want you to suggest me 5 vacation spots based on my mood and budget.
    My mood: ${mood}, budget (in indian rupees): ${budget}.
    I want the response to be a json with the names of the places, a brief description about each and a hyperlink to a picture of that place with the key "pict" make sure the picture exists before sending me the link.
    There shud be no other text or formatting other than the json output, especially the json formatter text ('''json'''). the output should be plain string`;
    // console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    fs.writeFile('output.txt', text, 'utf8', (error) => {
        if (error)
        console.log("meh");
    })

    return text;
}

module.exports = run;