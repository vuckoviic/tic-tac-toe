const Gameboard = (function() {
    let board = ["aleksa", "magarac"];

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

    return {
        insertPlayerNames,
        chooseSign
    }
}

const play = Player();

const insertingNames = play.insertPlayerNames();
const getName1 = insertingNames(1);
const getName2 = insertingNames(2);
console.log(`Player 1 is ${getName1}`);
console.log(`Player 2 is ${getName2}`);

const setSign = play.chooseSign();
const getSign1 = setSign(1);
const getSign2 = setSign(2);
console.log(`${getName1} has a sign ${getSign1}`);
console.log(`${getName2} has a sign ${getSign2}`);