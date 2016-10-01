'use strict';

const jokesHandler = require('./lib/jokes-handler');

module.exports = [
	{
		groups: ['direct'],
		match: /!chuck/i,
		handler: jokesHandler.chuckJoke
	},
	{
		groups: ['direct'],
		match: /!momma/i,
		handler: jokesHandler.mommaJoke
	}
];
