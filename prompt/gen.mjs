import { GoogleGenerativeAI } from "@google/generative-ai";
const api = process.env.GEM_API_KEY;

const genAI = new GoogleGenerativeAI(api);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});



async function run(mood, budget, loc) {
    const prompt = `I want you to suggest me 9 vacation spots (around the world) based on my mood and budget.
    My mood: ${mood}, budget (in indian rupees): ${budget}, my current location: ${loc}.
    I want the response to be a json with the names of the places, a description about each, ways to travel to the location, stay options (hotels and resorts) at the location, a budget plan and a hyperlink to a website about that place from the internet (make sure the link is working currently).
    Also in the description include a brief explanation of how that place is right for my mood, make sure to focus solely on the mood aspect when choosing places. there must be a connection between my mood and the place.
    This is how i want the structure of the json to be: {"vacation_spots":[{"name":<name of the place>, "description":<the description>, "travel":<travel options>, "stay":<hotels or resort options>, "budget":<avg budget in INR>, "link":<website link>}, <and 8 more>]}.
    There shud be no other text or formatting other than the json output, especially the json formatter text ('''json''') shouldnt be there. the output should be plain string`;

    const result = await model.generateContent(prompt);
    
    // remove comment to test output
    // console.log(result);

    const response = await result.response;
    const text = response.text();

    return text;
}

export default run;
