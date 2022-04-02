// Imports
import getElement from './utils/getElement.js';
import getUser from './utils/getUser.js';
import displayUser from './utils/displayUser.js';

// Variables
const btn = getElement('.btn');

// Show user
const showUser = async() => {
	// await getUser car async retourne une promesse !!!
	const person = await getUser();
	// Display user
	displayUser(person);
};

// Get random user
btn.addEventListener('click', showUser);

// Init
window.addEventListener('DOMContentLoaded', showUser);