
//funtion to save all the data of the form
function insertData() {

  //make the user JSON
  var passwordConfirm = document.getElementById('reg_password_confirm').value;
  var userData = {
    username: document.getElementById('reg_username').value,
    password: document.getElementById('reg_password').value,
    email: document.getElementById('reg_email').value,
    name: document.getElementById('reg_fullname').value,
    logged: '1',
  };
  if (userData.password == passwordConfirm) {
    //get user data from localStorage if that information exist
    var users = JSON.parse(localStorage.getItem('users'));

    //if not we will create it

    if (!users) {
      users = [];
    }

    //insert in the next open position of the array the user data

    users.push(userData);

    //this is for saving the information on local storage

    localStorage.setItem('users', JSON.stringify(users));

    alert('Your information has been saved. Please enjoy our site');
    location = '../../socialNetII.html';

  } else {
    alert('Please make sure that your password is the same in both spaces');
  }

}
