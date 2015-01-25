
var letterChanger = function (state, currentObject) {
  var currentLetter = currentObject.innerText;
  var originalLetter = currentObject.attributes.getNamedItem("data-original").value;

  if (!state) {
    var randomLetter = RandomTextGenerator(1);
    currentObject.innerText = randomLetter;
  } else {
    currentObject.innerText = originalLetter;
  }
};

var textChanger = function (state) {
  var letterList = $('.under-construction');
  var listLength = letterList.length;
  for (var i = 0; i < listLength; i++) {
    var currentObject = letterList[i];
    var randomId = RandomTextGenerator(6);
    var randomTime = Math.floor((Math.random() * 2000) + 3000);
    var currentLetter = currentObject.innerText;

    if (!currentObject.id) {
      currentObject.id = randomId;
    }

    setTimeout(letterChanger, randomTime, state, currentObject);
  }

  if (state) {
    state = false;
  } else {
    state = true;
  }

  setTimeout(textChanger, 5000, state);
};

var underConstruction =
  '<div style="margin-top: 200px; font-size:24px; text-align: center; width: 700px; margin-left: 100px;" class="matrix-font">' +
  '<span data-original="U" class="under-construction"></span>' +
  '<span data-original="N" class="under-construction"></span>' +
  '<span data-original="D" class="under-construction"></span>' +
  '<span data-original="E" class="under-construction"></span>' +
  '<span data-original="R" class="under-construction"></span>' +
  '<span>&nbsp;</span>' +
  '<span data-original="C" class="under-construction"></span>' +
  '<span data-original="O" class="under-construction"></span>' +
  '<span data-original="N" class="under-construction"></span>' +
  '<span data-original="S" class="under-construction"></span>' +
  '<span data-original="T" class="under-construction"></span>' +
  '<span data-original="R" class="under-construction"></span>' +
  '<span data-original="U" class="under-construction"></span>' +
  '<span data-original="C" class="under-construction"></span>' +
  '<span data-original="T" class="under-construction"></span>' +
  '<span data-original="I" class="under-construction"></span>' +
  '<span data-original="O" class="under-construction"></span>' +
  '<span data-original="N" class="under-construction"></span>' +
  '</div>';

var loadPage = function (data) {
  $('#content-body').empty();
  $('#content-header').empty();

  var responseTitle = $($(data)[1]).html();
  var responseBody = $('#content-body #content', data).html();

  $('#content-body').append(responseBody);
  $('#content-header').append(responseTitle);

  history.pushState({}, '', windowLocation);

  var scrollSettings = {
    cursorcolor: '#00ff00',
    autohidemode: false,
    cursorborder: '0px',
    cursorborderradius: '0px'
  };

  var wrapper = $('#content-body');
  wrapper.niceScroll(scrollSettings);
};

var changeWindow = function (this) {
  $(this).bind('click', function () {
    windowLocation = this.href;
    $.get(this.href)
    .done(function (data) {
      $('#content-body').empty();
      $('#content-header').empty();

      var responseTitle = $($(data)[1]).html();
      var responseBody = $('#content-body #content', data).html();

      $('#content-body').append(responseBody);
      $('#content-header').append(responseTitle);

      history.pushState({}, '', windowLocation);

      var scrollSettings = {
        cursorcolor: '#00ff00',
        autohidemode: false,
        cursorborder: '0px',
        cursorborderradius: '0px'
      };

      var wrapper = $('#content-body');
      wrapper.niceScroll(scrollSettings);

      $('#start-menu-display').css('display', 'none');
    });

    // hideMenus();
    return false;
  };
