// Variables
const url = 'https://randomuser.me/api/';

// Get user from api, async retourne une promesse !!!
const getUser = async() => {
	const response = await fetch(url);
	const data = await response.json();
	// Destructuration
	const person = data.results[0];
	const { phone, email, picture:{ large:image }, location:{ street:{ number, name } }, 
		login:{ password }, name:{ first, last }, dob:{ age } } = person;
	// Nous retournons l'objet au format ES6 => phone:phone ...
	return { phone, email, image, street:`${ number } ${ name }`, password, name:`${ first } ${ last }`, age };
};

// Export
export default getUser;