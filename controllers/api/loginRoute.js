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
        //res.render('views/dashboard');

    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/logout', async (req,res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(400).end();
    }
    
});


module.exports = router;