require('dotenv').config('../.env');

module.exports = {
	table: process.env.MYSQL_TABLE || 'table',
	mySQL: {
		host: process.env.MYSQL_HOST || "localhost",
		port: process.env.MYSQL_PORT || 3306,
		database: process.env.MYSQL_DATABASE ||"db",
		user: process.env.MYSQL_USER ||"user",
		password: process.env.MYSQL_PASS ||"password"
	},
	twitter: {
	  consumer_key: process.env.TWITTER_KEY || '<YOUR-TWITTER-API-KEY>',
	  consumer_secret: process.env.TWITTER_SECRET || '<YOUR-TWITTER-API-SECRET>',
	  access_token_key: process.env.TWITTER_ACCESS_TOKEN || '<YOUR-TWITTER-ACCESS-TOKEN>',
	  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || '<YOUR-TWITTER-ACCESS-TOKEN-SECRET>'
	}
}
