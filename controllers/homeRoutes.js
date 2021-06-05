const router = require('express').Router();
const { Post } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
  
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard', async (req, res) => {
  //get the posts only from the user who is logged in
  //get rid of dashboard link and place a link for the homepage
    try {
      const postData = await Post.findAll();
  
      const posts = postData.map((post) => post.get({ plain: true }));
      console.log(req.session);

      res.render('dashboard', { 
        posts,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //router.get for login/signup (post)
  //    - use middleware 
  

router.get('/login', async (req, res) => {
    try {
        res.render('login');

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/signup', async (req, res) => {
    try {
        res.render('signUp');

    } catch (err) {
        res.status(500).json(err);
    }
});





//post, update, and delete for blog-posts 









// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
