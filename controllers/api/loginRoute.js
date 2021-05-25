const router = require('express').Router();
const { User } = require('../../models');
//const withAuth = require('../utils/auth');



router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({
            where: {
                user_name: req.body.username
            }
        });

        if(!user) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        } 
        console.log('check1')
        // validate password?

        req.session.save(() => {
            req.session.user_id = user.id
            req.session.logged_in = true;
            res.json({ user: user, message: "You are logged in"});
            console.log('check2')
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;