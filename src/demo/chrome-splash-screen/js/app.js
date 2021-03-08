$(function () {

  $('.btn').on('click', function () {
    searchUser();
  });

  $('.search-input').on('keypress', function (event) {
    if (event.keyCode == 13) {
      searchUser();
    }

    else if ($(this).val() === "") {
      $('.search-result').empty().addClass('hide');
    }
  });

  function searchUser() {
    var queryString = $('.search-input').val().toLowerCase();

    if (queryString === '') return false;

    var url = 'https://api.github.com/search/users?q=';

    //Ajax call to search git user
    $.ajax({
      url: url + queryString,
      method: 'GET'
    })
    .success(function (data) {
      console.log(data);

      if (data.items.length > 0) {
        var userData = data.items;

        var htmlEle = '';

        $('.search-result').empty();

        $.each(userData, function (i) {
          console.log(i);
          var urlEle = '<a href="' + userData[i].html_url + '" class="url">github</a>';
          var avatarEle = '<img class="userimg" src="' + userData[i].avatar_url + '" alt="Avatar">';
          var usernameEle = '<p class="username">' + userData[i].login + '</p> ';

          htmlEle += '<div class="user"> ' + avatarEle +  usernameEle  + urlEle + '</div>';
        });

        $('.search-result').removeClass('hide').append(htmlEle);
      }
      else {
        $('.search-result').empty().removeClass('hide').html('<p class="no-result">No result</p>');
      }
    })
    .error(function (error) {
      console.error(error);
    });
  }
});
