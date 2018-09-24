//To show/hide loading indicator
function toggleSpinner() {
  var $ele = $('.loading');

  if ($ele.hasClass("hide")) {
    $ele.removeClass("hide");
  }
  else {
    $ele.addClass("hide");
  }
}

//To call hackerNews API
$(function () {
  if (!navigator.onLine) {
    $("#turn-on-notification").attr("disabled", true);
    $(".custom-checkbox").addClass("offline");
    toggleSpinner();
  }
  else {
    getStories();
  }

  function getStories() {
    var url = "https://hacker-news.firebaseio.com/v0/newstories.json";

    $.ajax({
      url: url,
      method: "GET",
      success: function (response) {
        var response = response.splice(1, 20);
        response.map(function (contentId) {
          return(getContents(contentId));
        });

        toggleSpinner(); //To hide spinner
      },
      error: function (error) {
        console.error(error);
      }
    });
  }

  //To get stories in hackerNews
  function getContents(contentId) {
    var contentUrl = "https://hacker-news.firebaseio.com/v0/item/" + contentId + ".json";

    $.ajax({
      url: contentUrl,
      method: "GET",
      success: function (response) {
        $("#main").append(
          "<div class='container'>" +
          "<p><a href='#'>" + response.title + "</a></p>" +
          "<p> <span>" + response.score + "</span> point by <span class='author'>" + response.by + "</span></p>" +
          "<a href='https://www.google.co.in/search?q=" + response.title + "' target='_blank' class='search-web'> search  web</a>" +
          "</div>"
        );
      },
      error: function (error) {
        console.error(error);
      }
    });
  }

  //Hamburger menu function
  $("#menu-overlay, .menu-icon, #menu a").on("click", function (event) {
    event.stopPropagation();

    var $menuEle = $('#menu');

    if ($menuEle.hasClass("visible")) {
      $menuEle.removeClass("visible");
      $("#menu-overlay").removeClass("visible");
    }
    else {
      $menuEle.addClass("visible");
      $("#menu-overlay").addClass("visible");
    }

  });

  /*
    To find device is online or offline
  */

  function onLineStatus(event) {
    console.log("Online: ", navigator.onLine);
    if (navigator.onLine) {
      $("#sw-offline-state").attr("data-offline", false);
      $("#sw-offline-state").html("✕");
      $("#turn-on-notification").attr("disabled", false);
      $(".custom-checkbox").removeClass("offline");
    }
    else {
      $("#sw-offline-state").attr("data-offline", true);
      $("#sw-offline-state").html("✓");
    }
  }

  //Event listener for offline/online events
  window.addEventListener("online", onLineStatus);
  window.addEventListener("offline", onLineStatus);
});
    if (response.length == 0) {
        this.hideLoader();
        return;
      }

      for (var i = startIndex; i <= pagination; i++) {
        if (i == pagination) {

          if (this.isMounted()) this.hideLoader();

          if (this.isMounted() && isLoadingMore) this.setState({ isLoadingMore: false });

          this.loadMore(pagination);
          return false;
        }

        this.getContentData(response[i], pagination);
      }
    }).bind(this));
  },

  getContentData: function getContentData(id) {

    var contentUrl = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';

    $.get(contentUrl, (function (response) {

      if (response.length == 0) {
        if (this.isMounted()) {
          this.hideLoader();
        }
        return;
      }

      var domain = response.url ? response.url.split(':')[1].split('//')[1].split('/')[0] : '';

      response.domain = domain;

      this.setState({ newStories: this.state.newStories.concat(response) });
    }).bind(this));
  },

  convertTime: function convertTime(time) {
    var d = new Date();
    var currentTime = Math.floor(d.getTime() / 1000);
    var seconds = currentTime - time;

    // more that two days
    if (seconds > 2 * 24 * 3600) {
      return 'a few days ago';
    }

    // a day
    if (seconds > 24 * 3600) {
      return 'yesterday';
    }

    if (seconds > 3600) {
      return 'a few hours ago';
    }

    if (seconds > 1800) {
      return 'Half an hour ago';
    }

    if (seconds > 60) {
      return Math.floor(seconds / 60) + ' minutes ago';
    }
  },

  loadMore: function loadMore(pagination) {

    $(window).unbind('scroll');

    $(window).bind('scroll', (function () {

      if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
        var previousCount = pagination + 1;
        pagination = pagination + 11;

        this.setState({ isLoadingMore: true }); //To show loader at the bottom

        this.getContentJson(previousCount, pagination, true);
      }
    }).bind(this));
  },

  render: function render() {
    var _this = this;

    var newStories = this.state.newStories.map(function (response, index) {

      var searchQuery = 'https://www.google.co.in/search?q=' + response.title;

      return React.createElement(
        'div',
        { key: index },
        React.createElement(
          'div',
          { className: 'content' },
          React.createElement(
            'a',
            { className: 'title', target: '_blank', href: response.url },
            response.title,
            ' '
          ),
          React.createElement(
            'div',
            { className: response.domain ? 'domain' : 'hide' },
            ' (',
            React.createElement(
              'a',
              { href: '#', title: 'Domain' },
              response.domain
            ),
            ')'
          ),
          React.createElement(
            'div',
            { className: 'bottom-content' },
            React.createElement(
              'span',
              null,
              response.score,
              ' ',
              response.score > 1 ? ' points' : ' point',
              ' '
            ),
            React.createElement(
              'span',
              { className: 'author' },
              ' by ',
              response.by
            ),
            React.createElement(
              'span',
              null,
              ' | ',
              _this.convertTime(response.time),
              ' '
            ),
            React.createElement(
              'a',
              { href: searchQuery, target: '_blank', className: 'search-web' },
              ' | ',
              React.createElement(
                'span',
                null,
                'web'
              )
            )
          )
        )
      );
    }, this);

    return React.createElement(
      'div',
      { className: 'content-container' },
      React.createElement(
        'div',
        { className: this.state.isLoading ? '' : 'hide' },
        React.createElement(Spinner, null)
      ),
      newStories,
      React.createElement(
        'div',
        { className: this.state.isLoadingMore ? 'mtop50' : 'hide' },
        React.createElement(Spinner, null)
      )
    );
  }
});

'use strict';

var ShowContent = React.createClass({
  displayName: "ShowContent",

  render: function render() {
    return React.createElement(
      "div",
      { className: "content-container" },
      React.createElement(
        "div",
        { className: "content" },
        "Show Content"
      )
    );
  }
});

'use strict';

var Spinner = React.createClass({
  displayName: "Spinner",

  render: function render() {
    return React.createElement(
      "svg",
      { className: "spinner", width: "50px", height: "50px", viewBox: "0 0 66 66", xmlns: "http://www.w3.org/2000/svg" },
      React.createElement("circle", { className: "path", fill: "none", strokeWidth: "5", strokeLinecap: "round", cx: "33", cy: "33", r: "30" })
    );
  }
});

'use strict';

//Target element to render the components
var target = document.getElementById('main-container');

var Header = React.createClass({
  displayName: 'Header',

  render: function render() {
    return React.createElement('div', { className: 'header' });
  }
});

var Container = React.createClass({
  displayName: 'Container',

  getInitialState: function getInitialState() {
    return {
      renderComponent: React.createElement(NewContent, { source: 'https://hacker-news.firebaseio.com/v0/newstories.json' })
    };
  },

  changeComponent: function changeComponent(newComponent) {
    var renderComponent = this.state.renderComponent;

    this.setState({
      renderComponent: newComponent
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Header, null),
      React.createElement(Menu, { component: this.changeComponent }),
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('a', { className: 'goto-top', href: '#main-container' }),
        this.state.renderComponent
      )
    );
  }
});

//Render the components
React.render(React.createElement(Container, null), target);