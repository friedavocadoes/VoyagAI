import express from 'express';
const router = express.Router();
import Wishlist from '../modal/wishlist.js';


router.post('/save', async (req, res) => {
    const { email, result } = req.body;
    const resultString = JSON.stringify(result);

    try {
        let user = await Wishlist.findOne({ email });

        if (!user.wishlist.includes(resultString)) {
            user.wishlist.push(resultString);
            await user.save();
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/fetch', async (req, res) => {
    const { email } = req.body;

    try {
        let user = await Wishlist.findOne({ email });

        res.send({ all: user.wishlist });
    } catch {
        res.send({ all: [{name: "error", description: "lol"}] });
    }
})


export default router;