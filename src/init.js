$(document).ready(function() {
  window.dancers = [];
  $('.clear').on('click', function(event) {
    $('body').find('span').remove();
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
});

var randomNum = function (min, max) {
  return Math.random() * (max - min) + min;
};

