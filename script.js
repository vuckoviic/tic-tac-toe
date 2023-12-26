const Gameboard = (function() {
    let board = ["aleksa", "magarac"]; // change this

    const drawSign = function(row, column, player) {
        // method takes row, column and player. 
        // From player object it finds player's sign
        // and calculates positions relying on row and column
    }

    const getBoard = function() {
        return board;
    }

    return {
        drawSign,
        getBoard
    }
})();

const Game = function() {
    
    const playRound = function(activePlayer) {
        console.log(`${activePlayer.name}'s turn. He / she is controlling ${activePlayer.sign}`);
        drawingSignRow = prompt("Insert table row: ");
        drawingSignColumn = prompt("Insert table column: ");
        drawSign(drawingSignRow, drawingSignColumn, activePlayer.sign)
    }
    
    return playRound
}


const Player = function() {

    const players = [];

    const insertPlayerNames = function() {
        const player1 = {};
        player1.name = prompt("Insert player one's name: ");
        const player2 = {};
        player2.name = prompt("Insert player two's name: ");

        players.push(player1);
        players.push(player2);

        const getPlayerName = function(player) {
            if (player === 1) {
                return players[0].name;
            }
            else if(player === 2) {
                return players[1].name;
            }
            console.log("WORKING!");
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

        function checkSign() {
            alert("ERROR! Invalid input! Try again:");
            chooseSign();
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
        const getActivePlayer = function() {
            return activePlayer;
        }
        return getActivePlayer
    }

    return {
        insertPlayerNames,
        chooseSign,
        setActivePlayer
    }
}

const player = Player();

const insertingNames = player.insertPlayerNames();
const getName1 = insertingNames(1);
const getName2 = insertingNames(2);
console.log(`Player 1 is ${getName1}`);
console.log(`Player 2 is ${getName2}`);

const setSign = player.chooseSign();
const getSign1 = setSign(1);
const getSign2 = setSign(2);
console.log(`${getName1} has a sign ${getSign1}`);
console.log(`${getName2} has a sign ${getSign2}`);

const settingActivePlayer = player.setActivePlayer();
const getActivePlayer = settingActivePlayer();
console.log(`Active player is ${getActivePlayer.name}`);