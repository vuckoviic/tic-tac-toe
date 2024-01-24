const Gameboard = (function() {
    let board = [];
    const rows = 3;
    const columns = 3

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
          board[i].push({taken: false, sign: ""});
        }
    }

    const drawSign = function(activePlayer) {
        console.log(`${activePlayer.name}'s turn. He / she is controlling ${activePlayer.sign}`);
        drawingSignRow = prompt(`${activePlayer.name} please insert table row:`);
        drawingSignRow = parseInt(drawingSignRow);
        
        drawingSignColumn = prompt(`${activePlayer.name} please insert table column: `);
        drawingSignColumn = parseInt(drawingSignColumn);

        if (board[drawingSignRow-1][drawingSignColumn-1].taken === true) {
            alert("That field is already taken! Try again:");
            drawSign(activePlayer);
        }
        
        else {
            board[drawingSignRow-1][drawingSignColumn-1].taken = true;
            board[drawingSignRow-1][drawingSignColumn-1].sign = activePlayer.sign; 
            
            console.log(typeof(board[drawingSignRow-1][drawingSignColumn-1]));
            console.log(board[drawingSignRow-1][drawingSignColumn-1].taken);
            console.log(board[drawingSignRow-1][drawingSignColumn-1].sign);   
            console.log(getBoard());
        }
    }

    const getBoard = function() {
        return board;
    }

    const checkForEnd = function() {

        for (let i = 0; i < rows; i++) {

            rowIncomplete = false;

            for (var k = 0; k < columns; k++) { 
                if (board[i][k].taken === false) {
                    console.log("Query not accepted. This cell is not taken.");
                    rowIncomplete = true;
                    break;
                }
                else if (board[i][k].taken === true) {
                    console.log("This cell is taken. Continueing...");
                    // continue;
                }
            }

            console.log(`i is now: ${i}`);
            console.log(`k is now: ${k}`);

            if (rowIncomplete) {
                console.log("Query not accepted. This row has some cells not taken.");
                break;
            }
            
            if (i == rows - 1) {
                console.log("GAME OVER! ALL CELLS ARE TAKEN!");
                return true;
            }
        }

        console.log(getBoard());
    }

    const checkForWinner = function() {
        
        for (let i = 0; i < columns; i++) {
            console.log(`Cell 1${i + 1} has a sign of ${board[0][i].sign}`);
        }
        
        for (let i = 0; i < columns; i++) {
            console.log(`Cell 2${i + 1} has a sign of ${board[1][i].sign}`);
        }
        
        for (let i = 0; i < columns; i++) {
            console.log(`Cell 3${i + 1} has a sign of ${board[2][i].sign}`);
        }

        if (board[0][0].sign === board[0][1].sign && board[0][0].sign === board[0][2].sign && board[0][0].sign !== "") {
            return board[0][0].sign;
        }

        else if (board[1][0].sign === board[1][1].sign && board[1][0].sign === board[1][2].sign && board[1][0].sign !== "") {
            return board[1][0].sign;
        }

        else if (board[2][0].sign === board[2][1].sign && board[2][0].sign === board[2][2].sign && board[2][0].sign !== "") {
            return board[2][0].sign;
        }

        if (board[0][0].sign === board[1][0].sign && board[0][0].sign === board[2][0].sign && board[0][0].sign !== "") {
            return board[0][0].sign;
        }
        
        else if (board[0][1].sign === board[1][1].sign && board[0][1].sign === board[2][1].sign && board[0][1].sign !== "") {
            return board[0][1].sign;
        }

        else if (board[0][2].sign === board[1][2].sign && board[0][2].sign === board[2][2].sign && board[0][2].sign !== "") {
            return board[0][2].sign;
        }

        if (board[0][0].sign === board[1][1].sign && board[0][0].sign === board[2][2].sign && board[0][0].sign !== "") {
            return board[0][0].sign;
        }

        else if (board[0][2].sign === board[1][1].sign && board[0][2].sign === board[2][0].sign && board[0][2].sign !== "") {
            return board[0][2].sign;
        }
    }

    return {
        drawSign,
        getBoard,
        checkForEnd,
        checkForWinner
    }

})();

const GameController = function() {
    
    const { insertPlayerNames, chooseSign, setActivePlayer, getActivePlayer, changeActivePlayer } = Player();

    const { drawSign, getBoard, checkForEnd, checkForWinner } = Gameboard;

    const playRound = function() {
        let activePlayer = getActivePlayer();
        drawSign(activePlayer);
        checkForEnd();
        console.log(checkForEnd());
        activePlayer = changeActivePlayer();
    }
    
    return { 
        playRound,
        insertPlayerNames,
        getActivePlayer,
        chooseSign,
        setActivePlayer,
        drawSign,
        getBoard,
        checkForEnd,
        checkForWinner
    }
}


const Player = function() {

    const players = [];

    const insertPlayerNames = function() {
        const player1 = {};
        player1.name = document.querySelector("#player1name").value;
        const player2 = {};
        player2.name = document.querySelector("#player2name").value;

        players.push(player1);
        players.push(player2);
    
        const getPlayerName = function(player) {
            if (player === 1) {
                console.log(`Player 1 is ${players[0].name}`);
                return players[0].name;
            }
            else if(player === 2) {
                console.log(`Player 2 is ${players[1].name}`);
                return players[1].name;
            }
        }

        return getPlayerName
    }

    let player1sign;
   
    const chooseSign = function() {

        player1sign = prompt(`${players[0].name} choose your sign: `);
        
        if (player1sign === "X" || player1sign === "O" || player1sign === "x" || player1sign === "o") {
            players[0].sign = player1sign;
            players[0].sign = players[0].sign.toUpperCase();
        }

        else {
            checkSign();
        }

        if (players[0].sign === "X" || players[0].sign === "x") {
            players[1].sign = "O";
        }
        else if (players[0].sign === "O" || players[0].sign === "o"){
            players[1].sign = "X";
        }

        console.log(`${getPlayerName(1)} has a sign ${getPlayerSign(1)}`);
        console.log(`${getPlayerName(2)} has a sign ${getPlayerSign(2)}`);

        function checkSign() {
            alert("ERROR! Invalid input! Try again:");
            chooseSign();
        }

        function getPlayerName(player) {
            if (player === 1) {
                return players[0].name;
            }
            else if (player === 2){
                return players[1].name;
            }            
        }

        function getPlayerSign(player) {
            if (player === 1) {
                return players[0].sign;
            }
            else if (player === 2){
                return players[1].sign;
            }
        }
        return getPlayerSign
    }

    let activePlayer;

    const setActivePlayer = function() {
        for (let i = 0; i < players.length; i++) {
            if (players[i].sign === "X") {
                activePlayer = players[i];
            }
        }
        return activePlayer;
    }

    const getActivePlayer = function() {
        console.log(`Active player is ${activePlayer.name}`);
        return activePlayer;
    }

    const changeActivePlayer = function() {
        
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        }
        
        else {
            activePlayer = players[0];
        }
        
        if (game.checkForEnd() === true) {
            console.log("It's a tie!");
        }
        
        else if (game.checkForWinner() === "X" || game.checkForWinner() === "O") {
            
            console.log("We have a winner! Game over!!!");
            
            let winner;
            
            for (let i = 0; i < players.length; i++) {
                if (players[i].sign === game.checkForWinner()) {
                    winner = players[i];
                }
            }
        
            console.log(`Winner is ${winner.name}. His sign is ${game.checkForWinner()}`);
        }

        else {
            game.playRound();
        }
        
        return activePlayer;
    }

    return {
        insertPlayerNames,
        chooseSign,
        setActivePlayer,
        getActivePlayer,
        changeActivePlayer
    }
}

const game = GameController();

// const gettingPlayerName = game.insertPlayerNames();
// gettingPlayerName(1);
// gettingPlayerName(2);
// game.chooseSign();
// game.setActivePlayer();
// game.getActivePlayer();
// game.playRound();
// console.log(game.getBoard());

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const dialog = document.getElementsByTagName("dialog")[0];
const dialogClose = document.getElementById("exit-dialog");

const firstPlayersNameInput = document.getElementById("player1name");
const secondPlayersNameInput = document.getElementById("player2name");
const player1ChooseYourSign = document.getElementById("player1ChooseYourSign");

const chooseSignButtons = document.getElementsByClassName("chooseSignButton");
const chooseSignButton1 = chooseSignButtons[0];
const chooseSignButton2 = chooseSignButtons[1];

const dialogPlayButton = document.getElementById("dialogPlayButton");

dialogPlayButton.addEventListener('click', () => {
    const settingPlayerNames = game.insertPlayerNames();
    console.log(settingPlayerNames(1));
    console.log(settingPlayerNames(2));
    dialog.close();
});

dialogClose.addEventListener("click", () => {
    dialog.close();
    firstPlayersNameInput.value = "";
    secondPlayersNameInput.value = "";
    chooseSignButton1.classList.remove("selected-sign");
    chooseSignButton2.classList.remove("selected-sign");
    chooseSignButton1.classList.add("not-selected-sign");
    chooseSignButton2.classList.add("not-selected-sign");
    location.replace("index.html")
});

firstPlayersNameInput.addEventListener("change", () => {
    player1ChooseYourSign.innerText = `${firstPlayersNameInput.value} choose your sign:`;
})

chooseSignButton1.addEventListener("click", () => {
    if (chooseSignButton2.classList.contains("selected-sign")) {
        chooseSignButton2.classList.remove("selected-sign");
        chooseSignButton2.classList.add("not-selected-sign");
        chooseSignButton1.classList.remove("not-selected-sign");
        chooseSignButton1.classList.add("selected-sign");
    }

    else if (chooseSignButton1.classList.contains("not-selected-sign")) {
        chooseSignButton1.classList.remove("not-selected-sign");
        chooseSignButton1.classList.add("selected-sign");
    }
    console.log(chooseSignButton1.classList);
});

chooseSignButton2.addEventListener("click", () => {
    if (chooseSignButton1.classList.contains("selected-sign")) {
        chooseSignButton1.classList.remove("selected-sign");
        chooseSignButton1.classList.add("not-selected-sign");
        chooseSignButton2.classList.remove("not-selected-sign");
        chooseSignButton2.classList.add("selected-sign");
    }

    else if (chooseSignButton2.classList.contains("not-selected-sign")) {
        chooseSignButton2.classList.remove("not-selected-sign");
        chooseSignButton2.classList.add("selected-sign");
    }
    console.log(chooseSignButton2.classList);
});

const ScreenController = function() {
    
    const updateScreen = function() {

    }
    const clickHandlerBoard = function() {

    }

    return {
        updateScreen,
        clickHandlerBoard
    }
}