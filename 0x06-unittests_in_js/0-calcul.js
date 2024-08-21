#!/usr/bin/node

function calculateNumber(a, b) {
	let total = Math.round(a) + Math.round(b);
	return total;
}

module.exports = calculateNumber;
