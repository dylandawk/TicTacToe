const React = require("react");
const util = require("../logic/util.js");
const PlayerStatus = require("./PlayerStatus.jsx");

function PageRoot() {
  const rows = 3;
  const columns = 3;
  const [grid, setGrid] = React.useState( [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
    ]);
  const [player, setPlayer] = React.useState("X");
  const [gameState, setGameState] = React.useState(0);
  const PLAYER_ONE = "X";
  const PLAYER_TWO = "O";
  
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
            grid[i][0] != "-") 
            return (true); 
    } 
    return(false); 
  }

  const columnCrossed = () => {
    for (let i=0; i<columns; i++) 
    { 
        if (grid[0][i] == grid[1][i] && 
            grid[1][i] == grid[2][i] &&  
            grid[0][i] != "-") 
            return (true); 
    } 
    return(false); 
  }

  const diagonalCrossed = () => {

    if (grid[0][0] == grid[1][1] && 
      grid[1][1] == grid[2][2] &&  
      grid[0][0] != "-") 
      return(true); 
        
    if (grid[0][2] == grid[1][1] && 
        grid[1][1] == grid[2][0] && 
        grid[0][2] != "-") 
        return(true); 

    return(false); 
  }

  //check if someone has won
  const gameOver = () => {
    return(rowCrossed(grid) || columnCrossed(grid) || diagonalCrossed(grid) );
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
    if(grid[row][column]== "-") setTile(row, column);
    if(!gameOver()){
      setTurn();
    }
  }

  return <div>
    <h2>Hello World!</h2>
    <br></br>
    <PlayerStatus playerTurn = {player}/>
    <button style = {buttonStyle} onClick = {() => playGame(0)}> {grid[0][0]} </button>
    <button style = {buttonStyle} onClick = "playGame(1)"> {grid[0][1]} </button> 
    <button style = {buttonStyle} onClick = "playGame(2)"> {grid[0][2]} </button>
    <br></br>
    <button style = {buttonStyle} onClick = "playGame(3)"> {grid[1][0]} </button>
    <button style = {buttonStyle} onClick = "playGame(4)"> {grid[1][2]} </button>
    <button style = {buttonStyle} onClick = "playGame(5)"> {grid[2][0]} </button>
    <br></br>
    <button style = {buttonStyle} onClick = "playGame(6)"> {grid[2][1]} </button>
    <button style = {buttonStyle} onClick = "playGame(7)"> {grid[2][2]} </button>
    <button style = {buttonStyle} onClick = "playGame(8)"> {grid[2][2]} </button>
  </div>

}

module.exports = PageRoot;
