events();

//recive all the user information and save this information in local storage

function events() {
  var isUser = document.getElementById('loginButton');
  isUser.addEventListener('click', function () {
    clearLocalStorage();

    //localStorage.clear();
  });
}

//this part is for validating the user information

function clearLocalStorage() {
  localStorage.clear();
  location = 'Anime.html';
}
