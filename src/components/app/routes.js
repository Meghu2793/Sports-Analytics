let User = require('./models/user.js');
module.exports = function (app, passport) {
	
	app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect: 'http://localhost:3000/dashboard',
			failureRedirect: 'http://localhost:3000/dashboard'
		}));


	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	})
};

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

}