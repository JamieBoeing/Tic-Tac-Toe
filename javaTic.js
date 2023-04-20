// create an array to represent the board
let board = ['', '', '', '', '', '', '', '', '']

// create a variable to keep track of whose turn it is
let turn = 'X'

//get all the cells on the game board
const cells = document.querySelectorAll('.cell')

// add an event listener to each cell
cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true})
})

// function to handle a cell being clicked
function handleClick (e) {
    //get the index of the clicked cell
const index = e.target.dataset.index

//update the game board with the current players symbol
board [index] = turn

//set the clicked cell's text content to the current players symbol
e.target.textContent = turn
//check if the game is over
if (checkWin()) {
    alert(`${turn} wins!`)
    return
} else if (checkDraw()) {
    alert('Draw!')
    return
}

//switch to the other player's turn
turn = turn === 'X' ? 'O' : 'X'
}

//function to check if the game has been won
function checkWin() {
    //define all possible win conditions
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    //check if any of the win conditions have been met
    return winConditions.some(condition => {
        return condition.every(index => {
            return board[index] === turn
        })
    })
}

//function to check if the game has ended in a draw
function checkDraw() {
    //check if all cells have been filled
    return board.every(cell => {
        return cell !== ''
    })
}
