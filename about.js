console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted successfully");
}

const compliment = (evt) => {
	evt.preventDefault();

	alert("I've never seen such a precise mouse hover before. You were born for this")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img')

image.addEventListener('mouseover',compliment)