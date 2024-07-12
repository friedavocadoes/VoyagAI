import express from 'express';
import run from '../prompt/gen.mjs';
const router = express.Router();


router.post('/search', async (req, res) => {
    try {
        const loc = req.body.loc;
        const mood = req.body.mood;
        const budget = req.body.budget;
        console.log(`${mood}, ${loc}, ${budget}`);
        const text = await run(mood, budget, loc);
        
        // un-comment to see output from Gemini
        // console.log(text);
        
        const jtext = JSON.parse(text);
        console.log(jtext.vacation_spots[0].name);
        
        res.send(jtext);
    } catch {
        console.log('err');
        res.send({vacation_spots: [{name: "Couldn't Parse Response", description: "Check your API key or try again"}]});
    }
})

export default router;