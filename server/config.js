const mySQL = require("mysql");

const connection = mySQL.createConnection({
	host: "localhost",
	user: "newuser",
	password: "123",
	database: "servers",
});

connection.connect((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Connected to DB");
	}
});

module.exports.query = (params) => {
	return new Promise((resolve, reject) => {
		connection.query(params, (error, results) => {
			if (error) {
				reject(error);
			} else {
				resolve(results);
			}
		});
	});
};
