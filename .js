let board = ['', '', '', '', '', '', '', '', ''];


let currentPlayer = 'X';


let gameActive = true;


const statusDisplay = document.getElementById('status');


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function checkWinner() {

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {

            statusDisplay.textContent = "Player " + currentPlayer + " has won!";
            gameActive = false;
            return true;
        }
    }

    if (!board.includes('')) {
        statusDisplay.textContent = 'Game ended in a draw!';
        gameActive = false;
        return true;
    }

    return false;
}


function makeMove(index) {

    if (board[index] || !gameActive) return;


    board[index] = currentPlayer;
    document.getElementById("cell-" + index).textContent = currentPlayer;


    if (!checkWinner()) {

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}


function resetGame() {

    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.textContent = '';


    for (let i = 0; i < 9; i++) {
        document.getElementById("cell-" + i).textContent = '';
    }
}
