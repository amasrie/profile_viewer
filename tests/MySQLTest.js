const mysql = require('../utils/mysql.js');
const assert = require('assert').strict;

describe('Database', () => {
	it('Check Connection', (done) => {
		mysql.query(`SELECT 1 AS one;`, (err, resp) => {
				assert.strictEqual(resp[0].one, 1);
				assert.strictEqual(err, null);
				done();
		})
	});
});
