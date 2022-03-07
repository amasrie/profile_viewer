const twitter = require('../utils/twitter');
const assert = require('assert').strict;

describe('Twitter', () => {
	it('Check Connection', (done) => {
		const params = {screen_name: 'Twitter', count: 5};
		twitter.get('statuses/user_timeline', params, (error, tweets) => {
			assert.strictEqual(error, null);
			assert.notStrictEqual(tweets.length, 5);
			done();
		});
	});
});
