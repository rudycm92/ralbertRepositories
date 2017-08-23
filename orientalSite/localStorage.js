function clearLocalStorage() {
  localStorage.clear();
  location = 'Anime.html';
}

//funtion to save all the data of the form
function insertData() {
  var animeData = {
    title: document.getElementById('title').value,
    alternativeTitle: document.getElementById('aternativeTitle').value,
    chapters: document.getElementById('chapters').value,
    author: document.getElementById('author').value,
    genre: document.getElementById('genre').value,
    year: document.getElementById('emition').value,
    state: document.getElementById('state').value,
    sinopsis: document.getElementById('comments').value,
  };

  //get user data from localStorage if that information exist

  var animes = JSON.parse(localStorage.getItem('animes'));

  //if not we will create it

  if (!animes) {
    animes = [];
  }

  //insert in the next open position of the array the user data

  animes.push(animeData);

  //this is for saving the information on local storage

  localStorage.setItem('animes', JSON.stringify(animes));

  alert('Anime has been saved');
  location = 'animes/bleach/bleach.html';
}
