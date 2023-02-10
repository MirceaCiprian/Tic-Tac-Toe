let player = 1;
let gameEnd = 0;
let elem = [2, 2, 2 ,2, 2, 2, 2, 2, 2];
let countClicks = 0

function game(value) {
    if(!gameEnd) {
        countClicks++;
        if(player === 1)
        {
            document.getElementById(value).innerHTML = 'X';
            document.getElementById(value).onclick = null;
            player = 0;
            elem[value - 1] = 1; 
            checkWinner();
        }
        else
        {
            document.getElementById(value).innerHTML = '0';
            document.getElementById(value).onclick = null;
            player = 1;
            elem[value - 1] = 0; 
            checkWinner();
        }
    }
}

function checkWinner() {
    if(areEqual(elem[0],elem[1], elem[2], 1) || 
    areEqual(elem[3],elem[4], elem[5], 1) || 
    areEqual(elem[6],elem[7], elem[8], 1) ||
    areEqual(elem[0],elem[3], elem[6], 1) ||
    areEqual(elem[1],elem[4], elem[7], 1) ||
    areEqual(elem[2],elem[5], elem[8], 1) ||
    areEqual(elem[0],elem[4], elem[8], 1) ||
    areEqual(elem[2],elem[4], elem[6], 1))
    { 
        document.getElementById("top").innerHTML = "Player 1 Wins!";
        document.getElementById("topbutton").innerHTML = "RestartGame";
        document.getElementById("topbutton").setAttribute('onclick','restartGame()');
        gameEnd = 1;
    }

    if(areEqual(elem[0],elem[1], elem[2], 0) || 
    areEqual(elem[3],elem[4], elem[5], 0) || 
    areEqual(elem[6],elem[7], elem[8], 0) ||
    areEqual(elem[0],elem[3], elem[6], 0) ||
    areEqual(elem[1],elem[4], elem[7], 0) ||
    areEqual(elem[2],elem[5], elem[8], 0) ||
    areEqual(elem[0],elem[4], elem[8], 0) ||
    areEqual(elem[2],elem[4], elem[6], 0))
    { 
        document.getElementById("top").innerHTML = "Player 0 Wins!";
        document.getElementById("topbutton").innerHTML = "RestartGame";
        document.getElementById("topbutton").setAttribute('onclick','restartGame()');
        gameEnd = 1;
    }
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

function restartGame()
{
    window.location.reload();
}
