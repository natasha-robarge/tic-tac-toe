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

var player = prompt("Are you Xs' or O's? (Input X/O)");
var computer;

  if(player === 'x' || player === 'X') {
    computer = 'O';
  } else if (player === 'o' || player === 'O') {
    computer = 'X';
  }

  function boxClick() {
    var boxes = [...document.querySelectorAll('.col-md-4')];
      boxes.forEach((boxSlot) => {
        //for each slot in the box, listen for clicks
        boxSlot.addEventListener(`click`, (evt) => {
          //on each click event on the boxSlot, append this
          if(player === 'X' || player === 'x') {
            boxSlot.append('X');
          } else if(player === 'O' || player === 'o') {
            boxSlot.append('O');
          }
        });
      });
  }

boxClick();

    function randomChoice() {
      var computerChoice = Math.floor(Math.random()) * 9;
      var boxes = [...document.querySelectorAll('.col-md-4')];
      //go through for loop, check if computerChoice at that index is equal to a box
      //check whether or not it already exists
        while(boxes[computerChoice] === 0) {


        }
    }

}); //End of document ready function
