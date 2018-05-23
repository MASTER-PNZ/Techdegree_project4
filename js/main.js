// An IIFE to encapsulate the Tic-Tac-Toe Program in module format.

!function() {
//constants variables for page divs
const startPage = $('#start');
const gamePage = $('#board');
const gameEndPage = $('#finish');
const gameEndMessage = $('.message');
const userInput = $('#user_name');
const boardSqrs = $('.boxes');
const boardSqr = $('.box');
const oPlayer = $('#player1');
const xPlayer = $('#player2');
let currentPlayer = oPlayer;
let gameMoves = 0;
let randomSqr;
const winBoard = [
  // winning rows
  [boardSqr[0], boardSqr[1], boardSqr[2]],
  [boardSqr[3], boardSqr[4], boardSqr[5]],
  [boardSqr[6], boardSqr[7], boardSqr[8]],
  // winning columns
  [boardSqr[0], boardSqr[3], boardSqr[6]],
  [boardSqr[1], boardSqr[4], boardSqr[7]],
  [boardSqr[2], boardSqr[5], boardSqr[8]],
  // winning diagonals
  [boardSqr[0], boardSqr[4], boardSqr[8]],
  [boardSqr[2], boardSqr[4], boardSqr[6]]
];
let player1Board = [];
let player2Board = [];

$(function(){
    gamePage.hide();
    gameEndPage.hide();
});
// adds focus to user input
userInput.focus();

//function to start game and validate user input.

$('.button').on("click", function (){
  let player1Name =  userInput.val();
  let oPlayerDiv =`<div class="player1Name" style="color:black;">${player1Name}</div>`;
  if (player1Name == "") {
    userInput.css('border-color', 'red');
    return false;
  } else if (player1Name.length > 0) {
      startPage.hide();
      gamePage.show();
  }
  oPlayer.after(oPlayerDiv);
  //setting user player to "O".
  oPlayer.addClass('active');
});

// Background-Image Hover functions for board squares.

boardSqr.mouseover(function(){
  if($(this).hasClass('disabled')){
    return;
  }
  if(currentPlayer == oPlayer){
    $(this).css('background-image', 'url("./img/o.svg")');
  } else if (currentPlayer == xPlayer) {
    $(this).css('background-image',  'url("./img/x.svg")');
  }
});

boardSqr.mouseout(function(){
  if(currentPlayer.hasClass('active')){
      $(this).css('background-image', '');
  }
});

let compMove = function() {
  do {
   randomSqr = Math.floor(Math.random() * 9);
 } while ( currentPlayer == xPlayer && boardSqr.eq(randomSqr).hasClass('disabled') );
   if (currentPlayer == xPlayer && !boardSqr.eq(randomSqr).hasClass('disabled')) {
    boardSqr.eq(randomSqr).addClass('box-filled-2 disabled');
    currentPlayer = oPlayer;
    xPlayer.removeClass('active');
    oPlayer.addClass('active');
    gameMoves += 1;
    player2Board.push(boardSqr.eq(randomSqr));
  }
}
// Game play function for player1 - user.
boardSqr.click(function(){
  if(currentPlayer == oPlayer){
    $(this).addClass('box-filled-1 disabled');
    currentPlayer = xPlayer;
    oPlayer.removeClass('active');
    xPlayer.addClass('active');
    gameMoves += 1;
    player1Board.push($(this));
  }

  setTimeout(compMove, 1500);
  endGameState();
});


// function for game end state win or draw

function endGameState () {
  if(gameMoves == 9){
    currentPlayer = '';
    startPage.hide();
    gamePage.hide();
    gameEndPage.addClass('screen-win-tie');
    gameEndMessage.text(`It's a Tie!`);
    gameEndPage.show();
  } // else if (winBoard.length.hasClass('box-filled-1')){
  //   gamePage.hide();
  //   startPage.hide();
  //   gameEndPage.addClass('screen-win-one');
  //   gameEndMessage.text(`${player1Name} Wins!`);
  //   gameEndPage.show();
  // }
}

// When user clicks button the page is refreshed for the next game.
$('.button:contains("New game")').click(function(){
  window.location.reload(true);
});


}();
