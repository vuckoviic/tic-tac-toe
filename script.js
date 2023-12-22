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

    const chooseSign = function() {
        players[0].sign = prompt(`${players[0].name} choose your sign: `);

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
const getNames = insertingNames(1);
console.log(getNames);