
//this is for listenign the event on the clic of the button
events();
//recive all the user information and save this information in local storage
  function events() {
    debugger;
    var registerNewUser = document.getElementById('registerButton');
    registerNewUser.addEventListener('click', function() {
      getData();
      //localStorage.clear();
    });
    var loginUser = document.getElementById('loginButton');
    loginUser.addEventListener('click', function() {
      validateData();
      //localStorage.clear();
    });
  }

  //funtion to save all the data of the form
  function getData() {

    //make the user JSON
    var userData = {
      username: document.getElementById('reg_username').value,
      password: document.getElementById('reg_password').value,
      passwordConfirm: document.getElementById('reg_password_confirm').value,
      email: document.getElementById('reg_email').value,
      name: document.getElementById('reg_fullname').value
    };
    //get user data from localStorage if that information exist
    var users = JSON.parse(localStorage.getItem('users'));
    //if not we will create it
    if (!users){
      users = [];
    }
    //insert in the next open position of the array the user data
    users.push(userData);
    //this is for saving the information on local storage
    localStorage.setItem('users', JSON.stringify(users));
    //location= '../Anime.html';

  }

//this part is for validating the user information
  function validateData() {
    var users = JSON.parse(localStorage.getItem('users'));
    for (var i = 0; i < users.length; i++) {
      var passwordUser = users[i].getItem('password');
      if (passwordUser == 1){
        location= '../Anime.html'
      }
    }
  }
