let player = 1;
let gameEnd = 0;
let elem = [2, 2, 2 ,2, 2, 2, 2, 2, 2];
let countClicks = 0

function game(value) {
    if(!gameEnd) {
        countClicks++;
        if(player === 1) {
            document.getElementById(value).innerHTML = 'X';
        }
        else {
            document.getElementById(value).innerHTML = '0';
        }
        document.getElementById(value).onclick = null;
        elem[value - 1] = player; 
        checkWinner(player);
        player = 1 - player;
        checkDraw();
    }
}

function checkWinner(user) {
    if(areEqual(elem[0],elem[1], elem[2], user) || 
    areEqual(elem[3],elem[4], elem[5], user) || 
    areEqual(elem[6],elem[7], elem[8], user) ||
    areEqual(elem[0],elem[3], elem[6], user) ||
    areEqual(elem[1],elem[4], elem[7], user) ||
    areEqual(elem[2],elem[5], elem[8], user) ||
    areEqual(elem[0],elem[4], elem[8], user) ||
    areEqual(elem[2],elem[4], elem[6], user)) { 
        document.getElementById("top").innerHTML = "Player " + user + " Wins!";
        document.getElementById("topbutton").innerHTML = "RestartGame";
        document.getElementById("topbutton").setAttribute('onclick','restartGame()');
        gameEnd = 1;
    }
}

function checkDraw() {
    if(countClicks == 9 && gameEnd == 0)
    {
        document.getElementById("top").innerHTML = "Its a draw!";
        document.getElementById("topbutton").innerHTML = "RestartGame";
        document.getElementById("topbutton").setAttribute('onclick','restartGame()');
    }
}

function areEqual(elem1, elem2, elem3, value) {
    if(value === elem1 && elem1 === elem2 && elem2 === elem3)
        return true;
    return false;
}

function restartGame() {
    window.location.reload();
}
