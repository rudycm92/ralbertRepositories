
//this is for listenign the event on the clic of the button

events();

//recive all the user information and save this information in local storage

function events() {
  var isUser = document.getElementById('loginButton');
  isUser.addEventListener('click', function () {
    editData();

    //localStorage.clear();
  });
}

//this part is for validating the user information

function editData() {
  var newPasswordConfirm = document.getElementById('reg_password_confirm').value;
  var message = '';
  var userData = {
    newUsername: document.getElementById('lg_newUsername').value,
    newPassword: document.getElementById('lg_newPassword').value,
    email: document.getElementById('reg_email').value,
    name: document.getElementById('reg_fullname').value,
  };

  var passwordHtml = document.getElementById('lg_password').value;
  var userHtml = document.getElementById('lg_username').value;
  var users = JSON.parse(localStorage.getItem('users'));
  var success = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].username == passwordHtml && users[i].username == userHtml) {
      if (userData.newPassword == newPasswordConfirm) {
        users[i].push(userData);
        success = true;
        localStorage.setItem('users', JSON.stringify(users));
        message = 'Your information has been saved. Please enjoy our site';
      } else {
        message = 'Your password are not the same. Please verify.';
      }
    } else {
      message = 'Your password or username is incorrect. Please verify';
    }
  }

  localStorage.setItem('users', JSON.stringify(users));
  if (success) {
    alert(message);
    location = '../../socialNetI.html';
  } else {
    alert(message);
  }
}
