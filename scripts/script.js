console.log("welcome to TicTacToe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let audioGameover = new Audio("gameover.mp3");
let gameover = false;

let turn = 'x';

function changeTurn() {
     if (turn === 'x') turn = '0';
     else turn = 'x';
}


//win check
const checkWin = () => {
     let wins = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
     ]


     for (let it of wins) {
          if ((boxtext[it[0]].innerText === boxtext[it[1]].innerText) && (boxtext[it[1]].innerText === boxtext[it[2]].innerText) && (boxtext[it[0]].innerText !== "")) {
               document.getElementById('currentInfo').innerText = boxtext[it[0]].innerText + " won";
               audioGameover.play();
               gameover = true;
               document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px";
          }
          else {
               gameover = false;
          }
     }
}


//game logic
let boxes = document.getElementsByClassName('box');
let boxtext = document.getElementsByClassName('boxtext');

for (let i = 0; i < 9; i++) {
     boxes[i].addEventListener('click', function () {
          boxtext[i].innerText = turn;
          checkWin();
          if (gameover === false) {
               changeTurn();
               audioTurn.play();
               document.getElementById('currentInfo').innerText = "turn for " + turn;
          }

     });
}

let reset = document.getElementById('reset');
reset.addEventListener('click', function () {
     for (let i of boxtext) {
          i.innerText = "";
     }
     gameover = false;
     turn = 'x';
     document.getElementById('currentInfo').innerText = "turn for " + turn;
     document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px";

});

 
