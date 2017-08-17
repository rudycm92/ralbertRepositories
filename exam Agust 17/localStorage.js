printArray();

//this part is for validating the user information
function clearLocalStorage() {
  localStorage.clear();
  location = 'socialNetI.html';
}

function goBack() {
  debugger;
  var users = JSON.parse(localStorage.getItem('users'));
  users.forEach(function (user) {
    user.logged = '0';
  }, this);

  //state = true;
  location = 'socialNetI.html';
  localStorage.setItem('users', JSON.stringify(users));
}


function addComment() {
  //debugger;
  //localStorage.clear();
  var users = JSON.parse(localStorage.getItem('users'));
  var username;
  users.forEach(function (user) {
    if (user.logged == '1') {
      username = user.username;
    }
  }, this);
  localStorage.setItem('users', JSON.stringify(users)); //this was added for saving th users information

  var userComments = {
    comment: document.getElementById('comment').value,
    user: username,
  };

  var comments = JSON.parse(localStorage.getItem('comments'));

  //get user data from localStorage if that information exist
  if (!comments) {
    comments = [];
  }

  //insert in the next open position of the array the user data
  comments.push(userComments);

  //this is for saving the information on local storage
  localStorage.setItem('comments', JSON.stringify(comments));
  alert('Your comment has been inserted');
  printArray(); //this was added
}

function printArray() {
  var versionI = '<div class="row"><div class="col-sm-1">' + comment.user + '</div><div class="col-sm-11">' + comment.comment + '</div></div>';

  var versionII = '<div class="row"><div class="col-sm-1">' + comment.user + '</div><div class="col-sm-8">' +
  comment.comment + '</div><div class="col-sm-3"><a class="btn btn-default" onclick="edit()">Edit</a>'+
  '<a class="btn btn-default" onclick="remove()">Remove</a></div></div>';

  var comments = JSON.parse(localStorage.getItem('comments')); //this was added
  comments.forEach(function (comment) {
    var row = '<div class="row"><div class="col-sm-1">' + comment.user + '</div><div class="col-sm-8">' +
    comment.comment + '</div><div class="col-sm-3"><a class="btn btn-default" onclick="edit()">Edit</a>'+
    '<a class="btn btn-default" onclick="remove()">Remove</a></div></div>';
    comentHtml = $('#comments').html();
    comentHtml += row;
    $('#comments').html(comentHtml);
  }, this);
  //localStorage.clear();
}
