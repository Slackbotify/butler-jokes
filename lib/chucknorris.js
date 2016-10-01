'use strict';
const request = require('request');

const API_URL = 'https://api.icndb.com';

function getRandomJoke(callback) {
	const reqObj = {
		url: `${API_URL}/jokes/random`,
		json: true
	};
	request(reqObj, (error, response, body) => {
		if (!error && response.statusCode === 200 && body.type === 'success') {
			callback(null, {
				joke: body.value.joke
			});
		} else {
			callback(error);
		}
	});
}

module.exports = {getRandomJoke};
