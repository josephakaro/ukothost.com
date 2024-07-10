const mysql = require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'ukothost',
	password: 'password',
	database: 'ukothost',
});

connection.connect((error) => {
	if (error) {
		console.log('Error connecting to database');
	} else {
		console.log('Database connected');
	}
});

module.exports = connection;
