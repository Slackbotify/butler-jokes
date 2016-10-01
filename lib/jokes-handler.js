'use strict';
const chuck = require('./chucknorris');

function chuckJoke(message, callback) {
	chuck.getRandomJoke((error, result) => {
		if (error) {
			callback(`Something went wrong.. Check my console.`);
		} else {
			callback(`_${result.joke}_`);
		}
	});
}

module.exports = {chuckJoke};
