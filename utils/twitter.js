const Twitter = require('twitter');
const config = require('../config/config');

module.exports=( () => {
	const twitterClient = new Twitter(config.twitter);
	return twitterClient;
})();
