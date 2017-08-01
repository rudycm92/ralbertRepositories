function getData() {
	var name = document.getElementById('name').value;
	var lastname = document.getElementById('lastname').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	localStorage.setItem("Name" , name);
	localStorage.setItem("Lastname" , lastname);
	localStorage.setItem("Email" , email);
	localStorage.setItem("Phone" , phone);
}