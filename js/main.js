// An IIFE to encapsulate the Tic-Tac-Toe Program in module format.

!function() {
//constants variables for page divs
const startPage = $('#start');
const gamePage = $('#board');
const gameEndPage = $('#finish');
const userInput = $('#user_name');
const boardSqrs = $('.boxes');
const oPlayer = $('#player1');
const xPlayer = $('#player2');
const xPlayerDiv = `<div class="player2Name" style="color:black;">Computer Player</div>`;
let currentPlayer = oPlayer;

$(function(){
    gamePage.hide();
    gameEndPage.hide();
});

userInput.focus();
//function to start game and validate user input.

$('.button').on("click", function (){
  let player1Name =  userInput.val();
  let oPlayerDiv =`<div class="player1Name" style="color:black;">${player1Name}</div>`;
  if (player1Name == ""){
    userInput.css('border-color', 'red');
    return false;
  } else if (player1Name.length > 0){
  startPage.hide();
  gamePage.show();
  }
  oPlayer.after(oPlayerDiv);

});

currentPlayer.addClass('active');

// Background Hover function

boardSqrs.mouseover(function(event){
  if(currentPlayer == oPlayer){
    event.target.style.backgroundImage = 'url("./img/o.svg")';
  } else if (currentPlayer == xPlayer) {
    event.target.style.backgroundImage = 'url("./img/x.svg")';
  }
});

boardSqrs.mouseout(function(event){
  if(currentPlayer.hasClass('active')){
    event.target.style.backgroundImage = '';
  }
});



// Game play functionality

function gamePlay(){
  if(currentPlayer == oPlayer) {
    boardSqrs.on('click', function(event){
      event.target.addClass('box-filled-1');
    })
  }
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



// function for computer player logic

function computerLogic() {}



//


}();
