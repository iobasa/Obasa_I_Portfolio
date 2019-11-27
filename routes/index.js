var express = require('express');
var router = express.Router();
var auth = require('../config/mailcreds');
var mailer = require('nodemailer');

// set up the nodemailer stuff
const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: auth.user,
		pass: auth.pass
	}
});

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/mail', (req, res) => {
	console.log('hit mail route');
	console.log('body: ', req.body);

	// get the mail options from the form -> the url params using bodyParser middleware

	const mailOptions = {
		from: req.body.usermail,
		to: "ifeobasa12@gmail.com",
		replyTo: req.body.usermail,
		subject: `From portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
		text: req.body.message
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed... ", err);
			res.json(err);
		} else {
			console.log("success! ", info);
			res.json(info);
		}
	});
})

module.exports = router;
