function spinalCase(str) {
	// "It's such a fine line between stupid, and clever."
	// --David St. Hubbins

	// str.toLowerCase().replace(' ', '-');
	return str
		.toLowerCase()
		.split(' ')
		.join('-');
}

spinalCase('This Is Spinal Tap');
