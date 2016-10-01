'use strict';

const request = require('request');

const API_URL = 'http://api.yomomma.info';

function getJoke(callback) {
	const reqObj = {url: API_URL};
	request(reqObj, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			body = JSON.parse(body);
			callback(null, {
				joke: body.joke
			});
		} else {
			callback(error);
		}
	});
}

module.exports = {getJoke};
