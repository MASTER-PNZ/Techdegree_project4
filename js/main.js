// An IIFE to encapsulate the Tic-Tac-Toe Program in module format.

!function() {

//constants variables for page divs

const startPage = $('#start');
const gamePage = $('#board');
const gameEndPage = $('#finish');

$(function(){
    gamePage.hide();
    gameEndPage.hide();
});

$('#user_name').focus();
//function to start game and validate user input.

$('.button').on("click", function (){
  const player1Name =  $('#user_name').val();
  if (player1Name == ""){
    return false;
  } else if (player1Name.length > 0){
  startPage.hide();
  gamePage.show();
  $('#player1').after(`<div class="player1Name" style="color:black;">${player1Name}</div>`);
  }
});

$('#player1').addClass("active");



// variables for html player elements

// Game play functionality

function gamePlay(){


}

// Classes for Players and their moves

class player {
  constructor() {

  }
}

// Game Board array class

class gameBoard {
  constructor() {

  }
}

// function for game end state win or draw

function endGameState () {

}

// function for box hover property

// function for buttons to add and name inputs

function button () {}

// function for computer player logic

function computerLogic() {}



//


}();
