const router = require('express').Router();
const { User } = require('../../models');
//const withAuth = require('../utils/auth');



router.post('/signup', async (req,res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;