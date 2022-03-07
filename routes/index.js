const express = require('express');
const router = express.Router();
const mysql = require('../utils/mysql');
const twitter = require('../utils/twitter');

router.get('/', (req, res, next) => {
	res.render('index', { found: 0 });
});

router.get('/find', (req, res, next) => {
	mysql.query(`SELECT * FROM ${process.env.MYSQL_TABLE} WHERE name LIKE '%${req.query.user_name}%' LIMIT 1;`, (err, resp) => {
		if (err) {
			console.log(err);
		}
		if(!resp || !resp[0]){
			res.render('index', {found: 2})
		}else {
			resp[0].image = resp[0].image_path ? resp[0].image_path : resp[0].imagePath;
			const twitterUser = resp[0].twitter_user ? resp[0].twitter_user : resp[0].twitterUser;
			const params = {screen_name: twitterUser, count: 5};
			twitter.get('statuses/user_timeline', params, (error, tweets) => {
				if (error) {
					console.log(error);
					res.render('index', { found: 1, data: resp[0] });
				}
				const listTweets = [];
				for (let i = 0; i < tweets.length; i++){
					listTweets.push({user: tweets[i].user.screen_name, message: tweets[i].text})
				}
				resp[0].tweets = listTweets;
				res.render('index', { found: 1, data: resp[0] });
			});
		}
	})
});

router.put('/update', (req, res, next) => {
	let conditions = [];
	for(let i = 0; i < req.body.conditions; i++) {
		conditions.push(`${req.body.conditions[i]}`)
	}
	conditions.join(',');
	mysql.query(`UPDATE ${process.env.MYSQL_TABLE} SET ${conditions} WHERE ${filter}`, (err, resp) => {
		if (err) {
			console.log(err);
		}
	})
});

module.exports = router;
