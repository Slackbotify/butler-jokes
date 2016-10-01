'use strict';
const chuck = require('./chucknorris');
const momma = require('./momma');

function chuckJoke(message, callback) {
	chuck.getRandomJoke((error, result) => {
		if (error) {
			callback(`Something went wrong.. Check my console.`);
		} else {
			callback(`_${result.joke}_`);
		}
	});
}

function mommaJoke(message, callback) {
	momma.getJoke((error, result) => {
		if (error) {
			callback(`Something went wrong.. Check my console.`);
		} else {
			callback(`_${result.joke}_`);
		}
	});
}

module.exports = {chuckJoke, mommaJoke};
