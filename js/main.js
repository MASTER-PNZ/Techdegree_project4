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
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // winning columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // winning diagonals
  [0, 4, 8],
  [2, 4 ,6]
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
  // setting user player to "O".
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

// Computer move function chooses a random available square

let compMove = function() {
  do {
   randomSqr = Math.floor(Math.random() * 9);
 } while ( (currentPlayer == xPlayer && boardSqr.eq(randomSqr).hasClass('disabled')) && gameMoves < 5);
   if (currentPlayer == xPlayer && !boardSqr.eq(randomSqr).hasClass('disabled')) {
    boardSqr.eq(randomSqr).addClass('box-filled-2 disabled');
    currentPlayer = oPlayer;
    xPlayer.removeClass('active');
    oPlayer.addClass('active');
    endGameState();
  }
}

// Game play function for player1 - user.

boardSqr.click(function(){
  if(currentPlayer == oPlayer){
    $(this).addClass('box-filled-1 disabled');
    oPlayer.removeClass('active');
    xPlayer.addClass('active');
    gameMoves += 1;
    endGameState();
    currentPlayer = xPlayer;
  }
  endGameState();
  setTimeout(compMove, 1500);

});

// function that matches winning array and player moves array
const endGameState = () => {
  let winPlayer = '';
  let playerMoves = 0;
  for ( let i = 0; i < boardSqr.length; i +=1) {
    if ( $(boardSqr[i]).hasClass('disabled') ) {
      playerMoves += 1;
    }
  }
  winBoard.forEach( combo => {
    if($(boardSqr[combo[0]]).hasClass('box-filled-1') &&
       $(boardSqr[combo[1]]).hasClass('box-filled-1') &&
       $(boardSqr[combo[2]]).hasClass('box-filled-1') ) {
         winPlayer = 'player1';
         currentPlayer = '';
         gamePage.hide();
         startPage.hide();
         gameEndPage.addClass('screen-win-one');
         gameEndMessage.text(`${$(userInput).val()} Wins!`);
         gameEndPage.show();
    } else if($(boardSqr[combo[0]]).hasClass('box-filled-2') &&
       $(boardSqr[combo[1]]).hasClass('box-filled-2') &&
       $(boardSqr[combo[2]]).hasClass('box-filled-2') ) {
        winPlayer = 'player2'
        currentPlayer = '';
        gamePage.hide();
        startPage.hide();
        gameEndPage.addClass('screen-win-two');
        gameEndMessage.text(`The Computer Wins!`);
        gameEndPage.show();
    } else if ( gameMoves == 5 && winPlayer == '') {
        currentPlayer = '';
        startPage.hide();
        gamePage.hide();
        gameEndPage.addClass('screen-win-tie');
        gameEndMessage.text(`It's a Tie!`);
        gameEndPage.show();
      }
  });
}

// When user clicks button the page is refreshed for the next game.
$('.button:contains("New game")').click(function(){
  window.location.reload(true);
});

}();
