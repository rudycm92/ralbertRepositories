printArray();

function printArray() {
  var animes = JSON.parse(localStorage.getItem('animes'));
  animes.forEach(function (anime) {
    var title = '<b>' + anime.title + '</b>';
    $('#title').html(title);

    var descriptionI = '<strong>Title: ' + anime.title + '</strong><br><br><b>Genre: ' + anime.genre +
    '</b><br><br><b>Estate: ' + anime.state + ' </b><br><br><b>Languaje: Japanese with subtitles</b>' +
    '<br><br><b>Chapters: ' + anime.chapters + '</b><br><br><b>Author: ' + anime.author + '</b>';
    $('#preDescription').html(descriptionI);

    var sinopsis = '<p>' + anime.sinopsis + '</p>';
    $('#sinopsis').html(sinopsis);

  }, this);

  //localStorage.clear();
}
