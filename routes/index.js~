var express = require('express');
//new
var passport = require('passport');
var Account = require('../models/account');
//old
var router = express.Router();
var ctrlPerson = require('../controllers/person');

/* GET home page. */
router.get('/', ctrlPerson.personList);

/* add simple home page. */
router.post('/', ctrlPerson.newPerson);

/* delete simple */
router.get('/delete/:id', ctrlPerson.deletePerson);

router.get('/register', function(req, res) {
      res.render('register', { });
});

router.get('/what', function(req, res) {
      res.render('what', { });
});

router.get('/design', function(req, res) {
      res.render('design', { });
});

router.get('/testing', function(req, res) {
      res.render('testing', { });
});


router.get('/hackingtooldiv', function(req, res) {
      res.render('hackingtooldiv', { });
});

router.get('/references', function(req, res) {
      res.render('references', { });
});

router.post('/register', function(req, res) {
      Account.
        register(new Account({ username : req.body.username }), 
	         req.body.password, 
		 function(err, account) {
                   if (err) {
                     return res.render('register', { account : account });
                   }
                   passport.authenticate('local')(req, res, function () {
                     res.redirect('/');
                     });
                 });
});

router.get('/login', function(req, res) {
      res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/');
});

router.get('/logout', function(req, res) {
      req.logout();
          res.redirect('/');
});

module.exports = router;
