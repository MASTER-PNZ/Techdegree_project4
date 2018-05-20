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
//function to start game

$('.button').on("click", function (){
  startPage.hide();
  gamePage.show();
  const player1Name =  $('#user_name').val();
  $('#player1').append(player1Name);
});

$('#player1').addClass("active");

$('#player2').addClass("active");
$('#player1').removeClass("active");

// variables for html player elements

// Game play functionality

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
