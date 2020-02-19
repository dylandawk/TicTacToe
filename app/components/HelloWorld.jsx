const React = require("react");
const util = require("../logic/util.js");
const PlayerStatus = require("./PlayerStatus.jsx");

function PageRoot() {
  const rows = 3;
  const columns = 3;

  const [player, setPlayer] = React.useState("X");
  const [gameState, setGameState] = React.useState(0);
  const PLAYER_ONE = "X";
  const PLAYER_TWO = "O";
  const EMPTY = "-";
  const [grid, setGrid] = React.useState( [
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
  ]);
  
  const buttonStyle = {
    backgroundColor: "#4CAF50", /* Green */
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px"
  };

  const rowCrossed = () => {
    for (let i=0; i<rows; i++) 
    { 
        if (grid[i][0] == grid[i][1] && 
            grid[i][1] == grid[i][2] &&  
            grid[i][0] != EMPTY) 
            return (true); 
    } 
    return(false); 
  }

  const columnCrossed = () => {
    for (let i=0; i<columns; i++) 
    { 
        if (grid[0][i] == grid[1][i] && 
            grid[1][i] == grid[2][i] &&  
            grid[0][i] != EMPTY) 
            return (true); 
    } 
    return(false); 
  }

  const diagonalCrossed = () => {

    if (grid[0][0] == grid[1][1] && 
      grid[1][1] == grid[2][2] &&  
      grid[0][0] != EMPTY) 
      return(true); 
        
    if (grid[0][2] == grid[1][1] && 
        grid[1][1] == grid[2][0] && 
        grid[0][2] != EMPTY) 
        return(true); 

    return(false); 
  }
  
  const gameTie = () => {
    for(let i = 0; i<rows; i++){
      for(let j = 0; j<columns; j++){
        if ()
      }
    }
  }

  //check if someone has won
  const gameOver = () => {
    return(rowCrossed(grid) || columnCrossed(grid) || diagonalCrossed(grid) );
  }
  const resetGame = () => {
    let gridCopy = [...grid];
    for(let i = 0; i<rows; i++){
      for(let j = 0; j<columns; j++){
        gridCopy[i][j] = EMPTY;
      }
    }
    setGrid(gridCopy);
    setGameState(0);
  }
  
  
  //change button to one clicked
  const setTile = (row, column) => {
    let gridCopy = [...grid];
    gridCopy[row][column] = player;
    setGrid(gridCopy);
  }  
  
  
  //change player who goes next
  const setTurn = () => {
    (player == PLAYER_ONE) ? setPlayer(PLAYER_TWO): setPlayer(PLAYER_ONE);
  }
  
  //change button and set turn
  const  playGame = (buttonClicked) =>
  {
    let row = Math.floor(buttonClicked/rows);
    let column = buttonClicked % columns;
    if(grid[row][column]== EMPTY) setTile(row, column);
    if(!gameOver()){
      setTurn();
    }
    else{
      setGameState(1);
    }
  }

  return <div>
    <h2>Let's Play Tic Tac Toe!</h2>
    <br></br>
    <PlayerStatus playerTurn = {player} gameState = {gameState}/>
    <button style = {buttonStyle} onClick = {() => playGame(0)}> {grid[0][0]} </button>
    <button style = {buttonStyle} onClick = {() => playGame(1)}> {grid[0][1]} </button> 
    <button style = {buttonStyle} onClick = {() => playGame(2)}> {grid[0][2]} </button>
    <br></br>
    <button style = {buttonStyle} onClick = {() => playGame(3)}> {grid[1][0]} </button>
    <button style = {buttonStyle} onClick = {() => playGame(4)}> {grid[1][1]} </button>
    <button style = {buttonStyle} onClick = {() => playGame(5)}> {grid[1][2]} </button>
    <br></br>
    <button style = {buttonStyle} onClick = {() => playGame(6)}> {grid[2][0]} </button>
    <button style = {buttonStyle} onClick = {() => playGame(7)}> {grid[2][1]} </button>
    <button style = {buttonStyle} onClick = {() => playGame(8)}> {grid[2][2]} </button>
    <br></br>
    <br></br>
    <button onClick = {resetGame} > Reset </button>
  </div>

}

module.exports = PageRoot;
