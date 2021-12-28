// select the button and email elements
const buttonEl = document.querySelector("#button");
const emailEl = document.querySelector("#email");

// email checker helper function
// check if an email is valid
const isEmailValid = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};
// email validator helper function
const checkEmail = () => {
	let valid = false;
	const email = emailEl.value.trim();
	if (!isEmailValid(email)) {
		console.log("no -not a valid email!!!");
		// showError(emailEl, "Looks like this is not an email");
	} else {
		// success(emailEl);
		valid = true;
	}
};

//TODO work on this function to make it work for the error messages the project requires

// // the function which shows the error message
// const showError = (input, message) => {
// 	// get the form field element
// 	const formField = input.parentElement;
// 	// add the error class
// 	formField.classList.add("error");
// 	// show the error message
// 	const error = formField.querySelector("small");
// 	error.textContent = message;
// };

// attach event listener to button
buttonEl.addEventListener("click", function (e) {
	console.log("trying to validate form");
	// prevent the form from submitting
	e.preventDefault();
	// validate the form
	checkEmail();
});
