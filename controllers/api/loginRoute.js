const router = require('express').Router();
const { User } = require('../../models');
//const withAuth = require('../utils/auth');



router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if(!user) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        } 
        // validate password?

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true;
            res.json({ user: userData, message: "You are logged in"});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;