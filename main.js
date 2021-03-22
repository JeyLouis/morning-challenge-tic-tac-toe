const boxElements = document.querySelectorAll('.box')
let playerOneCount = 0
let playerTwoCount = 0
let clickCount = 0
let win = false
let board = ['','','','','','','','','']
const restart = document.querySelectorAll('Restartbutton')


function swapTurn(boxElement, id){
console.log(id);

  if (clickCount % 2 === 1){
    boxElement.classList.add('x')
    board[id] = 'Player Two'
    checkForWin();

  }
  else {
    isPlayerTwoTurn = true
    boxElement.classList.add('o')
    board[id] = 'Player One'
    checkForWin();

  }
  clickCount++
console.log(`clickCount: ${clickCount} so far`)
}
const clickHandle = (e)=>{
  e.target.removeEventListener('click', clickHandle)
  console.log('receieve clicks');
  swapTurn(e.target, e.target.id);
  console.log(board);
}

boxElements.forEach(cell =>{
 return cell.addEventListener('click', clickHandle)
})

function checkForWin(){
  let combo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

for(let i = 0; i < combo.length; i++){
  let current = combo[i]
  if(board[current[0]]==='' || board[current[1]]==='' || board[current[2]]===''){
    continue
  }

  if(board[current[0]]===  board[current[1]] && board[current[1]]=== board[current[2]]){
    document.querySelector('.winnerMessage').innerHTML = 'Game Over! ' + board[current[0]] + ' Won!'
    win = true
    console.log(win);
    boxElements.forEach(cell =>{
     return cell.removeEventListener('click', clickHandle)
    })

  }
  if(board.indexOf('')=== -1 && win === false){
    document.querySelector('.winnerMessage').innerHTML = 'Its a Draw!'

  }
}}
document.querySelector('.reset').addEventListener('click', reset)

function reset(){
  location.reload();
  console.log(rest);
}
