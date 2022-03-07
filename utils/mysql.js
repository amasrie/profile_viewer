const mysql = require('mysql');
const config = require('../config/config');

module.exports=( () => {
	const con = mysql.createConnection(config.mySQL);
	return con;
})();
