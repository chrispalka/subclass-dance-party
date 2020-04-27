$(document).ready(function() {
  window.dancers = [];
  window.distance = [];
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
      $('.gnomeClick').on('click', function() {
        $('#gnome-sound')[0].play();
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
      $('.fairyClick').on('click', function() {
        $('#fairy-sound')[0].play();
      });
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
  });

  $('.flipButton').on('click', function(event) {
    var spans = document.getElementsByTagName('span');
    $(spans[randomNum(0, spans.length)]).css({left: '50%', top: '50%'}).toggleClass('flip');
    $(spans[randomNum(0, spans.length)]).css({left: '50%', top: '50%'}).toggleClass('flip');
  });

  $('.lineUpButton').on('click', function(event) {
    var leftPositions = [];
    var leftTotal = 0;
    var spans = document.getElementsByTagName('span');
    for (var j = 0; j < spans.length; j++) {
      leftPositions.push(Math.round($(spans[j]).offset().left));
    }
    console.log(leftPositions.sort(arrSort));
    // console.log(leftPositions.sort(arrSort));
    // for (var q = 0; q < distances.length; q++) {

    // }
    var numberOfDancers = window.dancers.length;
    var equalDistance = Math.round(100 / numberOfDancers);
    for (var i = 0; i < numberOfDancers; i++) {
      var currentDancer = window.dancers[i];
      currentDancer.lineUp();
    }
    var count = 0;
    for (var j = 0; j < spans.length; j++) {
      $(spans[j]).css({left: (equalDistance * count) + '%'});
      count++;
    }
  });

  //interaction flip
  // $('.flipButton').on('click', function(event) {
  //   var together = [];
  //   for (var i = 0; i < window.dancers.length; i++) {
  //     var dancerClass = $(window.dancers[i].$node).attr('class');
  //     if (dancerClass === 'fairyDancer') {
  //       together.push(window.dancers[i]);
  //     }
  //     if (dancerClass === 'butterflyDancer') {
  //       together.push(window.dancers[i]);
  //     }
  //     if (together.length === 2) {
  //       break;
  //     }
  //   }
  //   var top = $('body').height() - 300;
  //   var left = $('body').width() - 250;
  //   for (var j = 0; j < together.length; j++) {
  //     together[i].flip(top, left);
  //   }
  //   console.log(together);
  // });

  // $('.butterflyDancerImg').on('click', function(event){
  //   var min = Math.pow(5000, 2);
  //   var target, index;
  //   $this = $(this);
  //   for (var i = 0; i < window.dancers.length; i++) {
  //     if(window.dancers[i] !== $(this)) {
  //       var dist = Math.pow(($(this).top - window.dancers[i].top),2) + Math.pow(($(this).left - window.dancers[i].left), 2);
  //       if(dist < min && dist !== 0) {
  //         min = dist;
  //         index = i;
  //         target = window.dancers[i];
  //       }
  //     }
  //   }
  //   target.animate({'top':$(this).css('top'), 'left':$(this).css('left')});
  // });

  // console.log(window.dancers);
  // $('.flipButton').on('click', function(event) {
  //   var together = [];
  //   for (var i = 0; i < window.dancers.length; i++) {
  //     together.push(window.dancers[i]);
  //   }
  //   // var dancerOne = together[0];
  //   // var dancerTwo = together[1];
  //   // var dancerOneDistance = $('')
  //   console.log(together);

  //   var dancer1 = together[0].$node;
  //   console.log(dancer1);
  //   var dancer2 = together[1].$node;
  //   var distanceLeft = Math.abs(dancer1.left - dancer2.left);
  //   console.log(distanceLeft);
  //   var distanceTop = Math.abs(dancer1.top - dancer2.top);
  //   var bringTogether = function(dancer1, dancer2) {
  //     dancer1.left = distanceLeft + '%';
  //     dancer2.left = distanceLeft + '%';
  //     dancer1.top = distanceTop + '%';
  //     dancer2.top = distanceTop + '%';
  //     return dancer1.left, dancer1.top
  //   };
  // });

  setInterval(function () {
    var positions = [];
    var distances = [];
    var spans = document.getElementsByTagName('span');
    console.log(spans);
    for (var i = 0; i < window.dancers.length; i++) {
      var top = window.dancers[i].$node.position().top;
      var left = window.dancers[i].$node.position().left;
      positions.push({top: top, left: left});
      for (var j = 0; j < positions.length; j++) {
        for (var k = 0; k < positions.length - 1; k++) {
          if (j !== k) {
            var topDifference = Math.pow((positions[j].top - positions[k].top), 2);
            var leftDifference = Math.pow((positions[j].left - positions[k].left), 2);
            distances.push({dancer: window.dancers[i], index1: j, index2: k, distance: Math.pow(topDifference + leftDifference, 0.5)});
          }
        }
      }
    }
    // console.log(positions);
    // console.log(distances);
    for (var m = 0; m < distances.length; m++) {
      if (distances[m].distance > 50) {

        //flip(distances[m].index1, distances[m].index2);
      }
    }
  }, 3000);
});

var randomNum = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var arrSort = function(a, b) {
  return b - a;
};
