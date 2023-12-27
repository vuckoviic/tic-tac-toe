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
        drawingSignRow = prompt("Insert table row: ");
        drawingSignRow = parseInt(drawingSignRow);
        
        // fix ifs later (they don't work correctly)

        // if (drawingSignRow === "NaN" && drawingSignRow > 3) {
        //     drawingSignRow = alert("ERROR! Invalid input. Try again:");
        //     playRound(activePlayer);
        // }
        
        drawingSignColumn = prompt("Insert table column: ");
        drawingSignColumn = parseInt(drawingSignColumn);

        // if (drawingSignColumn === "NaN" && drawingSignColumn > 3) {
        //     drawingSignColumn = alert("ERROR! Invalid input. Try again:");
        //     playRound(activePlayer);
        // }

        board[drawingSignRow][drawingSignColumn].taken = true;
        board[drawingSignRow][drawingSignColumn].sign = activePlayer.sign;
        
    }

    const getBoard = function() {
        return board;
    }

    return {
        drawSign,
        getBoard
    }
})();

const GameController = function() {
    
    const { insertPlayerNames, chooseSign, setActivePlayer } = Player();

    const getPlayerName = insertPlayerNames;
    const getActivePlayer = setActivePlayer;

    const playRound = function(activePlayer) {
        drawSign(activePlayer.sign);
    }
    
    return { 
        playRound,
        insertPlayerNames,
        chooseSign,
        setActivePlayer
    }
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
        const getActivePlayer = function() {
            console.log(`Active player is ${activePlayer.name}`);
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

const game = GameController();
const gettingPlayerName = game.insertPlayerNames();
gettingPlayerName(1);
gettingPlayerName(2);
game.chooseSign();
game.setActivePlayer();
const gettingActivePlayer = game.setActivePlayer();
gettingActivePlayer();
game.playRound()