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
        
        // fix ifs later (they don't work correctly)

        // if (drawingSignRow === "NaN" && drawingSignRow > 3) {
        //     drawingSignRow = alert("ERROR! Invalid input. Try again:");
        //     playRound(activePlayer);
        // }
        
        drawingSignColumn = prompt(`${activePlayer.name} please insert table column: `);
        drawingSignColumn = parseInt(drawingSignColumn);

        // if (drawingSignColumn === "NaN" && drawingSignColumn > 3) {
        //     drawingSignColumn = alert("ERROR! Invalid input. Try again:");
        //     playRound(activePlayer);
        // }


        // if (activePlayer.sign === "X") {
        //     let X = {};
        //     board[drawingSignRow-1][drawingSignColumn-1] = X;
        //     console.log(X);
        // }
        // else {
        //     let O = {};
        //     board[drawingSignRow-1][drawingSignColumn-1] = O;
        // }
        
        board[drawingSignRow-1][drawingSignColumn-1] = activePlayer.sign;
        board[drawingSignRow-1][drawingSignColumn-1].taken = true;
        board[drawingSignRow-1][drawingSignColumn-1].sign = activePlayer.sign; 
        
        console.log(typeof(board[drawingSignRow-1][drawingSignColumn-1]));
        console.log(board[drawingSignRow-1][drawingSignColumn-1].taken);
        console.log(board[drawingSignRow-1][drawingSignColumn-1].sign);   
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
    
    const { insertPlayerNames, chooseSign, setActivePlayer, getActivePlayer, changeActivePlayer } = Player();

    const { drawSign, getBoard } = Gameboard;

    const playRound = function() {
        let activePlayer = getActivePlayer();
        drawSign(activePlayer);
        activePlayer = changeActivePlayer();
    }
    
    return { 
        playRound,
        insertPlayerNames,
        getActivePlayer,
        chooseSign,
        setActivePlayer,
        drawSign,
        getBoard
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
        game.playRound();
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
const gettingPlayerName = game.insertPlayerNames();
gettingPlayerName(1);
gettingPlayerName(2);
game.chooseSign();
game.setActivePlayer();
game.getActivePlayer();
game.playRound();
console.log(game.getBoard());
game.playRound();
console.log(game.getBoard());