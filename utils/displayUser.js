// Imports
import getElement from './getElement.js';

// Variables
const img = getElement('.user-img');
const title = getElement('.user-title')
const value = getElement('.user-value');
/* Nous convertissons le nodeList de base en tableau, 
en effet forEach fonctionne sur une nodeList en revanche 
map ne fonctionnera pas ! */
const btns = [ ...document.querySelectorAll('.icon') ];

// Display user
const displayUser = (person) => {
	// Nous changeons la source de l'image du DOM ,-)
	img.src = person.image;
	// Titre
	value.textContent = person.name;
	title.textContent = `Ny name is`;
	// Active icon
	removeActive();
	btns[0].classList.add('active');
	// Buttons
	btns.forEach((btn) => {
		const label = btn.dataset.label;
		btn.addEventListener('mouseenter', () => {
			title.textContent = `My ${ label } is`;
			/* Grâce aux crochets nous accédons à la valeur de la propriété */
			value.textContent = person[label];
			// Active icon
			removeActive();
			btn.classList.add('active');
		});
	});
};

// Remove active
function removeActive(){
	btns.forEach((btn) => {
		btn.classList.remove('active');
	});
};

// Export
export default displayUser;