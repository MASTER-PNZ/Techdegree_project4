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
const xPlayerDiv = `<div class="player2Name" style="color:black;">Computer Player</div>`;
let currentPlayer = oPlayer;
let gameMoves = 0;
const winBoard = [];
let currentboard = [];

$(function(){
    gamePage.hide();
    gameEndPage.hide();
});

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

// Game play function for player1 - user.
boardSqr.click(function(){

  if(currentPlayer == oPlayer){
    $(this).addClass('box-filled-1 disabled');
    currentPlayer = xPlayer;
    oPlayer.removeClass('active');
    xPlayer.addClass('active');
    gameMoves += 1;
  } else if (currentPlayer == xPlayer) {
    $(this).addClass('box-filled-2 disabled');
    currentPlayer = oPlayer;
    xPlayer.removeClass('active');
    oPlayer.addClass('active');
    gameMoves += 1;
  }
  endGameState();
});

// function for game end state win or draw

function endGameState () {
  if(gameMoves == 9){
    startPage.hide();
    gamePage.hide();
    gameEndPage.addClass('screen-win-tie');
    gameEndMessage.text(`It's a Tie!`);
    gameEndPage.show();
  } else if(){

  }
}

// When user clicks button the page is refreshed for the next game.
$('.button:contains("New game")').click(function(){
  window.location.reload(true);
});


}();
