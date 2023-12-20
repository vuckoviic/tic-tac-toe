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