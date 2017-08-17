printArray();

function printArray() {
  var comments = JSON.parse(localStorage.getItem('comments')); //this was added
  comentHtml = $('#comments').html();

  comments.forEach(function (comment) {
    var row = '<div class="row"><div class="col-sm-2">' + comment.user + '</div><div class="col-sm-8">' +
    comment.comment + '</div><div class="col-sm-2">' + 'button' + '</div></div>';
    comentHtml = $('#comments').html();
    comentHtml += row;
    $('#comments').html(comentHtml);
  }, this);

  //localStorage.clear();
}
