
//this part is for validating the user information

function editData() {
  debugger;
  var newPasswordConfirm = document.getElementById('lg_newConfirmedPassword').value;
  var message = '';
  var userData = {
    username: document.getElementById('lg_newUsername').value,
    password: document.getElementById('lg_newPassword').value,
    email: document.getElementById('lg_email').value,
    name: document.getElementById('lg_fullname').value,
  };

  var passwordHtml = document.getElementById('lg_currentPassword').value;
  var userHtml = document.getElementById('lg_currentUsername').value;
  var users = JSON.parse(localStorage.getItem('users'));
  var success = false;
  message = 'Your passwords are not the same or the information is incorrect. Please verify.';
  for (var i = 0; i < users.length; i++) {
    if (users[i].username == passwordHtml && users[i].username == userHtml) {
      if (userData.password == newPasswordConfirm) {
        success = true;
        message = 'Your information has been modified successfully!!'
        users[i] = userData;
      }
    }
  }

  localStorage.setItem('users', JSON.stringify(users));
  if (success) {
    alert(message);
    location = '../../Anime.html';
  } else {
    alert(message);
  }
}
