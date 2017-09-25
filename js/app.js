// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  /*
  Users should be able to click on any empty box to make a move.
  Every move should alternate between marking an X and O (the two players).
  A user should not be able to claim a box that has already been claimed for X or O.
  Users should be able to click a "reset" button to clear all X's and O's from the board and restart the game.
  */

  //So click function that appends X or O on a div tag

var computer;
var player = prompt("Are you Xs' or O's? (Input X/O)");
console.log('Player chose', player)

if(player === 'x' || player === 'X') {
  computer = 'O';
} else if (player === 'o' || player === 'O') {
  computer = 'X';
}

var name = prompt('What is your name?');

var boxes = [];

var boxesState = {
  '1': 'empty',
  '2': 'empty',
  '3': 'empty',
  '4': 'empty',
  '5': 'empty',
  '6': 'empty',
  '7': 'empty',
  '8': 'empty',
  '9': 'empty'
}

  var checkifAllBoxesAreFilled = function(){
      for(var property in boxesState) {
        if(boxesState[property] !== 'empty') {
          return true
        } else {
          return false;
        }
      }
  }


var checkIfSomeoneWon = function(winConditions){
  var winConditions = [
      [1, 2, 3], // first row and so on..
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7], // first column and so on...
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
  ];
  for(var i = 0; i < winConditions.length; i++) {

    for(var a = 0; a > winConditions[i].length; a--) {
        //  console.log(winConditions[boxesState[i][a]])
      if(winConditions[i][a] === boxesState[i][a] && boxesState[i][a] === 'X') {
        console.log('Game won by X');
      } else if(winConditions[i][a] === boxesState[i][a] && boxesState[i][a] === 'O') {
          console.log('Game won by O');
      } else if(winConditions[i][a] !== boxesState[i][a]) {
          console.log('Tie');
      }
    }
  }
  // itereate through winConditions
  // and check each property in boxesState to see if they all match
      //if array at i === 'x' or 'o'
  // run through every possible combination and check to see if there are three X's or O's in arow
}

  function randomChoice() {
    console.log('function', ' randomChoice');

    // choose a random number between1 and 9
    var computerChoice = Math.floor(Math.random() * 9);

    // check var boxes for it's state
    if (boxesState[computerChoice] === 'empty'){

      //CHECK TO SEE IF ANYONE WON
     checkIfSomeoneWon()

      if(boxesState[computerChoice] === "empty") {
        //If the state of the boxes at the computerChoice index is empty
        //console.log('box is empty')
        if(computer === 'X') {
          //if computer is X
          console.log('box is empty and computer is x, appending X to ' + computerChoice)
            boxesState[computerChoice] = 'X'
            //append computerChoice to box
            $('div#' + computerChoice).append('X')
        } else if (computer === 'O') {
          console.log('box is empty and computer is O, appending O to ' + computerChoice)
          boxesState[computerChoice] = 'O'
          $('div#' + computerChoice).append('O')
        }
      }
    } else {

      // rerun randomChoice until all boxes are filled
      var allBoxesAreFilled = checkifAllBoxesAreFilled()

      if (allBoxesAreFilled){
        //game is over
        //Alert('Game over!')
        return;
      } else {
          randomChoice();
      }
    }


    // and change accordingly


  }

  function boxClick() {

    console.log('function', ' boxClick');

    var boxes = [...document.querySelectorAll('.col-md-4')];

      boxes.forEach((boxSlot) => {
        //for each slot in the box, listen for clicks
        boxSlot.addEventListener(`click`, (evt) => {
          //on each click event on the boxSlot, append this
          //console.log('box clicked', evt.target.attributes[1].value);

          var id = evt.target.attributes[1].value

          //console.log('clicked box is', boxesState[id])

          if(boxesState[id] === "empty") {
            //console.log('box is empty')
            if(player === 'X' || player === 'x') {
              console.log('box is empty and player is x, appending X to' + id)
                boxesState[id] = 'X'
                $('div#' + id).append('X')
            } else if (player === 'O' || player === 'o') {
              console.log('box is empty and player is O, appending O to' + id)
              boxesState[id] = 'O'
              $('div#' + id).append('O')
            }
          } else if (boxesState[id] === 'X') {
            if(player === 'X' || player === 'x') {
              boxesState[computerChoice] = 'X'
              $('div#' + id).append('X')
            } else if (player === 'O' || player === 'o') {
                boxesState[computerChoice] = 'O'
                $('div#' + id).append('O')
            }
          } else if (boxesState[id] === 'O'){
            if(player === 'X' || player === 'x') {
              boxesState[computerChoice] = 'X'
              $('div#' + id).append('X')
            } else if(player === 'O' || player === 'o') {
              boxesState[computerChoice] = 'O'
              $('div#' + id).append('O')
            }
          }

          setTimeout(randomChoice, 500);
        });
      });
  }

boxClick();

//if box is equal to 1
function resetGame() {
  var boxSlot = $('.box');
  // for(var prop in boxesState) {
  //   if(boxesState[prop] === 'X' || boxesState[prop] === 'O') {
    //  boxesState[prop] = 'empty';
      boxSlot.text('');
      boxSlot.removeClass('X');
      boxSlot.removeClass('O');
      console.log('Class removed')
  //  }
  //}
};

$('.btn').on('click', function() {
  resetGame();
});

}); //End of document ready function
