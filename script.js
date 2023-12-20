function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    // creating 2d array
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => {
        return board;
    }
    
    const drawToken = function (row, column, player) {
        // logic fow drawing X or O in table
    }
    
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    };

    return { getBoard, drawToken, printBoard };
}

function Cell() {
    let value = "";

    const addToken = function (player) {
        if (player == 1) {
            value = "X";
        }

        else {
            value = "O";
        }
    }

    const getValue = function () {
        return value;
    }

    return { addToken, getValue };
}

function GameController(playerOneName, playerTwoName) {
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            token: "X"
        },

        {
            name: playerTwoName,
            token: "O"
        }
    ];

    let activePlayer = players[0];

    const swhitchPlayerTurn = function() {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        }
        else {
            activePlayer = players[0];
        }
    }
    
    const getActivePlayer = function (){
        return activePlayer;
    }

    const playRound = function(row, column) {
        board.drawToken(row, column, getActivePlayer().token);
    }

    return { playRound, getActivePlayer };
}