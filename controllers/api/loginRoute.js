const router = require('express').Router();
const { User } = require('../../models');
//const withAuth = require('../utils/auth');



router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if(!user) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;