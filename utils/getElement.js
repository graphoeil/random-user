// Get element
const getElement = (selection) => {
	const element = document.querySelector(selection);
	if (element){ return element; }
	throw new Error(`No element match your selection => ${ selection }`);
};

// Export
export default getElement;