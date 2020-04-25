$(document).ready(function() {
  window.dancers = [];
  $('.clear').on('click', function(event) {
    $('body').find('span').remove();
  });
  $('.partyButton').on('click', function() {
    $('.title').show(1200);
    $('.links').show(1400);
    $('.intro').hide(1200);
    $('#forest-soundtrack')[0].play();
  });
  $('.muteButton').on('click', function() {
    var mute = $('#forest-soundtrack').prop('muted');
    $('#forest-soundtrack').prop('muted', !mute);
    if (!mute) {
      $('.muteButton').text('Unmute');
    } else {
      $('.muteButton').text('Mute');
    }
  });
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    // console.log(dancerMakerFunctionName);

    switch (dancerMakerFunctionName) {
    case 'MakeDancer':
    case 'MakeBlinkyDancer':
      var dancer = new dancerMakerFunction(
        randomNum(50, 70),
        randomNum(30, 50),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
      $('body').append(dancer.$node);
      break;
    case 'MakeGnomeDancer':
      var dancer = new dancerMakerFunction(
        randomNum(50, 70),
        randomNum(30, 50),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
      $('body').append(dancer.$node);
      $('#gnome-sound')[0].play();
      $('.gnomeDancerImg').animate({
        height: '200px',
        width: '100px',
      });
      break;
    case 'MakeFairyDancer':
      var dancer = new dancerMakerFunction(
        randomNum(30, 50),
        randomNum(30, 50),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
      $('body').append(dancer.$node);
      $('#fairy-sound')[0].play();
      break;
    case 'MakeButterflyDancer':
      var dancer = new dancerMakerFunction(
        randomNum(30, 50),
        randomNum(30, 50),
        Math.random() * 1000
      );
      window.dancers.push(dancer);
      $('body').append(dancer.$node);
      break;
    }
    console.log(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  //interaction flip
  $('.flipButton').on('click', function(event) {
    var together = [];
    for (var i = 0; i < window.dancers.length; i++) {
      var dancerClass = $(window.dancers[i].$node).attr('class');
      if (dancerClass === 'MakeFairyDancer') {
        together.push(window.dancers[i]);
      }
      if (dancerClass === 'MakeButterflyDancer') {
        together.push(window.dancers[i]);
      }
      if (together.length === 2) {
        break;
      }
    }
    var top = $('body').height() - 300;
    var left = $('body').width() - 250;
    for (var j = 0; j < together.length; j++) {
      together[i].flip(top, left);
    }
  });
});

var randomNum = function (min, max) {
  return Math.random() * (max - min) + min;
};

