
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
  debugger;
  var users = JSON.parse(localStorage.getItem('users'));
  var passwordHtml = document.getElementById('lg_password').value;
  var userHtml = document.getElementById('lg_username').value;
  var isUser = false;
  console.log('passwordHtml');
  console.log('userHtml');
  users.forEach(function (user) {
    if (user.password == passwordHtml && user.username == userHtml) {
      isUser = true;
      
    }
  }, this);

  if (isUser) {
    alert('Your information has been modified!!');
    location = '../../Anime.html';
  } else {
    alert('Please verify your password or username');
  }
}

//prueba
/*users.forEach(function (user) {
  var row = "<tr><td>" + user.username + "</td><td>" + user.password + "</td></tr>";
  var usersHtml = $('#usersTable').html();
  usersHtml += row;
  $('#usersTable').html(usersHtml);
  //console.log(row);
  //console.log('user: ', user);

  $('#usersTable').html(row);

}, this);*/